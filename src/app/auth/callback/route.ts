import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import type { SupabaseClient } from "@supabase/supabase-js";

// Google hands back its own metadata keys (given_name, family_name, name,
// picture). Astro Coach stores names as first_name / last_name / username,
// which is what the dashboard greeting, the profile dropdown and the
// settings form all read. Without this translation a Google user would
// land on an empty-looking profile.
async function fillProfileFromGoogle(supabase: SupabaseClient, user: User) {
  const meta = user.user_metadata ?? {};

  // Already filled in — either by an earlier sign-in or by the user
  // editing their profile. Never overwrite what they chose themselves.
  if (meta.first_name) return;

  // Google usually sends given_name/family_name; fall back to splitting
  // the display name when it doesn't.
  const displayName: string = meta.full_name || meta.name || "";
  const [splitFirst, ...splitRest] = displayName.trim().split(/\s+/);

  const firstName: string = meta.given_name || splitFirst || "";
  const lastName: string = meta.family_name || splitRest.join(" ") || "";
  if (!firstName) return;

  await supabase.auth.updateUser({
    data: {
      first_name: firstName,
      last_name: lastName,
      full_name: displayName || `${firstName} ${lastName}`.trim(),
      // Matches email/password signup, where the username starts as the
      // first name and stays editable in profile settings.
      username: meta.username || firstName,
      // Carry the Google avatar over so the profile picture is set too.
      profile_image_url: meta.profile_image_url || meta.avatar_url || meta.picture || "",
    },
  });
}

// Google OAuth (and magic links) redirect back here with a one-time
// "code" in the URL. We exchange that code for a real logged-in session,
// then send the user on to their dashboard.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      if (data.user) {
        try {
          await fillProfileFromGoogle(supabase, data.user);
        } catch (profileError) {
          // A profile that failed to populate is not worth blocking the
          // login over — they are signed in, and settings stays editable.
          console.error("Could not populate profile from Google:", profileError);
        }
      }
      return NextResponse.redirect(`${origin}/dashboard`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=Could not log you in`);
}
