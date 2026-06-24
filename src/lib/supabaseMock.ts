/**
 * In-browser mock that implements the subset of the supabase-js surface the
 * generated app uses (PostgREST query builder, auth, storage, realtime). It lets
 * the app run fully — render lists, create/edit/delete rows, sign in — BEFORE a
 * real Supabase database has been provisioned (or when one is unavailable, e.g.
 * a plan limit was hit). Data is seeded from `mockSeed` and persisted to
 * localStorage so it survives reloads.
 *
 * When the real `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` arrive, the dev
 * server restarts and `supabase.ts` swaps this out for the real client — no app
 * code changes required.
 */
import type { SupabaseClient } from '@supabase/supabase-js';
import { mockSeed } from './mockSeed';

type Row = Record<string, any>;
type QueryResult = { data: any; error: { message: string } | null; count: number | null };
// Permissive option shapes (index signature) so any extra supabase-js options
// passed by generated code don't trip TypeScript's excess-property checks.
interface AnyOptions {
  [key: string]: unknown;
}
interface UpsertOptions extends AnyOptions {
  onConflict?: string;
}
interface OrderOptions extends AnyOptions {
  ascending?: boolean;
}

const DB_KEY = 'sparkly_mock_db_v1';
const AUTH_KEY = 'sparkly_mock_auth_v1';

function hasStorage(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage;
  } catch {
    return false;
  }
}

function uuid(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    /* ignore */
  }
  return 'mock-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

/** Module-level in-memory database, hydrated from localStorage + the seed. */
class MockStore {
  private tables: Record<string, Row[]>;

  constructor() {
    const seed = deepClone(mockSeed ?? {}) as Record<string, Row[]>;
    let persisted: Record<string, Row[]> = {};
    if (hasStorage()) {
      try {
        const raw = window.localStorage.getItem(DB_KEY);
        if (raw) persisted = JSON.parse(raw) as Record<string, Row[]>;
      } catch {
        persisted = {};
      }
    }
    // Persisted rows win (the user has been editing); seed fills in any table
    // the user has never touched so first render still has realistic data.
    this.tables = { ...seed, ...persisted };
  }

  rows(table: string): Row[] {
    if (!this.tables[table]) this.tables[table] = [];
    return this.tables[table];
  }

  setRows(table: string, rows: Row[]): void {
    this.tables[table] = rows;
    this.persist();
  }

  persist(): void {
    if (!hasStorage()) return;
    try {
      window.localStorage.setItem(DB_KEY, JSON.stringify(this.tables));
    } catch {
      /* quota / serialization issues are non-fatal for a mock */
    }
  }
}

const store = new MockStore();

type Op = 'select' | 'insert' | 'update' | 'delete' | 'upsert';
type Predicate = (row: Row) => boolean;

class MockQueryBuilder implements PromiseLike<QueryResult> {
  private filters: Predicate[] = [];
  private op: Op = 'select';
  private payload: Row[] = [];
  private updateValues: Row = {};
  private onConflict = 'id';
  private orderColumn: string | null = null;
  private orderAscending = true;
  private limitCount: number | null = null;
  private rangeFrom: number | null = null;
  private rangeTo: number | null = null;
  private _single = false;
  private _maybeSingle = false;

  constructor(private readonly table: string) {}

  select(_columns?: string, _options?: AnyOptions): this {
    // `.select()` is both the initial read op and the "return representation"
    // modifier after a mutation; in this mock both simply read back the rows.
    return this;
  }

  insert(values: Row | Row[], _options?: AnyOptions): this {
    this.op = 'insert';
    this.payload = Array.isArray(values) ? values : [values];
    return this;
  }

  upsert(values: Row | Row[], options?: UpsertOptions): this {
    this.op = 'upsert';
    this.payload = Array.isArray(values) ? values : [values];
    if (options?.onConflict) this.onConflict = options.onConflict;
    return this;
  }

  update(values: Row, _options?: AnyOptions): this {
    this.op = 'update';
    this.updateValues = values;
    return this;
  }

  delete(): this {
    this.op = 'delete';
    return this;
  }

  // ---- filters ----
  eq(column: string, value: unknown): this {
    this.filters.push((r) => r[column] === value);
    return this;
  }
  neq(column: string, value: unknown): this {
    this.filters.push((r) => r[column] !== value);
    return this;
  }
  gt(column: string, value: any): this {
    this.filters.push((r) => r[column] > value);
    return this;
  }
  gte(column: string, value: any): this {
    this.filters.push((r) => r[column] >= value);
    return this;
  }
  lt(column: string, value: any): this {
    this.filters.push((r) => r[column] < value);
    return this;
  }
  lte(column: string, value: any): this {
    this.filters.push((r) => r[column] <= value);
    return this;
  }
  like(column: string, pattern: string): this {
    return this.ilikeImpl(column, pattern, false);
  }
  ilike(column: string, pattern: string): this {
    return this.ilikeImpl(column, pattern, true);
  }
  private ilikeImpl(column: string, pattern: string, ci: boolean): this {
    const re = new RegExp(
      '^' + pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/%/g, '.*').replace(/_/g, '.') + '$',
      ci ? 'i' : '',
    );
    this.filters.push((r) => typeof r[column] === 'string' && re.test(r[column] as string));
    return this;
  }
  in(column: string, values: unknown[]): this {
    this.filters.push((r) => values.includes(r[column]));
    return this;
  }
  is(column: string, value: unknown): this {
    this.filters.push((r) => r[column] === value);
    return this;
  }
  contains(column: string, value: any[]): this {
    this.filters.push((r) => Array.isArray(r[column]) && value.every((v) => (r[column] as any[]).includes(v)));
    return this;
  }
  match(query: Row): this {
    this.filters.push((r) => Object.keys(query).every((k) => r[k] === query[k]));
    return this;
  }
  // Unsupported PostgREST operators degrade to no-ops so the app never crashes.
  filter(): this {
    return this;
  }
  or(): this {
    return this;
  }
  not(): this {
    return this;
  }

  // ---- shaping ----
  order(column: string, options?: OrderOptions): this {
    this.orderColumn = column;
    this.orderAscending = options?.ascending !== false;
    return this;
  }
  limit(count: number, _options?: AnyOptions): this {
    this.limitCount = count;
    return this;
  }
  range(from: number, to: number, _options?: AnyOptions): this {
    this.rangeFrom = from;
    this.rangeTo = to;
    return this;
  }
  maybeSingle(): this {
    this._maybeSingle = true;
    return this;
  }
  single(): this {
    this._single = true;
    return this;
  }

  private matched(rows: Row[]): Row[] {
    return rows.filter((r) => this.filters.every((f) => f(r)));
  }

  private resolve(): QueryResult {
    const rows = store.rows(this.table);
    let result: Row[] = [];
    let error: { message: string } | null = null;

    if (this.op === 'select') {
      result = this.matched(rows);
      if (this.orderColumn) {
        const col = this.orderColumn;
        result = [...result].sort((a, b) => {
          if (a[col] === b[col]) return 0;
          const cmp = a[col] > b[col] ? 1 : -1;
          return this.orderAscending ? cmp : -cmp;
        });
      }
      if (this.rangeFrom !== null && this.rangeTo !== null) {
        result = result.slice(this.rangeFrom, this.rangeTo + 1);
      }
      if (this.limitCount !== null) result = result.slice(0, this.limitCount);
    } else if (this.op === 'insert') {
      const inserted = this.payload.map((row) => this.withDefaults(row));
      store.setRows(this.table, [...rows, ...inserted]);
      result = inserted;
    } else if (this.op === 'upsert') {
      const next = [...rows];
      const inserted: Row[] = [];
      for (const raw of this.payload) {
        const row = this.withDefaults(raw);
        const idx = next.findIndex((r) => r[this.onConflict] === row[this.onConflict]);
        if (idx >= 0) next[idx] = { ...next[idx], ...row };
        else next.push(row);
        inserted.push(row);
      }
      store.setRows(this.table, next);
      result = inserted;
    } else if (this.op === 'update') {
      const updated: Row[] = [];
      const next = rows.map((r) => {
        if (this.filters.every((f) => f(r))) {
          const merged = { ...r, ...this.updateValues };
          updated.push(merged);
          return merged;
        }
        return r;
      });
      store.setRows(this.table, next);
      result = updated;
    } else if (this.op === 'delete') {
      const removed = this.matched(rows);
      const removedSet = new Set(removed);
      store.setRows(
        this.table,
        rows.filter((r) => !removedSet.has(r)),
      );
      result = removed;
    }

    if (this._single) {
      if (result.length === 0) {
        return { data: null, error: { message: 'No rows found' }, count: 0 };
      }
      return { data: result[0], error, count: result.length };
    }
    if (this._maybeSingle) {
      return { data: result[0] ?? null, error, count: result.length };
    }
    return { data: result, error, count: result.length };
  }

  private withDefaults(row: Row): Row {
    const next: Row = { ...row };
    if (next.id === undefined || next.id === null) next.id = uuid();
    if (next.created_at === undefined) next.created_at = new Date().toISOString();
    return next;
  }

  then<TResult1 = QueryResult, TResult2 = never>(
    onfulfilled?: ((value: QueryResult) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ): PromiseLike<TResult1 | TResult2> {
    return Promise.resolve(this.resolve()).then(onfulfilled, onrejected);
  }
}

function mockUser(email: string): Row {
  return {
    id: uuid(),
    email,
    user_metadata: {},
    app_metadata: {},
    aud: 'authenticated',
    created_at: new Date().toISOString(),
  };
}

function loadSession(): Row | null {
  if (!hasStorage()) return null;
  try {
    const raw = window.localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as Row) : null;
  } catch {
    return null;
  }
}

function saveSession(session: Row | null): void {
  if (!hasStorage()) return;
  try {
    if (session) window.localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    else window.localStorage.removeItem(AUTH_KEY);
  } catch {
    /* ignore */
  }
}

function makeAuth() {
  const listeners: Array<(event: string, session: Row | null) => void> = [];
  const emit = (event: string, session: Row | null) => {
    for (const cb of listeners) {
      try {
        cb(event, session);
      } catch {
        /* ignore listener errors */
      }
    }
  };
  const sessionFor = (user: Row): Row => ({
    access_token: 'mock-access-token',
    refresh_token: 'mock-refresh-token',
    token_type: 'bearer',
    expires_in: 3600,
    user,
  });
  return {
    async getSession() {
      return { data: { session: loadSession() }, error: null };
    },
    async getUser() {
      const session = loadSession();
      return { data: { user: session?.user ?? null }, error: null };
    },
    onAuthStateChange(cb: (event: string, session: Row | null) => void) {
      listeners.push(cb);
      return { data: { subscription: { unsubscribe() {} } } };
    },
    async signInWithPassword({ email }: { email: string; password?: string }) {
      const session = sessionFor(mockUser(email));
      saveSession(session);
      emit('SIGNED_IN', session);
      return { data: { user: session.user, session }, error: null };
    },
    async signUp({ email }: { email: string; password?: string }) {
      const session = sessionFor(mockUser(email));
      saveSession(session);
      emit('SIGNED_IN', session);
      return { data: { user: session.user, session }, error: null };
    },
    async signInWithOtp({ email }: { email: string }) {
      const session = sessionFor(mockUser(email));
      saveSession(session);
      emit('SIGNED_IN', session);
      return { data: {}, error: null };
    },
    async signInWithOAuth() {
      return { data: { provider: 'mock', url: null }, error: null };
    },
    async signOut() {
      saveSession(null);
      emit('SIGNED_OUT', null);
      return { error: null };
    },
    async resetPasswordForEmail() {
      return { data: {}, error: null };
    },
    async updateUser(attributes: Row) {
      const session = loadSession();
      if (session?.user) {
        session.user = { ...session.user, ...attributes };
        saveSession(session);
      }
      return { data: { user: session?.user ?? null }, error: null };
    },
  };
}

function makeChannel() {
  const channel: Row = {
    on() {
      return channel;
    },
    subscribe(cb?: (status: string) => void) {
      if (cb) cb('SUBSCRIBED');
      return channel;
    },
    unsubscribe() {
      return Promise.resolve('ok');
    },
    send() {
      return Promise.resolve('ok');
    },
  };
  return channel;
}

function makeStorageBucket() {
  return {
    async upload(path: string) {
      return { data: { path }, error: null };
    },
    async update(path: string) {
      return { data: { path }, error: null };
    },
    getPublicUrl(path: string) {
      return { data: { publicUrl: `mock://storage/${path}` } };
    },
    async createSignedUrl(path: string) {
      return { data: { signedUrl: `mock://storage/${path}` }, error: null };
    },
    async remove() {
      return { data: [], error: null };
    },
    async list() {
      return { data: [], error: null };
    },
    async download() {
      return { data: new Blob(), error: null };
    },
  };
}

/** Build a mock that is structurally compatible with the parts of
 *  `SupabaseClient` generated apps use. */
export function createMockSupabaseClient(): SupabaseClient {
  const client = {
    from(table: string) {
      return new MockQueryBuilder(table);
    },
    auth: makeAuth(),
    channel() {
      return makeChannel();
    },
    removeChannel() {
      return Promise.resolve('ok');
    },
    removeAllChannels() {
      return Promise.resolve('ok');
    },
    getChannels() {
      return [];
    },
    storage: {
      from() {
        return makeStorageBucket();
      },
    },
    async rpc() {
      return { data: null, error: null };
    },
  };
  return client as unknown as SupabaseClient;
}

/** True when this build is running against the in-browser mock rather than a
 *  real Supabase project. Apps can use it to show a "demo data" banner. */
export const IS_MOCK_SUPABASE = true;
