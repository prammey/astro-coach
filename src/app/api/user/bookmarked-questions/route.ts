import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';

// GET: Fetch user's bookmarked questions, with their latest attempt (if any)
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
    const userId = user.id;

    const bookmarks = await prisma.bookmark.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    const questionIds = bookmarks.map((b) => b.questionId);

    // Latest attempt per bookmarked question, if the user has attempted it
    const attempts = await prisma.userAttempt.findMany({
      where: { userId, questionId: { in: questionIds } },
      orderBy: { createdAt: 'desc' },
      distinct: ['questionId'],
    });
    const attemptByQuestionId = new Map(attempts.map((a) => [a.questionId, a]));

    return NextResponse.json({
      attempts: bookmarks.map((b) => {
        const attempt = attemptByQuestionId.get(b.questionId);
        return {
          id: b.id,
          questionId: b.questionId,
          submittedAnswer: attempt?.submittedAnswer ?? null,
          isCorrect: attempt?.isCorrect ?? null,
          createdAt: b.createdAt.toISOString(),
        };
      }),
    });
  } catch (error) {
    console.error('Error fetching bookmarked questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookmarked questions' },
      { status: 500 }
    );
  }
}
