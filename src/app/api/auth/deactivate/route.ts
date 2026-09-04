import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { getPrisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Permanently deletes the signed-in user's account and everything stored
// about them. This is what the "Deactivate Account" modal promises, so it
// clears their practice data as well as the account itself.
//
// Deleting a user requires Supabase's admin API, which only works with the
// service-role key — the anon key the rest of the app uses is rejected.
export async function POST() {
  try {
    // Identify the caller from their session cookie. Never trust a user ID
    // sent from the browser for something irreversible.
    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

    // Clear their practice data first. If this fails, nothing has been lost
    // and the user can safely retry.
    const prisma = getPrisma();
    const userId = user.id;

    await prisma.$transaction([
      prisma.userAttempt.deleteMany({ where: { userId } }),
      prisma.userQuestionProgress.deleteMany({ where: { userId } }),
      prisma.bookmark.deleteMany({ where: { userId } }),
    ]);

    // Then remove the account itself. Retrying after a failure here is safe:
    // the data deletion above is idempotent.
    const { error: deleteError } = await admin.auth.admin.deleteUser(userId);

    if (deleteError) {
      console.error('Delete user error:', deleteError);
      return NextResponse.json(
        { error: `Could not delete the account: ${deleteError.message}` },
        { status: 400 },
      );
    }

    // Clear the session cookie so the browser is not left holding a token
    // for an account that no longer exists.
    await supabase.auth.signOut();

    return NextResponse.json(
      { message: 'Account deactivated successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Deactivate account error:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
