import { createBrowserClient } from "@supabase/ssr";

// Used inside Client Components (e.g. the login form) to talk to Supabase
// Auth directly from the browser. Safe to expose — these are the public
// anon key and URL, not secrets.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
