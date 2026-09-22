import { describe, expect, it } from "vitest";
import katex from "katex";
import { realQuestionCatalog } from "../catalog.server";
import { allMcqExplanations } from "./index";
import type { CatalogQuestion } from "../types";

// Every gradable question: standalone items plus each part of a joined item.
function collectGradableQuestions(): CatalogQuestion[] {
  const questions: CatalogQuestion[] = [];
  for (const item of realQuestionCatalog) {
    if (item.parts?.length) {
      questions.push(...item.parts);
    } else {
      questions.push(item);
    }
  }
  return questions;
}

const gradableQuestions = collectGradableQuestions();
const questionsById = new Map(gradableQuestions.map((question) => [question.id, question]));

// Pulls every $...$ and $$...$$ formula out of a string.
function extractFormulas(text: string): string[] {
  const formulas: string[] = [];
  for (const match of text.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)) {
    formulas.push((match[1] ?? match[2]).trim());
  }
  return formulas;
}

// All the prose in one explanation, so a check can sweep everything at once.
function allTextIn(explanation: (typeof allMcqExplanations)[string]): string[] {
  return [...explanation.solution, ...Object.values(explanation.wrongChoices), explanation.takeaway];
}

describe("MCQ explanations", () => {
  it("every explanation belongs to a real question", () => {
    const unknown = Object.keys(allMcqExplanations).filter((id) => !questionsById.has(id));
    expect(unknown).toEqual([]);
  });

  it("every explanation has a solution, a takeaway and a reason for each wrong choice", () => {
    const problems: string[] = [];

    for (const [id, explanation] of Object.entries(allMcqExplanations)) {
      const question = questionsById.get(id);
      if (!question) continue;

      if (explanation.solution.length === 0 || explanation.solution.some((step) => !step.trim())) {
        problems.push(`${id}: empty solution step`);
      }
      if (!explanation.takeaway.trim()) {
        problems.push(`${id}: missing takeaway`);
      }

      const wrongLabels = question.choices
        .map((choice) => choice.label)
        .filter((label) => label !== question.correctAnswer)
        .sort();
      const explainedLabels = Object.keys(explanation.wrongChoices).sort();
      if (JSON.stringify(wrongLabels) !== JSON.stringify(explainedLabels)) {
        problems.push(
          `${id}: wrongChoices keys are [${explainedLabels}] but should be [${wrongLabels}]`
        );
      }
      for (const [label, reason] of Object.entries(explanation.wrongChoices)) {
        if (!reason.trim()) problems.push(`${id}: empty reason for ${label}`);
      }
    }

    expect(problems).toEqual([]);
  });

  it("no wrong-choice reason names the correct letter", () => {
    const leaks: string[] = [];

    for (const [id, explanation] of Object.entries(allMcqExplanations)) {
      const question = questionsById.get(id);
      if (!question) continue;

      // Phrases like "answer is B", "(B)", "choice B" or "option B" would
      // hand the student the answer they have not earned yet.
      const letter = question.correctAnswer;
      const leakPattern = new RegExp(
        `(answer is|correct (answer|choice|option) is|\\(${letter}\\)|choice ${letter}\\b|option ${letter}\\b)`,
        "i"
      );
      for (const [label, reason] of Object.entries(explanation.wrongChoices)) {
        if (leakPattern.test(reason)) leaks.push(`${id} ${label}: "${reason}"`);
      }
    }

    expect(leaks).toEqual([]);
  });

  it("every formula is valid LaTeX that KaTeX can typeset", () => {
    const broken: string[] = [];

    for (const [id, explanation] of Object.entries(allMcqExplanations)) {
      for (const text of allTextIn(explanation)) {
        // An odd number of single dollars means a formula was left open.
        const singleDollars = text.replace(/\$\$/g, "").split("$").length - 1;
        if (singleDollars % 2 !== 0) broken.push(`${id}: unbalanced $ in "${text}"`);

        for (const formula of extractFormulas(text)) {
          try {
            katex.renderToString(formula, { throwOnError: true, strict: "ignore" });
          } catch (error) {
            broken.push(`${id}: ${formula} — ${(error as Error).message}`);
          }
        }
      }
    }

    expect(broken).toEqual([]);
  });

  it("every question in the bank has an explanation", () => {
    const missing = gradableQuestions
      .filter((question) => !allMcqExplanations[question.id])
      .map((question) => question.id);
    expect(missing).toEqual([]);
  });
});
