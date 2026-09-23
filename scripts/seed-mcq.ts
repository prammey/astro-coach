// Upserts the multiple-choice bank from the versioned seed files into
// Postgres (Supabase). Safe to re-run: existing rows are updated in place,
// nothing is deleted, and the stable question IDs never change.
//
//   npm run seed:mcq
//
// Runs with plain `node` (see scripts/register-ts.mjs), so it needs no
// build step and no extra dependencies. It connects with DATABASE_URL from
// .env.local, exactly like the running app.
import { config as loadEnv } from "dotenv";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "../src/generated/prisma/client";
import { usaaaoMcqs } from "../src/data/mcq/usaaao_mcqs";
import { iaacMcqs } from "../src/data/mcq/iaac_mcqs";
import { baaoMcqs } from "../src/data/mcq/baao_mcqs";
import { allMcqExplanations } from "../src/data/mcq/explanations";
import { buildQuestionId, toCatalogQuestion } from "../src/data/mcq/catalog-builder";
import type { RawMcqQuestion } from "../src/data/mcq/types";

loadEnv({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set — copy .env.example to .env.local and fill it in.");
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

// The seed order is the order the app walks the bank in (Previous/Next).
const rawQuestions = [...usaaaoMcqs, ...iaacMcqs, ...baaoMcqs] as unknown as RawMcqQuestion[];

// How many questions are written at once. Each upsert is a network round
// trip, so a few in parallel cuts the seed from minutes to seconds.
const CONCURRENCY = 8;

let questionsWritten = 0;
let explanationsWritten = 0;

// Writes one question and, if it has one, its explanation.
async function seedOne(raw: RawMcqQuestion, orderIndex: number) {
  const question = toCatalogQuestion(raw, (id) => allMcqExplanations[id]);
  const id = buildQuestionId(raw);

  // Everything except the derived/relational fields goes straight in.
  const row = {
    competition: raw.competition,
    year: raw.year,
    examName: raw.examName,
    questionNumber: raw.questionNumber,
    difficulty: raw.difficulty,
    topic: raw.topic,
    subtopic: raw.subtopic,
    tags: raw.tags,
    primaryCurriculumTopic: question.primaryCurriculumTopic,
    curriculumTopics: question.curriculumTopics,
    questionText: raw.questionText,
    choices: raw.choices,
    correctAnswer: raw.correctAnswer,
    explanation: raw.explanation,
    // Prisma needs DbNull (not plain null) to write SQL NULL into a JSON column.
    questionMedia: (raw.questionMedia as Prisma.InputJsonValue | undefined) ?? Prisma.DbNull,
    solutionMedia: (raw.solutionMedia as Prisma.InputJsonValue | undefined) ?? Prisma.DbNull,
    continuesFrom: raw.continuesFrom ?? null,
    sourceUrl: raw.sourceUrl,
    pdfUrl: raw.pdfUrl,
    pageNumber: raw.pageNumber,
    answerKeyUrl: raw.answerKeyUrl,
    answerKeyPageNumber: raw.answerKeyPageNumber,
    attributionText: raw.attributionText,
    permissionStatus: raw.permissionStatus,
    status: raw.status,
    orderIndex,
  };

  await prisma.mcqQuestion.upsert({ where: { id }, create: { id, ...row }, update: row });
  questionsWritten++;

  const explanation = question.detailedExplanation;
  if (explanation) {
    const explanationRow = {
      solution: explanation.solution,
      wrongChoices: explanation.wrongChoices,
      takeaway: explanation.takeaway,
    };
    await prisma.mcqExplanation.upsert({
      where: { questionId: id },
      create: { questionId: id, ...explanationRow },
      update: explanationRow,
    });
    explanationsWritten++;
  }
}

async function main() {
  const startedAt = Date.now();

  for (let start = 0; start < rawQuestions.length; start += CONCURRENCY) {
    const batch = rawQuestions.slice(start, start + CONCURRENCY);
    await Promise.all(batch.map((raw, offset) => seedOne(raw, start + offset)));
  }

  // Rows for questions that no longer exist in the seed files (removed or
  // renumbered) are reported, not deleted: deleting is a human decision.
  const seededIds = new Set(rawQuestions.map(buildQuestionId));
  const stale = await prisma.mcqQuestion.findMany({ select: { id: true } });
  const staleIds = stale.map((r) => r.id).filter((id) => !seededIds.has(id));

  const seconds = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log(`Seeded ${questionsWritten} questions and ${explanationsWritten} explanations in ${seconds}s.`);
  if (staleIds.length > 0) {
    console.log(`Note: ${staleIds.length} row(s) in the database are not in the seed files: ${staleIds.join(", ")}`);
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
