// Uploads the curated free-response bank from src/data/frq/ to Supabase:
// figures to the private question-media bucket, questions to Postgres.
//
//   npm run seed:frq
//
// Safe to re-run: questions are upserted by slug, parts by label, and each
// question's figures are replaced. A question is PUBLISHED only if it
// passes the same canPublish() check the admin review screen uses;
// otherwise it is saved as NEEDS_REVIEW and listed at the end.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { config as loadEnv } from "dotenv";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { createClient } from "@supabase/supabase-js";
import { Prisma, PrismaClient } from "../src/generated/prisma/client";
import { frqExams } from "../src/data/frq";
import { questionSlug, validateExam } from "../src/data/frq/validate";
import type { FrqSeedExam } from "../src/data/frq/types";
import { canPublish } from "../src/lib/ai/import-extractor";

loadEnv({ path: ".env.local" });

const BUCKET = "frq-question-media";
const FIGURE_ROOT = path.join(process.cwd(), "src/data/frq/figures");
const RIGHTS_NOTE =
  "Permission to use this competition's problems and solutions confirmed by the site owner (2026-09-24).";

for (const name of ["DATABASE_URL", "NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"]) {
  if (!process.env[name]) throw new Error(`${name} is not set in .env.local`);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });
const storage = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
}).storage.from(BUCKET);

const figurePath = (exam: FrqSeedExam, file: string) => path.join(FIGURE_ROOT, exam.slug, file);
const storagePathFor = (exam: FrqSeedExam, file: string) => `curated/${exam.slug}/${file}`;
const MIME: Record<string, string> = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp" };

async function uploadFigure(exam: FrqSeedExam, file: string) {
  const bytes = readFileSync(figurePath(exam, file));
  const contentType = MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream";
  const { error } = await storage.upload(storagePathFor(exam, file), bytes, { contentType, upsert: true });
  if (error) throw new Error(`Upload failed for ${exam.slug}/${file}: ${error.message}`);
}

async function seedExam(exam: FrqSeedExam, needsReview: string[]) {
  for (const [orderIndex, question] of exam.questions.entries()) {
    const slug = questionSlug(exam, question);
    const parts = question.parts ?? [];

    const publishCheck = canPublish({
      flags: [],
      totalPoints: question.points,
      rightsStatus: "PERMISSION_GRANTED",
      officialSolution: question.solution ?? null,
      parts: parts.map((part) => ({
        maxPoints: part.points,
        officialSolution: part.solution ?? null,
        answerFormat: part.format ?? "WORKED",
        acceptedAnswers: part.blanks ?? null,
      })),
    });
    if (!publishCheck.ok) needsReview.push(`${slug}: ${publishCheck.reasons.join("; ")}`);

    const row = {
      competition: exam.competition,
      year: exam.year,
      examName: exam.examName,
      questionNumber: question.number,
      title: question.title ?? null,
      primaryCurriculumTopic: question.topic,
      curriculumTopics: question.topics ?? [question.topic],
      difficulty: question.difficulty,
      questionText: question.text,
      totalPoints: question.points,
      pointStep: question.pointStep ?? 1,
      section: question.section ?? null,
      orderIndex,
      solutionSource: question.solutionSource,
      officialSolution: question.solution ?? null,
      gradingRubric: question.rubric ?? null,
      sourceUrl: exam.sourceUrl,
      questionPdfUrl: exam.questionPdfUrl ?? null,
      questionPdfPages: question.questionPages,
      solutionPdfUrl: exam.solutionPdfUrl ?? null,
      solutionPdfPages: question.solutionPages ?? [],
      attributionText: exam.attributionText,
      rightsStatus: "PERMISSION_GRANTED" as const,
      rightsNotes: RIGHTS_NOTE,
      status: publishCheck.ok ? ("PUBLISHED" as const) : ("NEEDS_REVIEW" as const),
      extractionFlags: [],
      reviewNotes: "Curated from the official PDFs; seeded by scripts/seed-frq.ts.",
    };

    const saved = await prisma.frqQuestion.upsert({
      where: { slug },
      create: { slug, ...row, publishedAt: publishCheck.ok ? new Date() : null },
      update: row,
      select: { id: true, publishedAt: true },
    });
    if (publishCheck.ok && !saved.publishedAt) {
      await prisma.frqQuestion.update({ where: { id: saved.id }, data: { publishedAt: new Date() } });
    }

    // Parts: upsert by label, remove any the file no longer has.
    const labels = parts.map((part) => part.label);
    await prisma.frqPart.deleteMany({ where: { frqQuestionId: saved.id, label: { notIn: labels } } });
    const partIds = new Map<string, string>();
    for (const [partIndex, part] of parts.entries()) {
      const partRow = {
        orderIndex: partIndex,
        prompt: part.prompt,
        maxPoints: part.points,
        answerFormat: part.format ?? "WORKED",
        leadIn: part.leadIn ?? null,
        officialSolution: part.solution ?? null,
        gradingRubric: part.rubric ?? null,
        acceptedAnswers: part.blanks ? (part.blanks as unknown as Prisma.InputJsonValue) : Prisma.DbNull,
      };
      const savedPart = await prisma.frqPart.upsert({
        where: { frqQuestionId_label: { frqQuestionId: saved.id, label: part.label } },
        create: { frqQuestionId: saved.id, label: part.label, ...partRow },
        update: partRow,
        select: { id: true },
      });
      partIds.set(part.label, savedPart.id);
    }

    // Figures: upload, then replace this question's media rows.
    for (const figure of question.figures ?? []) await uploadFigure(exam, figure.file);
    await prisma.frqMedia.deleteMany({ where: { frqQuestionId: saved.id } });
    for (const [mediaIndex, figure] of (question.figures ?? []).entries()) {
      await prisma.frqMedia.create({
        data: {
          frqQuestionId: saved.id,
          frqPartId: figure.part ? partIds.get(figure.part) ?? null : null,
          kind: figure.kind ?? "QUESTION",
          storagePath: storagePathFor(exam, figure.file),
          key: figure.key,
          caption: figure.caption ?? null,
          orderIndex: mediaIndex,
          sourcePage: figure.sourcePage ?? null,
          needsReview: false,
        },
      });
    }
  }
}

async function main() {
  const startedAt = Date.now();
  const only = process.argv[2]; // optional: seed one exam slug

  const exams = frqExams.filter((exam) => !only || exam.slug === only);
  const problems = exams.flatMap((exam) =>
    validateExam(exam, (e, file) => existsSync(figurePath(e, file))),
  );
  if (problems.length > 0) {
    console.error(`Refusing to seed — ${problems.length} problem(s):\n  ${problems.join("\n  ")}`);
    process.exitCode = 1;
    return;
  }

  const needsReview: string[] = [];
  let questions = 0;
  for (const exam of exams) {
    await seedExam(exam, needsReview);
    questions += exam.questions.length;
    console.log(`  ${exam.slug}: ${exam.questions.length} questions`);
  }

  const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log(`Seeded ${questions} FRQs from ${exams.length} exams in ${seconds}s.`);
  if (needsReview.length > 0) {
    console.log(`${needsReview.length} saved as NEEDS_REVIEW (not published):\n  ${needsReview.join("\n  ")}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
