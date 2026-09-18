"use client";

import { useState } from "react";
import { PublicQuestion } from "@/data/mcq/types";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/auth";
import QuestionFigure from "./QuestionFigure";
import BrutalButton from "./ui/BrutalButton";
import Chip from "./ui/Chip";

// The graded result for one question, or one part of a multi-part item.
type GradedPart = {
  id: string;
  partLabel?: string;
  questionNumber: number;
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  solutionMediaMissing: boolean;
  solutionMediaAssets?: string[];
};

// What the server sends back after checking. The correct answers and
// explanations only ever arrive here, after submission — they are never
// part of the question prop passed into this component.
type CheckAnswerResult = GradedPart & {
  parts?: GradedPart[];
};

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
  const [result, setResult] = useState<CheckAnswerResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkError, setCheckError] = useState("");

  const parts = question.parts?.length ? question.parts : [question];
  const isMultiPart = Boolean(question.parts?.length);
  const allAnswered = parts.every((part) => selections[part.id]);

  // Per-part results, in the same order as the parts themselves.
  const resultsByPartId = new Map<string, GradedPart>();
  if (result) {
    for (const graded of result.parts ?? [result]) {
      resultsByPartId.set(graded.id, graded);
    }
  }

  function selectAnswer(partId: string, label: string) {
    setSelections((previous) => ({ ...previous, [partId]: label }));
    setResult(null);
    setCheckError("");
  }

  // Sends the selected choices to the server, which looks up the real
  // question and decides correctness — the browser never computes this.
  async function handleCheckAnswer() {
    if (!allAnswered) return;

    setChecking(true);
    setCheckError("");
    setResult(null);

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

      const response = await fetch("/api/attempts", {
        method: "POST",
        headers,
        body: JSON.stringify(
          isMultiPart
            ? { questionId: question.id, answers: selections }
            : { questionId: question.id, submittedAnswer: selections[question.id] }
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        setCheckError(data.error || "Failed to check answer");
        return;
      }

      setResult(data);
      onAnswerSubmitted?.();
    } catch (error) {
      setCheckError(error instanceof Error ? error.message : "Error checking answer");
    } finally {
      setChecking(false);
    }
  }

  const correctCount = result
    ? (result.parts ?? [result]).filter((part) => part.isCorrect).length
    : 0;

  return (
    <div className="mt-6">
      <div className="space-y-8">
        {parts.map((part) => {
          const graded = resultsByPartId.get(part.id);

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
                    {graded && (
                      <span
                        className={`animate-pop-in rounded-md px-2 py-1 text-xs font-bold ${
                          graded.isCorrect ? "bg-success text-white" : "bg-danger text-white"
                        }`}
                      >
                        {graded.isCorrect ? "✓ Correct" : "✗ Incorrect"}
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
                  const isCorrectAnswer = graded?.correctAnswer === choice.label;

                  // After checking, mark the right answer green and a wrong
                  // pick red, so each part reads on its own.
                  let tone = "bg-white text-navy hover:bg-cream hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brutal-sm";
                  if (graded && isCorrectAnswer) {
                    tone = "bg-success text-white";
                  } else if (graded && isSelected) {
                    tone = "bg-danger text-white";
                  } else if (!graded && isSelected) {
                    tone = "bg-navy text-yellow shadow-brutal-sm";
                  }

                  return (
                    <button
                      key={choice.label}
                      type="button"
                      onClick={() => selectAnswer(part.id, choice.label)}
                      className={`block w-full rounded-lg border-[3px] border-ink px-4 py-3 text-left font-medium transition-[translate,box-shadow,background-color,color] duration-200 ease-snappy ${tone}`}
                    >
                      <span className="font-bold">{choice.label}.</span> {choice.text}
                    </button>
                  );
                })}
              </div>

              {/* Each part gets its own explanation and solution figure. */}
              {graded && (
                <div className="mt-4 animate-rise-in rounded-lg border-[3px] border-ink bg-cream p-4">
                  <h3 className="font-bold text-purple">
                    {isMultiPart ? `Part ${part.partLabel} — Explanation` : "Explanation"}
                  </h3>
                  <p className="mt-1 text-navy">{graded.explanation}</p>
                  <QuestionFigure
                    assets={graded.solutionMediaAssets}
                    alt={`Solution figure for question ${part.questionNumber}`}
                  />
                  {graded.solutionMediaMissing && (
                    <p className="mt-2 text-sm font-bold text-purple">
                      Solution figure coming soon.
                    </p>
                  )}
                </div>
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

      <BrutalButton
        variant="accent"
        className="mt-4"
        disabled={!allAnswered || checking}
        onClick={handleCheckAnswer}
      >
        {checking ? "Checking..." : isMultiPart ? "Check both parts" : "Check answer"}
      </BrutalButton>

      {isMultiPart && !allAnswered && !result && (
        <p className="mt-2 text-sm font-bold text-navy/60">
          Answer both parts to check. Both must be correct to count as correct.
        </p>
      )}

      {result && (
        <div
          role="status"
          className={`mt-4 animate-pop-in rounded-lg border-[3px] border-ink p-4 font-bold shadow-brutal-sm ${
            result.isCorrect ? "bg-success text-white" : "bg-danger text-white"
          }`}
        >
          {!isMultiPart &&
            (result.isCorrect
              ? "Correct!"
              : `Incorrect. The correct answer is ${result.correctAnswer}.`)}
          {isMultiPart &&
            (result.isCorrect
              ? `Correct! Both parts right (${correctCount} of ${parts.length}).`
              : `Incorrect — ${correctCount} of ${parts.length} parts right. Every part must be correct.`)}
        </div>
      )}
    </div>
  );
}
