"use client";

import { useState } from "react";
import { Question } from "@/types/question";

// Lets the user type a free-response answer and then reveal the sample
// answer/rubric. Needs to be a Client Component because typing and
// revealing both update state live in the browser.
export default function FrqPractice({ question }: { question: Question }) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="mt-6">
      <label className="block font-bold text-[var(--color-navy)]">
        Your Answer
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          rows={6}
          placeholder="Type your answer here..."
          className="mt-2 w-full rounded-lg border-4 border-black bg-white p-3 font-normal text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
        />
      </label>

      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-2 font-bold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Reveal Solution/Rubric
      </button>

      {revealed && (
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
            <h3 className="font-bold text-[var(--color-purple)]">Sample Answer</h3>
            <p className="mt-1 text-[var(--color-navy)]">{question.sampleAnswer}</p>
          </div>

          {question.rubric && (
            <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
              <h3 className="font-bold text-[var(--color-purple)]">Rubric</h3>
              <p className="mt-1 text-[var(--color-navy)]">{question.rubric}</p>
            </div>
          )}

          <div className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
            <h3 className="font-bold text-[var(--color-purple)]">Explanation</h3>
            <p className="mt-1 text-[var(--color-navy)]">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
