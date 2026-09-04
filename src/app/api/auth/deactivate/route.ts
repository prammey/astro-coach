import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { createAdminClient } from '@/lib/supabase/admin';
import { getPrisma } from '@/lib/prisma';

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
