import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Delete the user account using the admin API
    // Note: This requires the service role key to be set in the server environment
    const adminAuthClient = supabase.auth.admin;
    const { error: deleteError } = await adminAuthClient.deleteUser(user.id);

    if (deleteError) {
      console.error('Delete user error:', deleteError);
      return NextResponse.json(
        { error: 'Failed to delete account' },
        { status: 400 }
      );
    }

    // Sign out the user
    await supabase.auth.signOut();

    return NextResponse.json(
      { message: 'Account deactivated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Deactivate account error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
