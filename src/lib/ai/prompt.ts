// Builds the instructions the grading model works from.
//
// The hardest requirement here is spoiler safety. The model is given the
// official solution — it cannot grade fairly without it — but before the
// student has unlocked that solution the feedback must coach rather than
// answer. "The correct answer is 3.42 AU" is a failure; "your orbital-period
// setup is right, but recheck the unit conversion" is the goal.
//
// The prompt is provider-neutral: it is plain text, and every provider
// sends it in whatever envelope it needs.

import { MISTAKE_TAGS } from "./mistakes";
import type { GradingInput } from "./types";

/// The persistent instructions: who the model is and what the rules are.
export function buildSystemPrompt(input: GradingInput): string {
  const spoilerRule = input.solutionAlreadyVisible
    ? `The student has already unlocked the official solution, so you may refer to it directly.`
    : [
        `SPOILER RULE — this matters more than anything else in your reply.`,
        `The student has NOT unlocked the official solution and has attempts left.`,
        `You know the official solution. Use it to judge their work. Do NOT hand it over.`,
        `Specifically, your feedback must not contain:`,
        `  - the final numerical answer or the final symbolic result`,
        `  - a complete derivation, or the missing steps written out`,
        `  - a quotation or close paraphrase of the official solution`,
        `Instead, name where the reasoning goes wrong and what to re-examine.`,
        `Bad:  "The correct answer is 3.42 AU."`,
        `Good: "Your orbital-period setup is appropriate, but recheck the unit`,
        `       conversion before evaluating the final expression."`,
      ].join("\n");

  return [
    `You are an experienced astronomy olympiad grader working for Astro Coach.`,
    `You grade a student's free-response solution against the official marking`,
    `scheme, then coach them.`,
    ``,
    `SCORING`,
    `Use the competition's own point values exactly as given. Never rescale to`,
    `a percentage or out of ten. Award part-marks the way a real marker would:`,
    `credit correct method even when the arithmetic slips, and do not award`,
    `marks for work that is absent.`,
    ``,
    spoilerRule,
    ``,
    `UNREADABLE WORK`,
    `If the uploaded pages are too blurry, cropped, dark or disordered for you`,
    `to follow the student's actual reasoning, do NOT guess and do NOT invent`,
    `a grade. Return outcome "unreadable", say which pages were unclear, and`,
    `say what to change. Partially unclear work that you can still genuinely`,
    `grade should be graded, with the problem noted in legibility_note.`,
    `Never pretend to have read handwriting you could not read.`,
    ``,
    `MISTAKE TAGS`,
    `Choose from this list only. Return every tag that genuinely applies, or an`,
    `empty list if the work is essentially correct:`,
    MISTAKE_TAGS.map((tag) => `  - ${tag}`).join("\n"),
    ``,
    `OUTPUT`,
    `Reply with a single JSON object and nothing else. No prose before or`,
    `after, no markdown fences. Use exactly this shape:`,
    ``,
    `{`,
    `  "outcome": "graded" | "unreadable",`,
    `  "unreadable_message": string | null,`,
    `  "unclear_pages": number[] | null,`,
    `  "part_scores": [`,
    `    { "label": string, "awarded_points": number, "comment": string }`,
    `  ],`,
    `  "overall": string,`,
    `  "strengths": string[],`,
    `  "improvements": string[],`,
    `  "next_step": string,`,
    `  "mistake_tags": string[],`,
    `  "confidence": "high" | "medium" | "low",`,
    `  "legibility_note": string | null`,
    `}`,
    ``,
    `Return one entry in part_scores for every part listed below, using the`,
    `exact labels given. Keep "overall" to two or three sentences and each`,
    `list item to one sentence.`,
  ].join("\n");
}

/// The per-submission content: the question, the marking scheme, and the
/// student's typed work.
export function buildUserPrompt(input: GradingInput): string {
  const sections: string[] = [];

  sections.push(
    [
      `QUESTION`,
      `${input.question.competition} ${input.question.year}, question ${input.question.questionNumber}`,
      `Worth ${input.question.totalPoints} points in total.`,
      ``,
      input.question.questionText,
    ].join("\n"),
  );

  if (input.parts.length > 0) {
    sections.push(
      [
        `PARTS`,
        ...input.parts.map((part) =>
          [
            `[${part.label}] (${part.maxPoints} points)`,
            part.prompt,
            part.officialSolution
              ? `OFFICIAL SOLUTION (do not reveal): ${part.officialSolution}`
              : `OFFICIAL SOLUTION: not available — grade on physics correctness.`,
            part.gradingRubric ? `MARKING SCHEME: ${part.gradingRubric}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
        ),
      ].join("\n\n"),
    );
  } else {
    sections.push(
      [
        `MARKING`,
        `This question has no lettered parts. Grade it as a single part with`,
        `label "Answer", worth ${input.question.totalPoints} points.`,
        input.question.officialSolution
          ? `OFFICIAL SOLUTION (do not reveal): ${input.question.officialSolution}`
          : `OFFICIAL SOLUTION: not available — grade on physics correctness.`,
        input.question.gradingRubric ? `MARKING SCHEME: ${input.question.gradingRubric}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }

  sections.push(
    `ATTEMPT\nThis is attempt ${input.attemptNumber} of ${input.maxAttempts}.`,
  );

  if (input.previousFeedback.length > 0) {
    sections.push(
      [
        `FEEDBACK ALREADY GIVEN`,
        `The student has seen the following. Build on it rather than repeating it,`,
        `and say whether they have acted on it.`,
        ...input.previousFeedback.map((note, index) => `Attempt ${index + 1}: ${note}`),
      ].join("\n"),
    );
  }

  sections.push(
    input.student.typedResponse?.trim()
      ? `STUDENT'S TYPED WORK\n${input.student.typedResponse.trim()}`
      : `STUDENT'S TYPED WORK\n(none — see the uploaded pages)`,
  );

  if (input.student.attachments.length > 0) {
    sections.push(
      `STUDENT'S UPLOADED WORK\n` +
        `${input.student.attachments.length} file(s) attached, in order. Read them as` +
        ` a continuation of the typed work above.`,
    );
  }

  return sections.join("\n\n---\n\n");
}
