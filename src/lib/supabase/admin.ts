import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client that uses the service-role key.
//
// The service-role key bypasses Row Level Security and can perform admin
// operations such as deleting a user, so it must NEVER be exposed to the
// browser. It is deliberately not prefixed with NEXT_PUBLIC_, and this
// module must only ever be imported from route handlers or server code.
//
// Everything else in the app uses the anon key via lib/supabase/server.ts.
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not set. Add it to .env.local and to the " +
        "Vercel project's environment variables — it is required to delete accounts.",
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      // No session persistence: this client acts as the service role, not
      // as a signed-in user.
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
