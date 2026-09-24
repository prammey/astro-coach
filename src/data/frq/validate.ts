// Checks one curated FRQ exam file before it can be seeded. Used by both
// the test gate (src/data/frq/frq-seed.test.ts) and scripts/seed-frq.ts, so
// a mistake is caught in `npm test` rather than on a student's screen.

import type { FrqSeedExam, FrqSeedQuestion } from "./types";

export function questionSlug(exam: FrqSeedExam, question: FrqSeedQuestion): string {
  return `${exam.slug}-q${question.number.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

const FIGURE_MARKER = /\[\[figure:([a-z0-9_-]+)\]\]/g;

/// Every problem found in one exam, as readable sentences. Empty = valid.
export function validateExam(
  exam: FrqSeedExam,
  figureExists: (exam: FrqSeedExam, file: string) => boolean,
): string[] {
  const problems: string[] = [];
  const slugs = new Set<string>();

  for (const question of exam.questions) {
    const where = `${exam.slug} Q${question.number}`;
    const slug = questionSlug(exam, question);
    if (slugs.has(slug)) problems.push(`${where}: duplicate question number`);
    slugs.add(slug);

    const parts = question.parts ?? [];
    const figures = question.figures ?? [];
    const keys = new Set(figures.map((f) => f.key));

    if (question.points <= 0) problems.push(`${where}: no point value`);
    if (parts.length > 0) {
      const sum = parts.reduce((total, part) => total + part.points, 0);
      if (Math.abs(sum - question.points) > 1e-6) {
        problems.push(`${where}: parts add up to ${sum}, not ${question.points}`);
      }
      const labels = new Set<string>();
      for (const part of parts) {
        if (labels.has(part.label)) problems.push(`${where}: duplicate part ${part.label}`);
        labels.add(part.label);
        if (part.points <= 0) problems.push(`${where} ${part.label}: no point value`);
        const step = question.pointStep ?? 1;
        if (Math.abs(part.points / step - Math.round(part.points / step)) > 1e-6) {
          problems.push(`${where} ${part.label}: ${part.points} points is not a multiple of the point step ${step}`);
        }
        if (part.format === "SHORT_ANSWER" && !(part.blanks && part.blanks.length > 0)) {
          problems.push(`${where} ${part.label}: short answer with no blanks`);
        }
        if (part.format !== "SHORT_ANSWER" && part.blanks) {
          problems.push(`${where} ${part.label}: blanks on a part that is not SHORT_ANSWER`);
        }
        for (const blank of part.blanks ?? []) {
          if (blank.accept.length === 0 && !blank.numeric && !blank.containsAll?.length && !blank.numericInOtherUnits?.length) {
            problems.push(`${where} ${part.label} blank ${blank.label}: accepts nothing`);
          }
        }
      }
      const everyPartSolved = parts.every((part) => part.solution);
      if (!question.solution && !everyPartSolved) {
        problems.push(`${where}: some parts have no solution and there is no whole-question solution`);
      }
    } else if (!question.solution) {
      problems.push(`${where}: no solution`);
    }

    // Figures: files exist, keys are unique, markers point at real figures,
    // and part figures name a real part.
    const seenKeys = new Set<string>();
    for (const figure of figures) {
      if (seenKeys.has(figure.key)) problems.push(`${where}: duplicate figure key ${figure.key}`);
      seenKeys.add(figure.key);
      if (!/^[a-z0-9_-]+$/.test(figure.key)) problems.push(`${where}: bad figure key ${figure.key}`);
      if (!figureExists(exam, figure.file)) problems.push(`${where}: missing figure file ${figure.file}`);
      // The frq-question-media bucket only accepts images.
      if (!/\.(png|jpe?g|webp)$/i.test(figure.file)) {
        problems.push(`${where}: figure ${figure.file} must be a PNG, JPEG or WebP image`);
      }
      if (figure.part && !parts.some((part) => part.label === figure.part)) {
        problems.push(`${where}: figure ${figure.key} names unknown part ${figure.part}`);
      }
    }
    const texts = [
      question.text,
      question.solution ?? "",
      ...parts.flatMap((part) => [part.prompt, part.leadIn ?? "", part.solution ?? ""]),
    ];
    for (const text of texts) {
      for (const match of text.matchAll(FIGURE_MARKER)) {
        if (!keys.has(match[1])) problems.push(`${where}: [[figure:${match[1]}]] has no figure`);
      }
    }
    if (parts.some((p) => p.format === "DRAWING") && !figures.some((f) => f.kind === "ANSWER_SHEET")) {
      problems.push(`${where}: drawing part but no answer sheet`);
    }
    if (question.questionPages.length === 0) problems.push(`${where}: no source page`);
  }

  return problems;
}

/// Every string in a question that is rendered as text, for LaTeX checks.
export function allTextOf(question: FrqSeedQuestion): string[] {
  return [
    question.text,
    question.title ?? "",
    question.solution ?? "",
    question.rubric ?? "",
    ...(question.parts ?? []).flatMap((part) => [
      part.prompt,
      part.leadIn ?? "",
      part.solution ?? "",
      part.rubric ?? "",
    ]),
  ].filter(Boolean);
}
