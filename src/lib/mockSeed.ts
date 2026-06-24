/**
 * Seed data for the in-browser mock database (see `supabaseMock.ts`).
 *
 * Auto-generated from the app schema so the preview shows realistic data before
 * a real Supabase database is connected. Ignored once real Supabase credentials
 * are present. Safe to edit by hand; it will be regenerated when the schema
 * changes.
 */
export const mockSeed: Record<string, Record<string, unknown>[]> = {
  "contact_submissions": [
    {
      "id": "contact_submissions-1",
      "name": "Sample Contact Submissions 1",
      "email": "user1@example.com",
      "phone": "Phone 1",
      "subject": "Subject 1",
      "message": "Message 1",
      "created_at": "2026-06-24T08:32:56.634254+00:00",
      "read": true
    },
    {
      "id": "contact_submissions-2",
      "name": "Sample Contact Submissions 2",
      "email": "user2@example.com",
      "phone": "Phone 2",
      "subject": "Subject 2",
      "message": "Message 2",
      "created_at": "2026-06-24T08:32:56.634299+00:00",
      "read": false
    },
    {
      "id": "contact_submissions-3",
      "name": "Sample Contact Submissions 3",
      "email": "user3@example.com",
      "phone": "Phone 3",
      "subject": "Subject 3",
      "message": "Message 3",
      "created_at": "2026-06-24T08:32:56.634342+00:00",
      "read": true
    }
  ]
};
