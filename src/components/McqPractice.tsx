"use client";

import { useState } from "react";
import { PublicQuestion } from "@/data/mcq/types";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/auth";

// What the server sends back after checking an answer. The correct
// answer and explanation only ever arrive here, after submission —
// they are never part of the question prop passed into this component.
type CheckAnswerResult = {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  solutionMediaMissing: boolean;
};

export default function McqPractice({
  question,
  onAnswerSubmitted,
}: {
  question: PublicQuestion;
  onAnswerSubmitted?: () => void;
}) {
  const { user } = useAuth();
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<CheckAnswerResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkError, setCheckError] = useState("");

  // Sends the selected choice to the server, which looks up the real
  // question and decides correctness — the browser never computes this.
  async function handleCheckAnswer() {
    if (selected === null) return;

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
        body: JSON.stringify({
          questionId: question.id,
          submittedAnswer: selected,
        }),
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

  return (
    <div className="mt-6">
      <div className="space-y-3">
        {question.choices?.map((choice) => {
          const isSelected = selected === choice.label;
          return (
            <button
              key={choice.label}
              type="button"
              onClick={() => {
                setSelected(choice.label);
                setResult(null);
                setCheckError("");
              }}
              className={`block w-full rounded-lg border-4 border-black px-4 py-3 text-left font-medium transition ${
                isSelected
                  ? "bg-[var(--color-electric-blue)] text-white"
                  : "bg-white text-[var(--color-navy)] hover:bg-[var(--color-cream)]"
              }`}
            >
              <span className="font-bold">{choice.label}.</span> {choice.text}
            </button>
          );
        })}
      </div>

      {!user && (
        <p className="mt-3 text-sm font-bold text-[var(--color-purple)]">
          Sign in to save your progress.
        </p>
      )}

      {checkError && <p className="mt-3 text-sm font-bold text-red-700">{checkError}</p>}

      <button
        type="button"
        disabled={selected === null || checking}
        onClick={handleCheckAnswer}
        className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {checking ? "Checking..." : "Check Answer"}
      </button>

      {result && (
        <div
          className={`mt-4 rounded-lg border-4 border-black p-4 font-bold ${
            result.isCorrect ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
          }`}
        >
          {result.isCorrect
            ? "Correct!"
            : `Incorrect. The correct answer is ${result.correctAnswer}.`}
        </div>
      )}

      {result && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
          <h3 className="font-bold text-[var(--color-purple)]">Explanation</h3>
          <p className="mt-1 text-[var(--color-navy)]">{result.explanation}</p>
          {result.solutionMediaMissing && (
            <p className="mt-2 text-sm font-bold text-[var(--color-purple)]">
              Solution figure coming soon.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
