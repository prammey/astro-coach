import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'No auth header' }, { status: 400 });
    }

    const token = authHeader.slice(7);
    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ user: data.user?.email });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error' },
      { status: 500 }
    );
  }
}
