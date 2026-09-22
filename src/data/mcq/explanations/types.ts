// The full teaching explanation for one multiple-choice question.
//
// Every string here may contain maths written in LaTeX between dollar
// signs ($v = \sqrt{2GM/r}$ inline, $$...$$ on its own line) and **bold**
// phrases. The MathText component renders them.
//
// These live in their own files, keyed by question ID, rather than inside
// the big question-bank files. That keeps each exam's explanations easy to
// review on their own, and it is the same shape a database table will
// have when the bank moves to Supabase.
export type McqExplanation = {
  // Why the correct answer is correct, as a short worked solution. Each
  // entry is one step or one short paragraph, shown in order.
  solution: string[];

  // Why each WRONG choice is wrong, keyed by its letter ("A", "B", ...).
  // The correct letter is never a key here. A student who picks a wrong
  // answer is shown only that letter's entry, so an entry must never name
  // or hint at the correct choice.
  wrongChoices: Record<string, string>;

  // The one-sentence lesson shown at the bottom of a correct solution.
  takeaway: string;
};

// A map from question ID (e.g. "usaaao-2015-first-round-q12") to its
// explanation. Each exam's file exports one of these.
export type McqExplanationMap = Record<string, McqExplanation>;
