import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';

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

    // Most recent incorrect attempt per question
    const incorrectAttempts = await prisma.userAttempt.findMany({
      where: { userId, isCorrect: false },
      orderBy: { createdAt: 'desc' },
      distinct: ['questionId'],
      take: 100,
    });

    return NextResponse.json({
      attempts: incorrectAttempts.map((a) => ({
        id: a.id,
        questionId: a.questionId,
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
