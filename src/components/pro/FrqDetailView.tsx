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
import type { FrqDetail, SignedFigure } from "@/lib/pro/frq-service";
import ConfirmDialog from "./ConfirmDialog";
import GradeResult, { type Feedback, type PartScore } from "./GradeResult";
import SolutionUploader, { type PendingFile } from "./SolutionUploader";
import FrqText, { figuresPlacedIn } from "./FrqText";
import QuickCheckForm from "./QuickCheckForm";
import LoadingStar from "../ui/LoadingStar";

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
    return <p className="rounded-lg border-[3px] border-danger bg-white p-4">{loadError}</p>;
  }
  if (!detail) {
    return <LoadingStar label="Loading question…" />;
  }

  const { meta, content, solution, attempts, state } = detail;
  const hasWork = typedResponse.trim().length > 0 || files.length > 0;

  return (
    <div className="space-y-8">
      {/* 1. Metadata — always visible, even when the question is locked. */}
      <header>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border-2 border-ink bg-purple px-2 py-0.5 text-xs font-extrabold uppercase text-white">
            FRQ
          </span>
          <span className="rounded border-2 border-ink bg-yellow px-2 py-0.5 text-xs font-extrabold text-navy">
            {meta.totalPoints} points
          </span>
          <span className="rounded border-2 border-ink bg-white px-2 py-0.5 text-xs font-semibold text-navy">
            {meta.primaryCurriculumTopic}
          </span>
          {meta.section && (
            <span className="rounded border-2 border-ink bg-white px-2 py-0.5 text-xs font-semibold text-navy">
              {meta.section}
            </span>
          )}
          {meta.quickCheck && (
            <span className="rounded border-2 border-ink bg-success px-2 py-0.5 text-xs font-extrabold text-white">
              Free instant check
            </span>
          )}
        </div>

        <h1 className="mt-3 text-3xl font-extrabold text-navy">
          {meta.competition} {meta.year} — Question {meta.questionNumber}
        </h1>
        <p className="text-navy/70">
          {meta.examName}
          {meta.title ? ` · ${meta.title}` : ""}
        </p>
      </header>

      {/* 2 & 3. The question itself, or the Pro wall in its place. */}
      {content ? (
        <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-brutal">
          <FrqText
            text={content.questionText}
            figures={content.figures.filter((figure) => !figure.partId)}
          />

          {content.parts.length > 0 && (
            <ol className="mt-6 space-y-4">
              {content.parts.map((part) => {
                // A part's figures go where its set-up text places them;
                // the rest belong with the part's own prompt.
                const partFigures = content.figures.filter((figure) => figure.partId === part.id);
                const leadInFigures = part.leadIn ? figuresPlacedIn(part.leadIn, partFigures) : [];
                const promptFigures = partFigures.filter((figure) => !leadInFigures.includes(figure));
                return (
                  <li key={part.id} className="space-y-3">
                    {part.leadIn && <FrqText text={part.leadIn} figures={leadInFigures} />}
                    <div className="rounded-lg border-2 border-ink bg-cream p-4">
                      <p className="flex flex-wrap items-center gap-2 font-extrabold text-navy">
                        <span>{part.label}</span>
                        <span className="font-normal">
                          ({part.maxPoints} {part.maxPoints === 1 ? "point" : "points"})
                        </span>
                        {part.answerFormat === "DRAWING" && (
                          <span className="rounded border-2 border-ink bg-white px-2 py-0.5 text-xs">
                            Draw on the answer sheet
                          </span>
                        )}
                      </p>
                      <FrqText className="mt-2" text={part.prompt} figures={promptFigures} />
                    </div>
                  </li>
                );
              })}
            </ol>
          )}

          {content.answerSheets.length > 0 && (
            <div className="mt-6 rounded-lg border-2 border-ink bg-yellow/30 p-4">
              <p className="font-extrabold text-navy">Answer sheets</p>
              <p className="mt-1 text-sm text-navy/80">
                Print (or draw on screen), complete the drawing parts, then photograph
                the page and upload it with your solution.
              </p>
              <ul className="mt-2 flex flex-wrap gap-3">
                {content.answerSheets.map((sheet, index) => (
                  <li key={sheet.id}>
                    <a
                      href={sheet.url}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="inline-block rounded-lg border-[3px] border-ink bg-white px-4 py-2 text-sm font-bold text-navy shadow-brutal-sm hover:bg-cream"
                    >
                      Download {sheet.caption ?? `answer sheet ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : (
        <LockedQuestionNotice />
      )}

      {/* Short-answer questions: checked instantly and free, no AI. */}
      {content && meta.quickCheck && (
        <QuickCheckForm
          questionId={questionId}
          parts={content.parts}
          lastCheck={detail.lastCheck}
          solutionUnlocked={Boolean(solution)}
          onChecked={load}
        />
      )}

      {/* 4–9. The workspace, only when the student can read the question. */}
      {content && !meta.quickCheck && (
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-navy">Your solution</h2>

          <label className="block font-bold text-navy">
            Typed working
            <textarea
              value={typedResponse}
              onChange={(event) => setTypedResponse(event.target.value)}
              rows={10}
              disabled={!state.canSubmit || busy}
              placeholder={
                content.parts.length > 0
                  ? "Answer every part here, labelled (a), (b), (c)(i)… and show your working. You can also, or instead, upload photos of handwritten work."
                  : "Set out your reasoning here. You can also, or instead, upload photos of handwritten work."
              }
              className="mt-2 w-full rounded-lg border-[3px] border-ink bg-white p-3 font-normal text-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:bg-navy/5"
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
              className="rounded-lg border-[3px] border-danger bg-white p-4 text-sm font-semibold text-navy"
            >
              {submitError}
            </p>
          )}

          {status && (
            <p
              role="status"
              className="rounded-lg border-[3px] border-ink bg-yellow/40 p-4 text-sm font-bold text-navy"
            >
              {status}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setDialog("submit")}
              disabled={!state.canSubmit || !hasWork || busy}
              className="rounded-lg border-[3px] border-ink bg-yellow px-6 py-3 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              Submit for grading
            </button>

            {state.canGiveUp && (
              <button
                type="button"
                onClick={() => setDialog("giveUp")}
                disabled={busy}
                className="rounded-lg border-[3px] border-ink bg-white px-6 py-3 font-bold text-navy transition hover:bg-cream focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-50"
              >
                Give up &amp; view solution
              </button>
            )}
          </div>

          {/* A disabled button always says why it is disabled. */}
          {!state.canSubmit && (
            <p className="text-sm font-semibold text-navy/80">
              {disabledExplanation(state.blockedReason)}
            </p>
          )}
          {state.canSubmit && !hasWork && (
            <p className="text-sm text-navy/70">
              Type your working or upload a page to enable grading.
            </p>
          )}
        </section>
      )}

      {/* Model solutions for the parts already solved in full. */}
      {detail.earnedPartSolutions.length > 0 && (
        <section className="rounded-xl border-[3px] border-ink bg-cream p-6 shadow-brutal">
          <h2 className="text-2xl font-extrabold text-navy">Parts you&apos;ve solved</h2>
          <p className="mt-1 text-sm text-navy/70">
            Full marks on these parts, so here is the model solution for each. Keep
            going on the rest.
          </p>
          <ol className="mt-4 space-y-3">
            {detail.earnedPartSolutions.map((part) => (
              <li key={part.label} className="rounded-lg border-2 border-ink bg-white p-4">
                <p className="font-extrabold text-navy">{part.label}</p>
                <FrqText className="mt-1" text={part.officialSolution} figures={part.figures} />
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 11 & 12. Every attempt, newest last, loaded from the database. */}
      {attempts.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-navy">Your attempts</h2>
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
        <section className="rounded-xl border-[3px] border-ink bg-cream p-6 shadow-brutal">
          <h2 className="text-2xl font-extrabold text-navy">{solutionHeading(solution.source)}</h2>
          <p className="mt-1 text-sm text-navy/70">
            {unlockExplanation(solution.reason)} {solutionSourceNote(solution.source)}
          </p>

          {solution.questionSolution && (
            <FrqText
              className="mt-4"
              text={solution.questionSolution}
              figures={figuresPlacedIn(solution.questionSolution, solution.figures)}
            />
          )}

          {solution.parts.filter((part) => part.officialSolution).length > 0 && (
            <ol className="mt-4 space-y-3">
              {solution.parts
                .filter((part) => part.officialSolution)
                .map((part) => (
                  <li key={part.label} className="rounded-lg border-2 border-ink bg-white p-4">
                    <p className="font-extrabold text-navy">{part.label}</p>
                    <FrqText
                      className="mt-1"
                      text={part.officialSolution ?? ""}
                      figures={figuresPlacedIn(part.officialSolution ?? "", solution.figures)}
                    />
                  </li>
                ))}
            </ol>
          )}

          {/* Solution figures that no solution text places are shown last. */}
          {unplacedFigures(solution).length > 0 && (
            <FrqText className="mt-4" text="" figures={unplacedFigures(solution)} />
          )}
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
    <div className="flex flex-wrap gap-4 rounded-lg border-[3px] border-ink bg-cream p-4 text-sm font-bold text-navy">
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
    <section className="rounded-xl border-[3px] border-ink bg-purple p-6 text-white shadow-brutal">
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
        className="mt-5 inline-block rounded-lg border-[3px] border-ink bg-yellow px-6 py-3 font-extrabold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
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

/// Solution figures not placed by [[figure:key]] in any solution text.
function unplacedFigures(solution: NonNullable<FrqDetail["solution"]>): SignedFigure[] {
  const texts = [solution.questionSolution ?? "", ...solution.parts.map((part) => part.officialSolution ?? "")];
  const placed = new Set(texts.flatMap((text) => figuresPlacedIn(text, solution.figures)).map((figure) => figure.id));
  return solution.figures.filter((figure) => !placed.has(figure.id));
}

function solutionHeading(source: "OFFICIAL" | "ADAPTED" | "ASTRO_COACH"): string {
  return source === "ASTRO_COACH" ? "Worked solution" : "Official solution";
}

function solutionSourceNote(source: "OFFICIAL" | "ADAPTED" | "ASTRO_COACH"): string {
  switch (source) {
    case "OFFICIAL":
      return "This is the competition's published solution.";
    case "ADAPTED":
      return "Based on the competition's published solution, lightly simplified.";
    case "ASTRO_COACH":
      return "Written by Astro Coach: the competition published only final answers for this question.";
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
