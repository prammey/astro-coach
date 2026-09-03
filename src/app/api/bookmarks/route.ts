import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';

// GET: Fetch user's bookmarked question IDs
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const prisma = getPrisma();
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId: user.id },
      select: { questionId: true },
    });

    const questionIds = bookmarks.map((b: { questionId: string }) => b.questionId);

    return NextResponse.json({
      bookmarkedQuestionIds: questionIds,
    });
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookmarks' },
      { status: 500 }
    );
  }
}

// POST: Add or remove a bookmark
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionId, action } = body;

    if (!questionId || !action || !['add', 'remove'].includes(action)) {
      return NextResponse.json(
        { error: 'Missing or invalid: questionId, action' },
        { status: 400 }
      );
    }

    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.slice(7);
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const prisma = getPrisma();
    const userId = user.id;

    if (action === 'add') {
      await prisma.bookmark.upsert({
        where: { userId_questionId: { userId, questionId } },
        create: { userId, questionId },
        update: {},
      });
    } else if (action === 'remove') {
      await prisma.bookmark.deleteMany({
        where: { userId, questionId },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating bookmark:', error);
    return NextResponse.json(
      { error: 'Failed to update bookmark' },
      { status: 500 }
    );
  }
}
