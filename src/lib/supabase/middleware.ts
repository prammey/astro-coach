import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Supabase session cookies expire and need refreshing. Without this,
// users would get logged out unexpectedly even with a valid session.
// This runs on every request via middleware.ts.
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Refreshing the session reads the cookie and re-validates it with
  // Supabase, updating it if needed. Calling getUser() (not getSession())
  // matters here because it actually checks with the Supabase server
  // instead of just trusting the local cookie.
  await supabase.auth.getUser();

  return supabaseResponse;
}
