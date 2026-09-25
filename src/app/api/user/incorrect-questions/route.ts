import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { getQuestionLabeler, MAX_DASHBOARD_ROWS } from '@/lib/question-row';

// GET: Fetch user's most recent incorrect attempt per question
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
    const questionLabelFor = await getQuestionLabeler();

    // Most recent incorrect attempt per question
    const incorrectAttempts = await prisma.userAttempt.findMany({
      where: { userId, isCorrect: false },
      orderBy: { createdAt: 'desc' },
      distinct: ['questionId'],
      // One extra row tells us whether the list was cut off.
      take: MAX_DASHBOARD_ROWS + 1,
    });

    return NextResponse.json({
      truncated: incorrectAttempts.length > MAX_DASHBOARD_ROWS,
      attempts: incorrectAttempts.slice(0, MAX_DASHBOARD_ROWS).map((a) => ({
        id: a.id,
        questionId: a.questionId,
        questionLabel: questionLabelFor(a.questionId),
        submittedAnswer: a.submittedAnswer,
        isCorrect: a.isCorrect,
        createdAt: a.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error('Error fetching incorrect questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch incorrect questions' },
      { status: 500 }
    );
  }
}
