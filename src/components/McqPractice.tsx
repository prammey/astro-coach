"use client";

import { useState } from "react";
import { PublicQuestion } from "@/data/mcq/types";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/auth";
import MathText from "./MathText";
import QuestionFigure from "./QuestionFigure";
import BrutalButton from "./ui/BrutalButton";
import Chip from "./ui/Chip";

// Everything the server reveals once a part has been answered correctly.
type RevealedSolution = {
  correctAnswer: string;
  steps: string[];
  wrongChoices: Array<{ label: string; text: string; reason: string }>;
  takeaway: string;
  solutionMediaMissing: boolean;
  solutionMediaAssets: string[];
};

// The graded result for one question, or one part of a multi-part item.
// A wrong answer carries only the reason that one choice is wrong; a
// right answer carries the full solution. The correct letter is never in
// a wrong result, so nothing here can give the answer away.
type GradedPart = {
  id: string;
  partLabel?: string;
  questionNumber: number;
  submittedAnswer: string;
  isCorrect: boolean;
  wrongChoiceReason?: string;
  solution?: RevealedSolution;
};

// What the server sends back after checking.
type CheckAnswerResult = GradedPart & {
  parts?: GradedPart[];
  isCorrect: boolean;
};

// What this component remembers about one part across several tries:
// every wrong choice already tried (with its reason), and the solution
// once the part is solved.
type PartProgress = {
  wrongTries: Record<string, string>;
  solution?: RevealedSolution;
};

const EMPTY_PROGRESS: PartProgress = { wrongTries: {} };

export default function McqPractice({
  question,
  onAnswerSubmitted,
}: {
  question: PublicQuestion;
  onAnswerSubmitted?: () => void;
}) {
  const { user } = useAuth();
  // One selected label per part, keyed by part ID. A standalone question
  // is treated as a single part so both paths share the same state.
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [progress, setProgress] = useState<Record<string, PartProgress>>({});
  const [lastResult, setLastResult] = useState<CheckAnswerResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkError, setCheckError] = useState("");

  const parts = question.parts?.length ? question.parts : [question];
  const isMultiPart = Boolean(question.parts?.length);

  function progressFor(partId: string): PartProgress {
    return progress[partId] ?? EMPTY_PROGRESS;
  }

  const unsolvedParts = parts.filter((part) => !progressFor(part.id).solution);
  const allSolved = unsolvedParts.length === 0;
  const allAnswered = unsolvedParts.every((part) => selections[part.id]);
  const hasTriedBefore = parts.some(
    (part) => Object.keys(progressFor(part.id).wrongTries).length > 0
  );

  function selectAnswer(partId: string, label: string) {
    setSelections((previous) => ({ ...previous, [partId]: label }));
    setLastResult(null);
    setCheckError("");
  }

  // Folds one round of grading into what we remember: a wrong pick joins
  // that part's tried list and is un-selected so the student picks again;
  // a right pick stores the solution and locks the part.
  function rememberResult(result: CheckAnswerResult) {
    const gradedParts = result.parts ?? [result];

    setProgress((previous) => {
      const next = { ...previous };
      for (const graded of gradedParts) {
        const current = next[graded.id] ?? EMPTY_PROGRESS;
        if (graded.isCorrect && graded.solution) {
          next[graded.id] = { ...current, solution: graded.solution };
        } else if (!graded.isCorrect && graded.wrongChoiceReason) {
          next[graded.id] = {
            ...current,
            wrongTries: { ...current.wrongTries, [graded.submittedAnswer]: graded.wrongChoiceReason },
          };
        }
      }
      return next;
    });

    setSelections((previous) => {
      const next = { ...previous };
      for (const graded of gradedParts) {
        if (!graded.isCorrect) delete next[graded.id];
      }
      return next;
    });
  }

  // Sends the selected choices to the server, which looks up the real
  // question and decides correctness — the browser never computes this.
  // Parts already solved are re-sent with their known correct answer so
  // the server still sees a complete multi-part submission.
  async function handleCheckAnswer() {
    if (!allAnswered) return;

    setChecking(true);
    setCheckError("");
    setLastResult(null);

    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };

      // Only attach a token if the user is logged in, so the server
      // knows to save the attempt. Logged-out users still get feedback.
      if (user) {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          headers.Authorization = `Bearer ${session.access_token}`;
        }
      }

      const answers: Record<string, string> = {};
      for (const part of parts) {
        answers[part.id] = progressFor(part.id).solution?.correctAnswer ?? selections[part.id];
      }

      const response = await fetch("/api/attempts", {
        method: "POST",
        headers,
        body: JSON.stringify(
          isMultiPart
            ? { questionId: question.id, answers }
            : { questionId: question.id, submittedAnswer: answers[question.id] }
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        setCheckError(data.error || "Failed to check answer");
        return;
      }

      setLastResult(data);
      rememberResult(data);
      onAnswerSubmitted?.();
    } catch (error) {
      setCheckError(error instanceof Error ? error.message : "Error checking answer");
    } finally {
      setChecking(false);
    }
  }

  // The status line under the button, for the most recent check only.
  function statusMessage(result: CheckAnswerResult): string {
    if (!isMultiPart) {
      return result.isCorrect
        ? "Correct! Read the solution below."
        : "Not quite. Read the note under your answer, then try again.";
    }
    const solvedCount = parts.filter((part) => progressFor(part.id).solution).length;
    return result.isCorrect
      ? `Correct! Both parts right (${solvedCount} of ${parts.length}).`
      : `${solvedCount} of ${parts.length} parts right so far. Fix the part marked in red and try again.`;
  }

  return (
    <div className="mt-6">
      <div className="space-y-8">
        {parts.map((part) => {
          const { wrongTries, solution } = progressFor(part.id);

          return (
            <div key={part.id}>
              {/* A multi-part item shows each part's own prompt and figure;
                  a standalone question has already shown its prompt above. */}
              {isMultiPart && (
                <div className="mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip tone="parts">Part {part.partLabel}</Chip>
                    <span className="text-xs font-bold text-navy/60">
                      Question {part.questionNumber}
                    </span>
                    {solution && (
                      <span className="animate-pop-in rounded-md bg-success px-2 py-1 text-xs font-bold text-white">
                        ✓ Solved
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-lg text-navy">{part.questionText}</p>
                  <QuestionFigure
                    assets={part.questionMedia?.assets as readonly string[] | undefined}
                    alt={`Figure for question ${part.questionNumber}`}
                  />
                </div>
              )}

              <div className="space-y-3">
                {part.choices?.map((choice) => {
                  const isSelected = selections[part.id] === choice.label;
                  const isCorrectAnswer = solution?.correctAnswer === choice.label;
                  const triedReason = wrongTries[choice.label];
                  // Once solved, every wrong choice gets its note; before
                  // that, only the ones the student has actually tried.
                  const revealedReason =
                    triedReason ??
                    solution?.wrongChoices.find((wrong) => wrong.label === choice.label)?.reason;
                  const isLocked = Boolean(solution) || Boolean(triedReason);

                  // Green once it is known to be right, red once it is known
                  // to be wrong, navy while merely selected, white otherwise.
                  let tone =
                    "bg-white text-navy hover:bg-cream hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brutal-sm";
                  if (isCorrectAnswer) {
                    tone = "bg-success text-white";
                  } else if (triedReason) {
                    tone = "bg-danger text-white";
                  } else if (solution) {
                    tone = "bg-white text-navy/50";
                  } else if (isSelected) {
                    tone = "bg-navy text-yellow shadow-brutal-sm";
                  }

                  return (
                    <div key={choice.label}>
                      <button
                        type="button"
                        disabled={isLocked}
                        onClick={() => selectAnswer(part.id, choice.label)}
                        className={`block w-full rounded-lg border-[3px] border-ink px-4 py-3 text-left font-medium transition-[translate,box-shadow,background-color,color] duration-200 ease-snappy disabled:cursor-default ${tone}`}
                      >
                        <span className="font-bold">{choice.label}.</span> {choice.text}
                      </button>

                      {/* The reason this choice is wrong, shown directly
                          under it so the lesson sits next to the mistake. */}
                      {revealedReason && !isCorrectAnswer && (
                        <div className="ml-4 animate-rise-in rounded-b-lg border-x-[3px] border-b-[3px] border-ink bg-white px-4 py-3 text-sm text-navy">
                          <span className="font-bold text-danger">Why not {choice.label}? </span>
                          <MathText text={revealedReason} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {solution && (
                <SolutionCard
                  solution={solution}
                  questionNumber={part.questionNumber}
                  heading={isMultiPart ? `Part ${part.partLabel} — Solution` : "Solution"}
                />
              )}
            </div>
          );
        })}
      </div>

      {!user && (
        <p className="mt-4 text-sm font-bold text-purple">
          Sign in to save your progress.
        </p>
      )}

      {checkError && <p className="mt-3 text-sm font-bold text-danger">{checkError}</p>}

      {!allSolved && (
        <BrutalButton
          variant="accent"
          className="mt-4"
          disabled={!allAnswered || checking}
          onClick={handleCheckAnswer}
        >
          {checking
            ? "Checking..."
            : hasTriedBefore
              ? "Try again"
              : isMultiPart
                ? "Check both parts"
                : "Check answer"}
        </BrutalButton>
      )}

      {isMultiPart && !allAnswered && !lastResult && (
        <p className="mt-2 text-sm font-bold text-navy/60">
          Answer both parts to check. Both must be correct to count as correct.
        </p>
      )}

      {lastResult && (
        <div
          role="status"
          className={`mt-4 animate-pop-in rounded-lg border-[3px] border-ink p-4 font-bold shadow-brutal-sm ${
            lastResult.isCorrect ? "bg-success text-white" : "bg-danger text-white"
          }`}
        >
          {statusMessage(lastResult)}
        </div>
      )}
    </div>
  );
}

// The worked solution for one solved part: the steps, any solution
// figure, and the one-line key takeaway.
function SolutionCard({
  solution,
  questionNumber,
  heading,
}: {
  solution: RevealedSolution;
  questionNumber: number;
  heading: string;
}) {
  return (
    <div className="mt-4 animate-rise-in rounded-lg border-[3px] border-ink bg-cream p-5 shadow-brutal-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-bold text-purple">{heading}</h3>
        <span className="rounded-md bg-success px-2 py-1 text-xs font-bold text-white">
          {solution.correctAnswer} is right
        </span>
      </div>

      <div className="mt-3 space-y-3 text-navy leading-relaxed">
        {solution.steps.map((step, index) => (
          <p key={index}>
            <MathText text={step} />
          </p>
        ))}
      </div>

      <QuestionFigure
        assets={solution.solutionMediaAssets}
        alt={`Solution figure for question ${questionNumber}`}
      />
      {solution.solutionMediaMissing && (
        <p className="mt-2 text-sm font-bold text-purple">Solution figure coming soon.</p>
      )}

      {solution.takeaway && (
        <div className="mt-4 rounded-lg border-[3px] border-ink bg-yellow px-4 py-3 text-navy">
          <span className="font-bold">Key takeaway: </span>
          <MathText text={solution.takeaway} />
        </div>
      )}
    </div>
  );
}
