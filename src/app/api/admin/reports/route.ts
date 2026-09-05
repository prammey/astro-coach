import { NextRequest, NextResponse } from 'next/server';
import { getPrisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/admin';
import { findCatalogQuestionById } from '@/data/mcq/catalog.server';

// Lists reported problems for the admin page, newest first, enriched with
// enough question detail to triage without opening each one.
export async function GET(request: NextRequest) {
  const admin = await requireAdmin(request);
  if (!admin.ok) {
    return NextResponse.json({ error: admin.error }, { status: admin.status });
  }

  try {
    const status = new URL(request.url).searchParams.get('status') ?? 'open';

    const prisma = getPrisma();
    const reports = await prisma.questionReport.findMany({
      where: status === 'all' ? {} : { status },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });

    const [openCount, resolvedCount] = await Promise.all([
      prisma.questionReport.count({ where: { status: 'open' } }),
      prisma.questionReport.count({ where: { status: 'resolved' } }),
    ]);

    return NextResponse.json({
      counts: { open: openCount, resolved: resolvedCount },
      reports: reports.map((report) => {
        const question = findCatalogQuestionById(report.questionId);
        return {
          id: report.id,
          questionId: report.questionId,
          // Null when a question has since been renamed or removed.
          questionLabel: question
            ? `${question.competition} ${question.year} Q${question.questionNumber}`
            : null,
          reason: report.reason,
          details: report.details,
          userEmail: report.userEmail,
          status: report.status,
          createdAt: report.createdAt.toISOString(),
        };
      }),
    });
  } catch (error) {
    console.error('Error listing question reports:', error);
    return NextResponse.json({ error: 'Could not load reports' }, { status: 500 });
  }
}

// Marks a single report resolved or reopens it.
export async function PATCH(request: NextRequest) {
  const admin = await requireAdmin(request);
  if (!admin.ok) {
    return NextResponse.json({ error: admin.error }, { status: admin.status });
  }

  try {
    const { id, status } = await request.json();

    if (!id || !['open', 'resolved'].includes(status)) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }

    const prisma = getPrisma();
    await prisma.questionReport.update({ where: { id }, data: { status } });

    return NextResponse.json({ message: 'Updated' });
  } catch (error) {
    console.error('Error updating question report:', error);
    return NextResponse.json({ error: 'Could not update the report' }, { status: 500 });
  }
}
