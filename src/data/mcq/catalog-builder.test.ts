import { describe, expect, it } from "vitest";
import { buildCatalog, fromDbRow, toCatalogQuestion, type McqQuestionRow } from "./catalog-builder";
import { usaaaoMcqs } from "./usaaao_mcqs";
import { iaacMcqs } from "./iaac_mcqs";
import { baaoMcqs } from "./baao_mcqs";
import { allMcqExplanations } from "./explanations";
import type { RawMcqQuestion } from "./types";

const raw = [...usaaaoMcqs, ...iaacMcqs, ...baaoMcqs] as unknown as RawMcqQuestion[];
const questions = raw.map((q) => toCatalogQuestion(q, (id) => allMcqExplanations[id]));
const catalog = buildCatalog(questions);

describe("MCQ catalog builder", () => {
  it("builds stable, unique IDs", () => {
    expect(questions[0].id).toBe("usaaao-2014-national-astronomy-olympiad-q1");
    expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length);
  });

  it("joins follow-up questions into one multi-part item", () => {
    const item = catalog.byId.get("usaaao-2019-first-round-q3-q4");
    expect(item?.parts?.map((p) => p.partLabel)).toEqual(["A", "B"]);
    expect(catalog.byId.has("usaaao-2019-first-round-q4")).toBe(false);
  });

  it("never sends answers or explanations to the browser", () => {
    const json = JSON.stringify(catalog.publicItems);
    expect(json).not.toContain('"correctAnswer"');
    expect(json).not.toContain('"detailedExplanation"');
    expect(json).not.toContain('"explanation"');
    expect(json).not.toContain('"solutionMedia"');
  });

  it("round-trips a question through its database row unchanged", () => {
    for (const question of questions.slice(0, 50)) {
      const row: McqQuestionRow & { createdAt: Date; orderIndex: number } = {
        ...question,
        choices: question.choices,
        questionMedia: question.questionMedia ?? null,
        solutionMedia: question.solutionMedia ?? null,
        continuesFrom: question.continuesFrom ?? null,
        detailedExplanation: question.detailedExplanation ?? null,
        // Database-only columns must not leak into the rebuilt question.
        createdAt: new Date(),
        orderIndex: 0,
      };
      expect(fromDbRow(row)).toEqual(question);
    }
  });
});
