"use client";

// The student's workspace for one free-response question.
//
// The page renders whatever the server chose to send. When `content` is
// null the question really is not here — there is no hidden text behind a
// blur — and when `solution` is null the official solution has not been
// released to this account.

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ApiError, apiGet, apiPost, uploadSolutionFiles } from "@/lib/pro/client";
import type { FrqDetail } from "@/lib/pro/frq-service";
import ConfirmDialog from "./ConfirmDialog";
import GradeResult, { type Feedback, type PartScore } from "./GradeResult";
import SolutionUploader, { type PendingFile } from "./SolutionUploader";

type Dialog = "none" | "submit" | "giveUp";

export default function FrqDetailView({ questionId }: { questionId: string }) {
  const [detail, setDetail] = useState<FrqDetail | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [typedResponse, setTypedResponse] = useState("");
  const [files, setFiles] = useState<PendingFile[]>([]);
  const [dialog, setDialog] = useState<Dialog>("none");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Re-reads the question from the server. Called after every action, so
  // attempt counts, credit balances and unlock state always come from the
  // server rather than being guessed at in the browser.
  const load = useCallback(
    () =>
      apiGet<FrqDetail>(`/api/frq/${questionId}`)
        .then(setDetail)
        .catch((error: unknown) =>
          setLoadError(
            error instanceof ApiError ? error.message : "Could not load this question.",
          ),
        ),
    [questionId],
  );

  useEffect(() => {
    let active = true;

    apiGet<FrqDetail>(`/api/frq/${questionId}`)
      .then((response) => active && setDetail(response))
      .catch((error: unknown) => {
        if (!active) return;
        setLoadError(
          error instanceof ApiError ? error.message : "Could not load this question.",
        );
      });

    return () => {
      active = false;
    };
  }, [questionId]);

  async function submitForGrading() {
    setBusy(true);
    setSubmitError(null);

    try {
      // Files go straight to private storage first; the submission then
      // references them. An upload that fails here costs nothing.
      setStatus("Uploading your work…");
      const uploadPaths =
        files.length > 0
          ? await uploadSolutionFiles(questionId, files.map((entry) => entry.file))
          : [];

      setStatus("Grading — this usually takes a few seconds…");
      await apiPost(`/api/frq/${questionId}/submit`, {
        typedResponse: typedResponse.trim() || null,
        uploadPaths,
        confirmed: true,
      });

      // The typed response and files stay on screen until the reload
      // succeeds, so nothing is lost if the refresh fails.
      setDialog("none");
      await load();
      setFiles([]);
      setStatus(null);
    } catch (error) {
      const message =
        error instanceof ApiError ? error.message : "Grading failed. Please try again.";
      const unclear =
        error instanceof ApiError && Array.isArray(error.body?.unclearPages)
          ? (error.body.unclearPages as number[])
          : [];

      setSubmitError(
        unclear.length > 0
          ? `${message} (Unclear: page ${unclear.join(", ")}.) You have not been charged a credit.`
          : `${message} You have not been charged a credit.`,
      );
      setDialog("none");
      setStatus(null);
      await load();
    } finally {
      setBusy(false);
    }
  }

  async function giveUp() {
    setBusy(true);
    try {
      await apiPost(`/api/frq/${questionId}/give-up`, { confirmed: true });
      setDialog("none");
      await load();
    } catch (error) {
      setSubmitError(error instanceof ApiError ? error.message : "Could not unlock the solution.");
      setDialog("none");
    } finally {
      setBusy(false);
    }
  }

  if (loadError) {
    return <p className="rounded-lg border-4 border-black bg-red-100 p-4">{loadError}</p>;
  }
  if (!detail) {
    return <p className="text-[var(--color-navy)]">Loading question…</p>;
  }

  const { meta, content, solution, attempts, state } = detail;
  const hasWork = typedResponse.trim().length > 0 || files.length > 0;

  return (
    <div className="space-y-8">
      {/* 1. Metadata — always visible, even when the question is locked. */}
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border-2 border-black bg-[var(--color-purple)] px-2 py-0.5 text-xs font-extrabold uppercase text-white">
            FRQ
          </span>
          <span className="rounded border-2 border-black bg-[var(--color-yellow)] px-2 py-0.5 text-xs font-extrabold text-[var(--color-navy)]">
            {meta.totalPoints} points
          </span>
          <span className="rounded border-2 border-black bg-white px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]">
            {meta.primaryCurriculumTopic}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold text-[var(--color-navy)]">
          {meta.competition} {meta.year} — Question {meta.questionNumber}
        </h1>
        <p className="text-[var(--color-navy)]/70">{meta.examName}</p>
      </header>

      {/* 2 & 3. The question itself, or the Pro wall in its place. */}
      {content ? (
        <section className="rounded-xl border-4 border-black bg-white p-6 shadow-[6px_6px_0_0_#000]">
          <p className="whitespace-pre-wrap text-[var(--color-navy)]">{content.questionText}</p>

          {content.figures.length > 0 && (
            <div className="mt-4 space-y-4">
              {content.figures.map((figure) => (
                <figure key={figure.id}>
                  {/* Signed, short-lived URLs from a private bucket. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={figure.url}
                    alt={figure.caption ?? "Question figure"}
                    className="w-full rounded-lg border-4 border-black"
                  />
                  {figure.caption && (
                    <figcaption className="mt-1 text-xs text-[var(--color-navy)]/70">
                      {figure.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {content.parts.length > 0 && (
            <ol className="mt-6 space-y-4">
              {content.parts.map((part) => (
                <li key={part.id} className="rounded-lg border-2 border-black bg-[var(--color-cream)] p-4">
                  <p className="font-extrabold text-[var(--color-navy)]">
                    {part.label} <span className="font-normal">({part.maxPoints} points)</span>
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-[var(--color-navy)]">{part.prompt}</p>
                </li>
              ))}
            </ol>
          )}
        </section>
      ) : (
        <LockedQuestionNotice />
      )}

      {/* 4–9. The workspace, only when the student can read the question. */}
      {content && (
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--color-navy)]">Your solution</h2>

          <label className="block font-bold text-[var(--color-navy)]">
            Typed working
            <textarea
              value={typedResponse}
              onChange={(event) => setTypedResponse(event.target.value)}
              rows={10}
              disabled={!state.canSubmit || busy}
              placeholder="Set out your reasoning here. You can also, or instead, upload photos of handwritten work."
              className="mt-2 w-full rounded-lg border-4 border-black bg-white p-3 font-normal text-[var(--color-navy)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:bg-gray-100"
            />
          </label>

          <SolutionUploader
            files={files}
            onChange={setFiles}
            disabled={!state.canSubmit || busy}
          />

          <AttemptState state={state} />

          {submitError && (
            <p
              role="alert"
              className="rounded-lg border-4 border-black bg-red-100 p-4 text-sm font-semibold text-[var(--color-navy)]"
            >
              {submitError}
            </p>
          )}

          {status && (
            <p
              role="status"
              className="rounded-lg border-4 border-black bg-[var(--color-yellow)]/40 p-4 text-sm font-bold text-[var(--color-navy)]"
            >
              {status}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setDialog("submit")}
              disabled={!state.canSubmit || !hasWork || busy}
              className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              Submit for grading
            </button>

            {state.canGiveUp && (
              <button
                type="button"
                onClick={() => setDialog("giveUp")}
                disabled={busy}
                className="rounded-lg border-4 border-black bg-white px-6 py-3 font-bold text-[var(--color-navy)] transition hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:opacity-50"
              >
                Give up &amp; view solution
              </button>
            )}
          </div>

          {/* A disabled button always says why it is disabled. */}
          {!state.canSubmit && (
            <p className="text-sm font-semibold text-[var(--color-navy)]/80">
              {disabledExplanation(state.blockedReason)}
            </p>
          )}
          {state.canSubmit && !hasWork && (
            <p className="text-sm text-[var(--color-navy)]/70">
              Type your working or upload a page to enable grading.
            </p>
          )}
        </section>
      )}

      {/* 11 & 12. Every attempt, newest last, loaded from the database. */}
      {attempts.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[var(--color-navy)]">Your attempts</h2>
          {attempts.map((attempt) => (
            <GradeResult
              key={attempt.id}
              attemptNumber={attempt.attemptNumber}
              maxAttempts={state.maxAttempts}
              awardedPoints={attempt.awardedPoints ?? 0}
              maximumPoints={attempt.maximumPoints}
              partScores={(attempt.partScores as PartScore[] | null) ?? []}
              feedback={attempt.feedback as Feedback | null}
              mistakeTags={attempt.mistakeTags}
              gradedAt={attempt.createdAt}
            />
          ))}
        </section>
      )}

      {/* 13. The official solution, only once it has genuinely been unlocked. */}
      {solution && (
        <section className="rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
          <h2 className="text-2xl font-extrabold text-[var(--color-navy)]">Official solution</h2>
          <p className="mt-1 text-sm text-[var(--color-navy)]/70">{unlockExplanation(solution.reason)}</p>

          {solution.questionSolution && (
            <p className="mt-4 whitespace-pre-wrap text-[var(--color-navy)]">
              {solution.questionSolution}
            </p>
          )}

          {solution.parts.filter((part) => part.officialSolution).length > 0 && (
            <ol className="mt-4 space-y-3">
              {solution.parts
                .filter((part) => part.officialSolution)
                .map((part) => (
                  <li key={part.label} className="rounded-lg border-2 border-black bg-white p-4">
                    <p className="font-extrabold text-[var(--color-navy)]">{part.label}</p>
                    <p className="mt-1 whitespace-pre-wrap text-[var(--color-navy)]">
                      {part.officialSolution}
                    </p>
                  </li>
                ))}
            </ol>
          )}

          {solution.figures.map((figure) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={figure.id}
              src={figure.url}
              alt={figure.caption ?? "Solution figure"}
              className="mt-4 w-full rounded-lg border-4 border-black"
            />
          ))}
        </section>
      )}

      {/* 10. Confirmation — nothing is charged until this is accepted. */}
      <ConfirmDialog
        open={dialog === "submit"}
        title={`Submit attempt ${state.nextAttemptNumber} of ${state.maxAttempts}?`}
        confirmLabel="Submit & grade"
        busy={busy}
        onConfirm={submitForGrading}
        onCancel={() => setDialog("none")}
      >
        <p>This will use 1 AI grading credit.</p>
        <p>
          You have <strong>{state.creditsRemaining}</strong> grading credit
          {state.creditsRemaining === 1 ? "" : "s"} remaining.
        </p>
        {state.nextAttemptNumber === state.maxAttempts && (
          <p className="font-semibold">
            This is your last graded attempt. The official solution unlocks afterwards.
          </p>
        )}
      </ConfirmDialog>

      <ConfirmDialog
        open={dialog === "giveUp"}
        title="Reveal the official solution?"
        confirmLabel="Reveal solution"
        confirmTone="danger"
        busy={busy}
        onConfirm={giveUp}
        onCancel={() => setDialog("none")}
      >
        <p>
          Revealing the official solution will end your remaining graded
          attempts for this problem. This cannot be undone.
        </p>
        <p>It uses no grading credits, and everything you have already done is kept.</p>
      </ConfirmDialog>
    </div>
  );
}

function AttemptState({ state }: { state: FrqDetail["state"] }) {
  return (
    <div className="flex flex-wrap gap-4 rounded-lg border-4 border-black bg-[var(--color-cream)] p-4 text-sm font-bold text-[var(--color-navy)]">
      <span>
        Graded attempts used: {state.attemptsUsed} of {state.maxAttempts}
      </span>
      <span>
        AI grading credits left: {state.creditsRemaining}
      </span>
    </div>
  );
}

function LockedQuestionNotice() {
  return (
    <section className="rounded-xl border-4 border-black bg-[var(--color-purple)] p-6 text-white shadow-[6px_6px_0_0_#000]">
      <h2 className="text-2xl font-extrabold">This question is part of Astro Coach Pro</h2>
      <p className="mt-2 text-white/90">
        You have used your 3 free AI grades. Everything you have already
        worked on stays yours — Pro opens the rest of the free-response bank.
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/90">
        <li>50 AI grades every month</li>
        <li>Rubric-based, part-by-part feedback on real olympiad problems</li>
        <li>Handwritten and PDF submissions</li>
        <li>Detailed topic analytics and progress trends</li>
      </ul>
      <Link
        href="/pricing"
        className="mt-5 inline-block rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
      >
        Unlock Astro Coach Pro
      </Link>
    </section>
  );
}

function disabledExplanation(reason: string | null): string {
  switch (reason) {
    case "ATTEMPTS_EXHAUSTED":
      return "You have used all 3 graded attempts at this question. The official solution is below.";
    case "SOLUTION_ALREADY_UNLOCKED":
      return "The official solution is unlocked, so there is nothing left to grade here.";
    case "NO_CREDITS":
      return "You have no AI grading credits left.";
    case "QUESTION_LOCKED":
      return "This question is part of Astro Coach Pro.";
    default:
      return "Grading is not available for this question right now.";
  }
}

function unlockExplanation(reason: "FULL_CREDIT" | "ATTEMPTS_EXHAUSTED" | "GIVE_UP"): string {
  switch (reason) {
    case "FULL_CREDIT":
      return "Unlocked because you earned full marks.";
    case "ATTEMPTS_EXHAUSTED":
      return "Unlocked after your third graded attempt.";
    case "GIVE_UP":
      return "Unlocked because you chose to reveal it.";
  }
}
