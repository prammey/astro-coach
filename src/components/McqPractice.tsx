"use client";

import { useState } from "react";
import { Question } from "@/types/question";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/auth";

export default function McqPractice({
  question,
  isLoggedIn,
}: {
  question: Question;
  isLoggedIn: boolean;
}) {
  const { user } = useAuth();
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const isCorrect = selected === question.correctAnswer;

  async function handleCheckAnswer() {
    setChecked(true);
    setSaveError("");

    if (!user || selected === null) return;

    setSaving(true);
    try {
      // Get auth token
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setSaveError("Session expired. Please log in again.");
        setSaving(false);
        return;
      }

      // Call API to save attempt
      const response = await fetch("/api/attempts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          questionId: question.id,
          submittedAnswer: selected,
          isCorrect,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setSaveError(error.error || "Failed to save attempt");
      }
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : "Error saving attempt");
    } finally {
      setSaving(false);
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
                setChecked(false);
                setSaveError("");
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

      {saveError && (
        <p className="mt-3 text-sm text-red-700 font-bold">{saveError}</p>
      )}

      <button
        type="button"
        disabled={selected === null}
        onClick={handleCheckAnswer}
        className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {saving ? "Saving..." : "Check Answer"}
      </button>

      {checked && (
        <div
          className={`mt-4 rounded-lg border-4 border-black p-4 font-bold ${
            isCorrect ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
          }`}
        >
          {isCorrect ? "Correct!" : `Incorrect. The correct answer is ${question.correctAnswer}.`}
        </div>
      )}

      {checked && (
        <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
          <h3 className="font-bold text-[var(--color-purple)]">Explanation</h3>
          <p className="mt-1 text-[var(--color-navy)]">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
