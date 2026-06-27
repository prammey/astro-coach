import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';

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

    // Get all question IDs the user has attempted
    const answeredQuestions = await prisma.userQuestionProgress.findMany({
      where: { userId },
      select: { questionId: true },
    });

    const answeredQuestionIds = answeredQuestions.map((q) => q.questionId);

    return NextResponse.json({ answeredQuestionIds });
  } catch (error) {
    console.error('Error fetching answered questions:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch answered questions' },
      { status: 500 }
    );
  }
}
