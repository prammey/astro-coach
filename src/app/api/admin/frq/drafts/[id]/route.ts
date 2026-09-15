// Reviewing one extracted question: read it in full, edit it, approve it
// for publication, or reject it.
//
// Publication is the last gate before third-party olympiad material becomes
// part of a paid product, so it is deliberately strict. canPublish() must
// agree: no unresolved warnings, a real point value, parts that add up, an
// official solution, and rights that someone has actually reviewed.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { canPublish } from "@/lib/ai/import-extractor";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const question = await getPrisma().frqQuestion.findUnique({
    where: { id },
    include: {
      parts: { orderBy: { orderIndex: "asc" } },
      media: true,
      importBatch: true,
    },
  });

  if (!question) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  // Admins see the whole record, official solutions included — that is the
  // point of the review screen.
  return NextResponse.json({
    question,
    publishCheck: canPublish({
      flags: question.extractionFlags,
      totalPoints: question.totalPoints,
      rightsStatus: question.rightsStatus,
      officialSolution: question.officialSolution,
      parts: question.parts,
    }),
  });
}

const patchSchema = z.object({
  questionText: z.string().min(1).optional(),
  title: z.string().max(300).nullish(),
  totalPoints: z.number().int().min(0).optional(),
  officialSolution: z.string().nullish(),
  gradingRubric: z.string().nullish(),
  primaryCurriculumTopic: z.string().min(1).optional(),
  curriculumTopics: z.array(z.string()).optional(),
  difficulty: z.string().max(50).nullish(),
  rightsStatus: z
    .enum([
      "UNREVIEWED",
      "PENDING_PERMISSION",
      "PERMISSION_GRANTED",
      "PUBLIC_DOMAIN",
      "FAIR_USE_CLAIMED",
      "DENIED",
    ])
    .optional(),
  rightsNotes: z.string().max(2000).nullish(),
  reviewNotes: z.string().max(2000).nullish(),
  /// Warnings the reviewer has looked at and resolved. Clearing them is a
  /// deliberate human act — nothing clears them automatically.
  extractionFlags: z.array(z.string()).optional(),
  parts: z
    .array(
      z.object({
        id: z.string(),
        label: z.string().min(1).max(20),
        prompt: z.string().min(1),
        maxPoints: z.number().int().min(0),
        officialSolution: z.string().nullish(),
        gradingRubric: z.string().nullish(),
      }),
    )
    .optional(),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const parsed = patchSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the fields." }, { status: 400 });
  }

  const { id } = await params;
  const { parts, ...questionFields } = parsed.data;
  const prisma = getPrisma();

  try {
    await prisma.$transaction(async (tx) => {
      await tx.frqQuestion.update({ where: { id }, data: questionFields });

      for (const part of parts ?? []) {
        await tx.frqPart.update({
          where: { id: part.id },
          data: {
            label: part.label,
            prompt: part.prompt,
            maxPoints: part.maxPoints,
            officialSolution: part.officialSolution ?? null,
            gradingRubric: part.gradingRubric ?? null,
          },
        });
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update an FRQ draft:", error);
    return NextResponse.json({ error: "Could not save your changes." }, { status: 500 });
  }
}

const actionSchema = z.object({ action: z.enum(["approve", "reject", "unpublish"]) });

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const parsed = actionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  }

  const { id } = await params;
  const prisma = getPrisma();

  const question = await prisma.frqQuestion.findUnique({
    where: { id },
    include: { parts: true },
  });
  if (!question) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (parsed.data.action === "reject") {
    await prisma.frqQuestion.update({ where: { id }, data: { status: "ARCHIVED" } });
    return NextResponse.json({ ok: true, status: "ARCHIVED" });
  }

  if (parsed.data.action === "unpublish") {
    await prisma.frqQuestion.update({ where: { id }, data: { status: "NEEDS_REVIEW" } });
    return NextResponse.json({ ok: true, status: "NEEDS_REVIEW" });
  }

  const check = canPublish({
    flags: question.extractionFlags,
    totalPoints: question.totalPoints,
    rightsStatus: question.rightsStatus,
    officialSolution: question.officialSolution,
    parts: question.parts,
  });

  if (!check.ok) {
    return NextResponse.json(
      { error: "This question cannot be published yet.", reasons: check.reasons },
      { status: 409 },
    );
  }

  await prisma.frqQuestion.update({
    where: { id },
    data: { status: "PUBLISHED", publishedAt: new Date() },
  });

  return NextResponse.json({ ok: true, status: "PUBLISHED" });
}
