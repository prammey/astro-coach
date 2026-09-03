import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { publicQuestionCatalog } from '@/data/mcq/catalog.server';

// GET: Fetch user's incorrect question IDs and metadata
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

    // Get all incorrect attempts (where isCorrect = false)
    const incorrectAttempts = await prisma.userAttempt.findMany({
      where: {
        userId,
        isCorrect: false,
      },
      select: {
        questionId: true,
      },
      distinct: ['questionId'],
    });

    // Get unique incorrect question IDs
    const incorrectQuestionIds = [...new Set(incorrectAttempts.map((a) => a.questionId))];

    // Enrich with question metadata from catalog
    const incorrectQuestions = incorrectQuestionIds
      .map((qId: string) => {
        const question = publicQuestionCatalog.find((q) => q.id === qId);
        return question ? { ...question } : null;
      })
      .filter((q): q is typeof publicQuestionCatalog[0] => q !== null);

    return NextResponse.json({
      incorrectQuestions,
      count: incorrectQuestions.length,
    });
  } catch (error) {
    console.error('Error fetching incorrect questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch incorrect questions' },
      { status: 500 }
    );
  }
}
