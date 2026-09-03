import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { publicQuestionCatalog } from '@/data/mcq/catalog.server';

// GET: Fetch user's attempted questions with full metadata
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

    // Get all attempted questions (unique)
    const attempts = await prisma.userAttempt.findMany({
      where: { userId },
      select: { questionId: true },
      distinct: ['questionId'],
    });

    const attemptedQuestionIds = attempts.map((a) => a.questionId);

    // Enrich with question metadata from catalog, limit to 20 for performance
    const attemptedQuestions = attemptedQuestionIds
      .slice(0, 20)
      .map((qId: string) => {
        const question = publicQuestionCatalog.find((q) => q.id === qId);
        return question ? { ...question } : null;
      })
      .filter((q): q is typeof publicQuestionCatalog[0] => q !== null);

    return NextResponse.json({
      attemptedQuestions,
      count: attemptedQuestions.length,
    });
  } catch (error) {
    console.error('Error fetching attempted questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch attempted questions' },
      { status: 500 }
    );
  }
}
