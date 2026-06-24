import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { createMockSupabaseClient } from './supabaseMock';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;
let usingMock = false;

if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });
} else {
  // No real database is connected yet (still provisioning, or unavailable).
  // Fall back to an in-browser mock so the app renders and stays interactive
  // instead of crashing. When real credentials arrive the dev server restarts
  // and the real client above takes over automatically — no code changes.
  usingMock = true;
  if (typeof window !== 'undefined') {
    console.info(
      '[supabase] Running on the in-browser mock database (no VITE_SUPABASE_URL / ' +
        'VITE_SUPABASE_ANON_KEY yet). Data is local and resets when the real ' +
        'database connects.',
    );
  }
  client = createMockSupabaseClient();
}

export const supabase: SupabaseClient = client;

/** True when a real Supabase project is configured (not the in-browser mock). */
export const isSupabaseConfigured = (): boolean => !usingMock;

/** True when the app is currently backed by the in-browser mock database. */
export const isUsingMockSupabase = (): boolean => usingMock;
