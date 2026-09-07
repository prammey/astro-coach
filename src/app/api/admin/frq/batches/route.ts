// Starts an FRQ import: records the source metadata an admin supplied and
// issues signed URLs for the question and solution PDFs.
//
// Source PDFs go into an admin-only private bucket. They are third-party
// olympiad papers and are never served to students.

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { createSignedUploadUrl } from "@/lib/pro/storage";
import { ADMIN_SOURCE_BUCKET } from "@/lib/pro/config";

const requestSchema = z.object({
  competition: z.string().min(1).max(100),
  year: z.number().int().min(1900).max(2100),
  examName: z.string().min(1).max(200),
  sourceUrl: z.string().url().nullish(),
  // Never defaulted to anything permissive: an import starts unreviewed
  // and cannot be published until rights have been looked at.
  rightsStatus: z
    .enum([
      "UNREVIEWED",
      "PENDING_PERMISSION",
      "PERMISSION_GRANTED",
      "PUBLIC_DOMAIN",
      "FAIR_USE_CLAIMED",
      "DENIED",
    ])
    .default("UNREVIEWED"),
  notes: z.string().max(2000).nullish(),
});

export async function POST(request: Request) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the import details." }, { status: 400 });
  }

  try {
    const prisma = getPrisma();
    const input = parsed.data;

    const batch = await prisma.frqImportBatch.create({
      data: {
        adminUserId: auth.user.id,
        competition: input.competition,
        year: input.year,
        examName: input.examName,
        sourceUrl: input.sourceUrl ?? null,
        rightsStatus: input.rightsStatus,
        notes: input.notes ?? null,
        status: "pending",
      },
    });

    const prefix = `${batch.id}`;
    const [question, solution] = await Promise.all([
      createSignedUploadUrl(ADMIN_SOURCE_BUCKET, `${prefix}/questions.pdf`),
      createSignedUploadUrl(ADMIN_SOURCE_BUCKET, `${prefix}/solutions.pdf`),
    ]);

    await prisma.frqImportBatch.update({
      where: { id: batch.id },
      data: { questionPdfPath: question.path, solutionPdfPath: solution.path },
    });

    return NextResponse.json({
      batchId: batch.id,
      uploads: {
        question: { signedUrl: question.signedUrl, path: question.path },
        solution: { signedUrl: solution.signedUrl, path: solution.path },
      },
    });
  } catch (error) {
    console.error("Failed to start an FRQ import:", error);
    return NextResponse.json({ error: "Could not start the import." }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const prisma = getPrisma();
  const batches = await prisma.frqImportBatch.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { _count: { select: { questions: true } } },
  });

  return NextResponse.json({ batches });
}
