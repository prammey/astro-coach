import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/auth';
import { getPrisma } from '@/lib/prisma';
import { publicQuestionCatalog } from '@/data/mcq/catalog.server';

// GET: Fetch user's bookmarked questions with metadata
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

    // Get user's bookmarks
    const bookmarks = await prisma.bookmark.findMany({
      where: { userId },
      select: { questionId: true },
    });

    const bookmarkedQuestionIds = bookmarks.map((b) => b.questionId);

    // Enrich with question metadata from catalog
    const bookmarkedQuestions = bookmarkedQuestionIds
      .map((qId: string) => {
        const question = publicQuestionCatalog.find((q) => q.id === qId);
        return question ? { ...question } : null;
      })
      .filter((q): q is typeof publicQuestionCatalog[0] => q !== null);

    return NextResponse.json({
      bookmarkedQuestions,
      count: bookmarkedQuestions.length,
    });
  } catch (error) {
    console.error('Error fetching bookmarked questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookmarked questions' },
      { status: 500 }
    );
  }
}
