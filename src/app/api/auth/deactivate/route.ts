import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { createAdminClient } from '@/lib/supabase/admin';
import { deleteAllUserData } from '@/lib/account/delete-account';

// Permanently deletes the signed-in user's account and everything stored
// about them. This is what the "Deactivate Account" modal promises, so it
// clears their practice data as well as the account itself.
//
// Auth works the same way as every other route here: the browser sends its
// access token, which the server verifies. The session lives in
// localStorage rather than cookies, so a cookie-based check sees nobody.
//
// Deleting a user requires Supabase's admin API, which only works with the
// service-role key — the anon key the rest of the app uses is rejected.
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Identify the caller from their token. Never trust a user ID sent from
    // the browser for something irreversible.
    const token = authHeader.slice(7);
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // The settings page re-checks the password just before calling this
    // route, which counts as a fresh sign-in. Requiring that here, on the
    // server, means a stolen or left-behind token alone cannot delete an
    // account.
    if (!signedInRecently(user.last_sign_in_at)) {
      return NextResponse.json(
        { error: 'For your security, please re-enter your password and try again.' },
        { status: 401 },
      );
    }

    let admin;
    try {
      admin = createAdminClient();
    } catch (configError) {
      // Missing service-role key: report it plainly rather than as a
      // generic failure, because it is a deployment problem, not a user one.
      console.error('Deactivate account misconfigured:', configError);
      return NextResponse.json(
        {
          error:
            'Account deletion is not configured on the server. Please contact support.',
        },
        { status: 500 },
      );
    }

    // Stop their billing, then delete their files and data. Every step is
    // safe to repeat, so after a failure the user can simply try again.
    const userId = user.id;

    try {
      await deleteAllUserData(userId);
    } catch (dataError) {
      console.error('Delete user data error:', dataError);
      return NextResponse.json(
        {
          error:
            'Could not delete your account. Your login was not removed — please try again.',
        },
        { status: 500 },
      );
    }

    // Then remove the account itself. Retrying after a failure here is safe:
    // the data deletion above is idempotent.
    const { error: deleteError } = await admin.auth.admin.deleteUser(userId);

    if (deleteError) {
      // Details stay in the server log; the student gets a plain message.
      console.error('Delete user error:', deleteError);
      return NextResponse.json(
        { error: 'Could not delete the account. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Account deactivated successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Deactivate account error:', error);
    return NextResponse.json(
      { error: 'Could not delete the account. Please try again.' },
      { status: 500 },
    );
  }
}

/// How recently the user must have typed their password to delete the account.
const RECENT_SIGN_IN_MS = 10 * 60 * 1000;

/// Whether the user's last password sign-in was within RECENT_SIGN_IN_MS.
function signedInRecently(lastSignInAt: string | undefined): boolean {
  if (!lastSignInAt) return false;
  const signedInAt = new Date(lastSignInAt).getTime();
  return Number.isFinite(signedInAt) && Date.now() - signedInAt <= RECENT_SIGN_IN_MS;
}
