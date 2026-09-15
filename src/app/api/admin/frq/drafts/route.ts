// The review queue: every FRQ that is not yet published, newest first.
//
// Paginated, because an import can produce dozens of questions at once and
// the review page should not load them all.

import { NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";

const PAGE_SIZE = 20;

export async function GET(request: Request) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const url = new URL(request.url);
  const status = url.searchParams.get("status");
  const page = Math.max(1, Number(url.searchParams.get("page") ?? "1") || 1);

  const where =
    status && ["DRAFT", "NEEDS_REVIEW", "PUBLISHED", "ARCHIVED"].includes(status)
      ? { status: status as "DRAFT" | "NEEDS_REVIEW" | "PUBLISHED" | "ARCHIVED" }
      : { status: { in: ["DRAFT", "NEEDS_REVIEW"] as ("DRAFT" | "NEEDS_REVIEW")[] } };

  const prisma = getPrisma();
  const [questions, total] = await Promise.all([
    prisma.frqQuestion.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      select: {
        id: true,
        slug: true,
        competition: true,
        year: true,
        examName: true,
        questionNumber: true,
        title: true,
        totalPoints: true,
        status: true,
        rightsStatus: true,
        extractionFlags: true,
        extractionConfidence: true,
        createdAt: true,
        _count: { select: { parts: true } },
      },
    }),
    prisma.frqQuestion.count({ where }),
  ]);

  return NextResponse.json({ questions, total, page, pageSize: PAGE_SIZE });
}
