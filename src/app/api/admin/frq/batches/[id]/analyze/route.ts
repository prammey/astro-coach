// Reads the uploaded PDFs and writes the extracted questions as DRAFTs.
//
// Nothing here publishes anything. Every extracted question is written as
// DRAFT or NEEDS_REVIEW, carrying whatever warnings the extractor raised,
// and only an explicit human approval can move it to PUBLISHED.

import { NextResponse } from "next/server";
import { requireAdminUser } from "@/lib/pro/auth-guard";
import { getPrisma } from "@/lib/prisma";
import { downloadFile } from "@/lib/pro/storage";
import { ADMIN_SOURCE_BUCKET } from "@/lib/pro/config";
import { extractFrqsFromPdfs } from "@/lib/ai/import-extractor";

// Reading two full papers is slow; give it room.
export const maxDuration = 300;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireAdminUser(request);
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const { id } = await params;
  const prisma = getPrisma();

  const batch = await prisma.frqImportBatch.findUnique({ where: { id } });
  if (!batch || !batch.questionPdfPath) {
    return NextResponse.json({ error: "Import not found." }, { status: 404 });
  }

  await prisma.frqImportBatch.update({
    where: { id },
    data: { status: "analyzing", errorMessage: null },
  });

  try {
    const questionPdf = await downloadFile(ADMIN_SOURCE_BUCKET, batch.questionPdfPath);
    if (!questionPdf) {
      throw new Error("The question PDF has not finished uploading.");
    }

    const solutionPdf = batch.solutionPdfPath
      ? await downloadFile(ADMIN_SOURCE_BUCKET, batch.solutionPdfPath)
      : null;

    const result = await extractFrqsFromPdfs(
      { question: questionPdf, solution: solutionPdf },
      { competition: batch.competition, year: batch.year, examName: batch.examName },
    );

    // Extraction spend is tracked alongside grading spend.
    await prisma.aiUsageEvent.create({
      data: {
        kind: "IMPORT_EXTRACTION",
        userId: auth.user.id,
        provider: result.usage.provider,
        model: result.usage.model,
        inputTokens: result.usage.inputTokens,
        outputTokens: result.usage.outputTokens,
        latencyMs: result.usage.latencyMs,
        estimatedCostUsd: result.usage.estimatedCostUsd,
        success: result.ok,
        errorCode: result.ok ? null : "EXTRACTION_FAILED",
      },
    });

    if (!result.ok) {
      await prisma.frqImportBatch.update({
        where: { id },
        data: { status: "failed", errorMessage: result.error ?? "Extraction failed." },
      });
      return NextResponse.json({ error: result.error ?? "Extraction failed." }, { status: 502 });
    }

    let created = 0;
    for (const draft of result.drafts) {
      const slug = `${slugify(batch.competition)}-${batch.year}-${slugify(batch.examName)}-q${slugify(draft.questionNumber)}`;

      // Re-running an analysis must not duplicate questions.
      const existing = await prisma.frqQuestion.findUnique({ where: { slug } });
      if (existing) continue;

      await prisma.frqQuestion.create({
        data: {
          slug,
          competition: batch.competition,
          year: batch.year,
          examName: batch.examName,
          questionNumber: draft.questionNumber,
          title: draft.title,
          primaryCurriculumTopic: draft.topic,
          curriculumTopics: [draft.topic],
          questionText: draft.questionText,
          totalPoints: draft.totalPoints,
          officialSolution: draft.officialSolution,
          gradingRubric: draft.gradingRubric,
          sourceUrl: batch.sourceUrl,
          questionPdfUrl: batch.sourceUrl,
          questionPdfPages: draft.questionPdfPages,
          solutionPdfPages: draft.solutionPdfPages,
          attributionText: `${batch.competition} ${batch.year} — ${batch.examName}`,
          rightsStatus: batch.rightsStatus,
          // Anything with a warning starts as NEEDS_REVIEW so it stands out
          // in the review queue. Neither status is visible to students.
          status: draft.flags.length > 0 ? "NEEDS_REVIEW" : "DRAFT",
          extractionFlags: draft.flags,
          extractionConfidence: draft.confidence,
          importBatchId: batch.id,
          parts: {
            create: draft.parts.map((part) => ({
              label: part.label,
              orderIndex: part.orderIndex,
              prompt: part.prompt,
              maxPoints: part.maxPoints,
              officialSolution: part.officialSolution,
              gradingRubric: part.gradingRubric,
            })),
          },
        },
      });
      created += 1;
    }

    await prisma.frqImportBatch.update({
      where: { id },
      data: { status: "analyzed", analyzedAt: new Date() },
    });

    return NextResponse.json({ created, extracted: result.drafts.length });
  } catch (error) {
    console.error("FRQ extraction failed:", error);
    await prisma.frqImportBatch.update({
      where: { id },
      data: { status: "failed", errorMessage: "Extraction failed." },
    });
    return NextResponse.json({ error: "Extraction failed." }, { status: 500 });
  }
}
