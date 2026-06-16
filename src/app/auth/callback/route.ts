import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Google OAuth (and magic links) redirect back here with a one-time
// "code" in the URL. We exchange that code for a real logged-in session,
// then send the user on to their dashboard.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}/dashboard`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=Could not log you in`);
}
