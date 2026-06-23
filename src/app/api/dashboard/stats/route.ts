import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { catalogCounts } from '@/data/mcq/catalog.server';

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

    const uniqueCorrect = await prisma.userQuestionProgress.count({
      where: { userId, isCorrect: true },
    });

    const totalAttempted = await prisma.userQuestionProgress.count({
      where: { userId },
    });

    let accuracy = 0;
    if (totalAttempted > 0) {
      accuracy = Math.round((uniqueCorrect / totalAttempted) * 100);
    }

    const recentAttempts = await prisma.userAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json({
      totalAttempted,
      uniqueCorrect,
      accuracy,
      totalQuestions: catalogCounts.total,
      recentAttempts: recentAttempts.map((a) => ({
        id: a.id,
        questionId: a.questionId,
        submittedAnswer: a.submittedAnswer,
        isCorrect: a.isCorrect,
        createdAt: a.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
