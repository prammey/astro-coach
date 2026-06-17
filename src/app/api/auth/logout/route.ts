import { supabase } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Sign out the user via Supabase
    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
