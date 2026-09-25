import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import katex from "katex";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import MathText from "@/components/MathText";
import { CURRICULUM_TOPICS } from "../mcq/topicTaxonomy";
import { frqExams } from "./index";
import { allTextOf, questionSlug, validateExam } from "./validate";
import { canPublish } from "../../lib/ai/import-extractor";
import { isBlankCorrect } from "../../lib/pro/short-answer";
import type { FrqSeedExam } from "./types";

const FIGURE_ROOT = path.join(process.cwd(), "src/data/frq/figures");

// Typesetting every formula in the bank takes a few seconds, more when the
// whole suite runs in parallel, so these tests get longer than the default.
const HEAVY_RENDER_TIMEOUT_MS = 30_000;

// While writing a new exam file, check just that file before it is added
// to index.ts:  FRQ_FILE=src/data/frq/usaaao-2025-nac.ts npx vitest run src/data/frq
async function examsToCheck(): Promise<FrqSeedExam[]> {
  const file = process.env.FRQ_FILE;
  if (!file) return frqExams;
  const loaded: Record<string, unknown> = await import(/* @vite-ignore */ path.resolve(file));
  return Object.values(loaded).filter(
    (value): value is FrqSeedExam => typeof value === "object" && value !== null && "questions" in value,
  );
}

const exams = await examsToCheck();
const allQuestions = exams.flatMap((exam) => exam.questions.map((question) => ({ exam, question })));

function formulasIn(text: string): string[] {
  return [...text.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)].map((m) => (m[1] ?? m[2]).trim());
}

describe("curated FRQ bank", () => {
  it("every exam passes the seed validator", () => {
    expect(exams.length).toBeGreaterThan(0);
    const problems = exams.flatMap((exam) =>
      validateExam(exam, (e, file) => existsSync(path.join(FIGURE_ROOT, e.slug, file))),
    );
    expect(problems).toEqual([]);
  });

  it("question slugs are unique across the bank", () => {
    const slugs = allQuestions.map(({ exam, question }) => questionSlug(exam, question));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every topic is a real curriculum topic", () => {
    const bad = allQuestions
      .flatMap(({ exam, question }) =>
        [question.topic, ...(question.topics ?? [])].map((t) => [`${exam.slug} Q${question.number}`, t]),
      )
      .filter(([, topic]) => !(CURRICULUM_TOPICS as readonly string[]).includes(topic));
    expect(bad).toEqual([]);
  });

  it("every formula is valid LaTeX", () => {
    const broken: string[] = [];
    for (const { exam, question } of allQuestions) {
      for (const text of allTextOf(question)) {
        for (const formula of formulasIn(text)) {
          try {
            katex.renderToString(formula, { throwOnError: true, strict: "ignore", displayMode: true });
          } catch (error) {
            broken.push(`${exam.slug} Q${question.number}: ${formula.slice(0, 60)} — ${(error as Error).message.slice(0, 80)}`);
          }
        }
      }
    }
    expect(broken).toEqual([]);
  }, HEAVY_RENDER_TIMEOUT_MS);

  it("every text renders with no stray $ or ** left over", () => {
    const stray: string[] = [];
    for (const { exam, question } of allQuestions) {
      for (const text of allTextOf(question)) {
        const html = renderToStaticMarkup(createElement(MathText, { text }));
        const visible = html.replace(/<span class="katex[\s\S]*?<\/annotation>/g, "").replace(/<[^>]+>/g, "");
        if (visible.includes("$") && !/\\\$|US\$|\$\d/.test(text)) stray.push(`${exam.slug} Q${question.number}: $`);
        if (visible.includes("**")) stray.push(`${exam.slug} Q${question.number}: **`);
      }
    }
    expect(stray).toEqual([]);
  }, HEAVY_RENDER_TIMEOUT_MS);

  it("every blank accepts its own listed answers", () => {
    const rejected: string[] = [];
    for (const { exam, question } of allQuestions) {
      for (const part of question.parts ?? []) {
        for (const blank of part.blanks ?? []) {
          const samples = [...blank.accept];
          if (blank.numeric) samples.push(String(blank.numeric.value));
          if (blank.containsAll?.length) samples.push(blank.containsAll.join(" "));
          for (const option of blank.numericInOtherUnits ?? []) {
            for (const unit of option.units) samples.push(`${option.value} ${unit}`);
          }
          for (const sample of samples) {
            if (!isBlankCorrect(blank, sample)) {
              rejected.push(`${exam.slug} Q${question.number} ${part.label} ${blank.label}: "${sample}"`);
            }
          }
        }
      }
    }
    expect(rejected).toEqual([]);
  });

  it("every question would be published", () => {
    const blocked = allQuestions
      .map(({ exam, question }) => {
        const result = canPublish({
          flags: [],
          totalPoints: question.points,
          rightsStatus: "PERMISSION_GRANTED",
          officialSolution: question.solution ?? null,
          parts: (question.parts ?? []).map((part) => ({
            maxPoints: part.points,
            officialSolution: part.solution ?? null,
            answerFormat: part.format ?? "WORKED",
            acceptedAnswers: part.blanks ?? null,
          })),
        });
        return result.ok ? null : `${exam.slug} Q${question.number}: ${result.reasons.join("; ")}`;
      })
      .filter(Boolean);
    expect(blocked).toEqual([]);
  });
});
