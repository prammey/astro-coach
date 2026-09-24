"use client";

// The answer form for short-answer FRQs: fill-in blanks, matching, naming.
//
// Checking is instant, free and unlimited — no AI is involved, so no credit
// is spent. Like the MCQ trainer, each blank turns green or red but the
// right answer is never shown until every blank is right; then the full
// solution unlocks below.

import { useState } from "react";
import { ApiError, apiPost } from "@/lib/pro/client";
import type { FrqDetail } from "@/lib/pro/frq-service";

type Part = NonNullable<FrqDetail["content"]>["parts"][number];
type Answers = Record<string, Record<string, string>>;
type Results = Record<string, Record<string, boolean>>;

type CheckResponse = {
  results: Results;
  awardedPoints: number;
  maximumPoints: number;
  solutionUnlocked: boolean;
};

export default function QuickCheckForm({
  questionId,
  parts,
  lastCheck,
  solutionUnlocked,
  onChecked,
}: {
  questionId: string;
  parts: Part[];
  lastCheck: FrqDetail["lastCheck"];
  solutionUnlocked: boolean;
  onChecked: () => Promise<unknown> | void;
}) {
  const [answers, setAnswers] = useState<Answers>(lastCheck?.answers ?? {});
  const [results, setResults] = useState<Results>(lastCheck?.results ?? {});
  const [score, setScore] = useState<{ awarded: number; max: number } | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setAnswer(partId: string, label: string, value: string) {
    setAnswers((current) => ({ ...current, [partId]: { ...current[partId], [label]: value } }));
    // Editing a blank clears its old tick, so a stale green never lingers.
    setResults((current) => {
      if (current[partId]?.[label] === undefined) return current;
      const partResults = { ...current[partId] };
      delete partResults[label];
      return { ...current, [partId]: partResults };
    });
  }

  async function check() {
    setBusy(true);
    setError(null);
    try {
      const response = await apiPost<CheckResponse>(`/api/frq/${questionId}/check`, { answers });
      setResults(response.results);
      setScore({ awarded: response.awardedPoints, max: response.maximumPoints });
      if (response.solutionUnlocked) await onChecked();
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "Could not check your answers.");
    } finally {
      setBusy(false);
    }
  }

  const blankCount = parts.reduce((sum, part) => sum + part.blanks.length, 0);
  const filled = parts.reduce(
    (sum, part) => sum + part.blanks.filter((b) => answers[part.id]?.[b.label]?.trim()).length,
    0,
  );

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-extrabold text-navy">Your answers</h2>
        <p className="mt-1 text-sm text-navy/70">
          Short answers are checked instantly and free — no grading credit is used.
          Wrong blanks turn red; fix them and check again as often as you like.
        </p>
      </div>

      {parts.map((part) => (
        <div key={part.id} className="rounded-lg border-[3px] border-ink bg-white p-4 shadow-brutal-sm">
          {parts.length > 1 && <p className="mb-3 font-extrabold text-navy">{part.label}</p>}
          <div className="grid gap-3 sm:grid-cols-2">
            {part.blanks.map((blank) => {
              const result = results[part.id]?.[blank.label];
              const tone =
                result === true
                  ? "border-success bg-success/10"
                  : result === false
                    ? "border-danger bg-danger/10"
                    : "border-ink bg-white";
              const inputId = `blank-${part.id}-${blank.label}`;
              return (
                <label key={blank.label} htmlFor={inputId} className="block text-sm font-bold text-navy">
                  <span className="flex items-center gap-2">
                    {blank.label}
                    {result === true && <span aria-label="correct" className="text-success">✓</span>}
                    {result === false && <span aria-label="incorrect" className="text-danger">✗</span>}
                  </span>
                  <input
                    id={inputId}
                    type="text"
                    value={answers[part.id]?.[blank.label] ?? ""}
                    onChange={(event) => setAnswer(part.id, blank.label, event.target.value)}
                    placeholder={blank.prompt ?? "Your answer"}
                    disabled={busy || solutionUnlocked}
                    autoComplete="off"
                    className={`mt-1 w-full rounded-lg border-[3px] p-2 font-normal text-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-70 ${tone}`}
                  />
                </label>
              );
            })}
          </div>
        </div>
      ))}

      {error && (
        <p role="alert" className="rounded-lg border-[3px] border-danger bg-white p-3 text-sm font-semibold text-navy">
          {error}
        </p>
      )}

      {score && !solutionUnlocked && (
        <p role="status" className="rounded-lg border-[3px] border-ink bg-cream p-3 text-sm font-bold text-navy">
          {score.awarded} / {score.max} points so far. Keep going — the solution unlocks when every blank is right.
        </p>
      )}

      {!solutionUnlocked && (
        <button
          type="button"
          onClick={check}
          disabled={busy || filled === 0}
          className="rounded-lg border-[3px] border-ink bg-yellow px-6 py-3 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Checking…" : `Check answers (${filled}/${blankCount} filled)`}
        </button>
      )}
    </section>
  );
}
