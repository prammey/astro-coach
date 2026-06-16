"use client";

import { useState } from "react";
import { Question } from "@/types/question";

// Lets the user pick an MCQ answer, check it, and see the explanation.
// Needs to be a Client Component because selecting a choice and clicking
// "Check Answer" both update state live in the browser.
export default function McqPractice({ question }: { question: Question }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = selected === question.correctAnswer;

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

      <button
        type="button"
        disabled={selected === null}
        onClick={() => setChecked(true)}
        className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        Check Answer
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
