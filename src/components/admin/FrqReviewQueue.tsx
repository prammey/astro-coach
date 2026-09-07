"use client";

// The review queue and the single-question review screen.
//
// The reviewer sees the extracted question next to its source page numbers,
// its point values, its official solution and every warning the extractor
// raised. Approving is blocked, with reasons, until all of that is sound —
// so publishing is a deliberate act rather than a default.

import { useCallback, useEffect, useState } from "react";
import { ApiError, apiGet, apiPost } from "@/lib/pro/client";
import { EXTRACTION_FLAG_LABELS, type ExtractionFlag } from "@/lib/ai/import-extractor";
import { CURRICULUM_TOPICS } from "@/data/mcq/topicTaxonomy";

type DraftRow = {
  id: string;
  competition: string;
  year: number;
  examName: string;
  questionNumber: string;
  title: string | null;
  totalPoints: number;
  status: string;
  rightsStatus: string;
  extractionFlags: string[];
  extractionConfidence: number | null;
  _count: { parts: number };
};

type FullDraft = {
  id: string;
  questionText: string;
  title: string | null;
  totalPoints: number;
  officialSolution: string | null;
  gradingRubric: string | null;
  primaryCurriculumTopic: string;
  rightsStatus: string;
  rightsNotes: string | null;
  reviewNotes: string | null;
  extractionFlags: string[];
  extractionConfidence: number | null;
  questionPdfPages: number[];
  solutionPdfPages: number[];
  sourceUrl: string | null;
  competition: string;
  year: number;
  examName: string;
  questionNumber: string;
  status: string;
  parts: Array<{
    id: string;
    label: string;
    prompt: string;
    maxPoints: number;
    officialSolution: string | null;
    gradingRubric: string | null;
  }>;
  media: Array<{ id: string; caption: string | null; needsReview: boolean }>;
};

export default function FrqReviewQueue() {
  const [rows, setRows] = useState<DraftRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadPage = useCallback((pageNumber: number) => {
    return apiGet<{ questions: DraftRow[]; total: number }>(
      `/api/admin/frq/drafts?page=${pageNumber}`,
    )
      .then((response) => {
        setRows(response.questions);
        setTotal(response.total);
      })
      .catch(() => setError("Could not load the review queue."));
  }, []);

  useEffect(() => {
    let active = true;

    apiGet<{ questions: DraftRow[]; total: number }>(`/api/admin/frq/drafts?page=${page}`)
      .then((response) => {
        if (!active) return;
        setRows(response.questions);
        setTotal(response.total);
      })
      .catch(() => active && setError("Could not load the review queue."));

    return () => {
      active = false;
    };
  }, [page]);

  if (selected) {
    return (
      <ReviewOne
        questionId={selected}
        onDone={() => {
          setSelected(null);
          loadPage(page);
        }}
      />
    );
  }

  if (error) {
    return <p className="mt-6 rounded-lg border-4 border-black bg-red-100 p-4">{error}</p>;
  }

  if (rows.length === 0) {
    return (
      <p className="mt-6 rounded-lg border-4 border-black bg-[var(--color-cream)] p-6 text-[var(--color-navy)]">
        Nothing waiting for review.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-sm text-[var(--color-navy)]/70">{total} awaiting review</p>

      <ul className="mt-3 space-y-3">
        {rows.map((row) => (
          <li key={row.id}>
            <button
              type="button"
              onClick={() => setSelected(row.id)}
              className="w-full rounded-lg border-4 border-black bg-white p-4 text-left shadow-[4px_4px_0_0_#000] transition hover:bg-[var(--color-cream)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-extrabold text-[var(--color-navy)]">
                  {row.competition} {row.year} — Q{row.questionNumber}
                </span>
                <span className="rounded border-2 border-black bg-[var(--color-cream)] px-2 py-0.5 text-xs font-bold">
                  {row.status}
                </span>
              </div>
              <p className="text-sm text-[var(--color-navy)]/70">
                {row.examName} · {row.totalPoints} points · {row._count.parts} parts
              </p>

              {row.extractionFlags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {row.extractionFlags.map((flag) => (
                    <li
                      key={flag}
                      className="rounded border-2 border-black bg-[var(--color-yellow)] px-2 py-0.5 text-xs font-bold text-[var(--color-navy)]"
                    >
                      {EXTRACTION_FLAG_LABELS[flag as ExtractionFlag] ?? flag}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((current) => current - 1)}
          className="rounded-lg border-4 border-black bg-white px-4 py-2 font-bold disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={page * 20 >= total}
          onClick={() => setPage((current) => current + 1)}
          className="rounded-lg border-4 border-black bg-white px-4 py-2 font-bold disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function ReviewOne({ questionId, onDone }: { questionId: string; onDone: () => void }) {
  const [draft, setDraft] = useState<FullDraft | null>(null);
  const [publishCheck, setPublishCheck] = useState<{ ok: boolean; reasons?: string[] } | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(
    () =>
      apiGet<{ question: FullDraft; publishCheck: { ok: boolean; reasons?: string[] } }>(
        `/api/admin/frq/drafts/${questionId}`,
      ).then((response) => {
        setDraft(response.question);
        setPublishCheck(response.publishCheck);
      }),
    [questionId],
  );

  useEffect(() => {
    let active = true;

    apiGet<{ question: FullDraft; publishCheck: { ok: boolean; reasons?: string[] } }>(
      `/api/admin/frq/drafts/${questionId}`,
    )
      .then((response) => {
        if (!active) return;
        setDraft(response.question);
        setPublishCheck(response.publishCheck);
      })
      .catch(() => active && setMessage("Could not load this question."));

    return () => {
      active = false;
    };
  }, [questionId]);

  async function save() {
    if (!draft) return;
    setBusy(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/admin/frq/drafts/${draft.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionText: draft.questionText,
          title: draft.title,
          totalPoints: draft.totalPoints,
          officialSolution: draft.officialSolution,
          gradingRubric: draft.gradingRubric,
          primaryCurriculumTopic: draft.primaryCurriculumTopic,
          curriculumTopics: [draft.primaryCurriculumTopic],
          rightsStatus: draft.rightsStatus,
          rightsNotes: draft.rightsNotes,
          reviewNotes: draft.reviewNotes,
          extractionFlags: draft.extractionFlags,
          parts: draft.parts,
        }),
      });
      if (!response.ok) throw new Error();

      await load();
      setMessage("Saved.");
    } catch {
      setMessage("Could not save your changes.");
    } finally {
      setBusy(false);
    }
  }

  async function act(action: "approve" | "reject") {
    if (!draft) return;
    setBusy(true);
    setMessage(null);

    try {
      await apiPost(`/api/admin/frq/drafts/${draft.id}`, { action });
      onDone();
    } catch (error) {
      if (error instanceof ApiError) {
        const reasons = (error.body?.reasons as string[] | undefined) ?? [];
        setMessage(
          reasons.length > 0 ? `${error.message} ${reasons.join(" ")}` : error.message,
        );
      } else {
        setMessage("That did not work.");
      }
    } finally {
      setBusy(false);
    }
  }

  if (!draft) return <p className="mt-6">Loading…</p>;

  const partsTotal = draft.parts.reduce((sum, part) => sum + part.maxPoints, 0);

  return (
    <div className="mt-6 space-y-5">
      <button
        type="button"
        onClick={onDone}
        className="rounded-lg border-4 border-black bg-white px-4 py-2 font-bold"
      >
        ← Back to the queue
      </button>

      <div className="rounded-xl border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]">
        <h2 className="text-xl font-extrabold text-[var(--color-navy)]">
          {draft.competition} {draft.year} — Q{draft.questionNumber}
        </h2>

        {/* Where this came from, so it can be checked against the paper. */}
        <p className="mt-1 text-sm text-[var(--color-navy)]/70">
          {draft.examName} · question pages{" "}
          {draft.questionPdfPages.join(", ") || "unknown"} · solution pages{" "}
          {draft.solutionPdfPages.join(", ") || "unknown"}
          {draft.extractionConfidence !== null &&
            ` · extraction confidence ${Math.round(draft.extractionConfidence * 100)}%`}
        </p>
        {draft.sourceUrl && (
          <a
            href={draft.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-[var(--color-electric-blue)] underline"
          >
            Open the source
          </a>
        )}

        {draft.extractionFlags.length > 0 && (
          <div className="mt-4 rounded-lg border-4 border-black bg-[var(--color-yellow)]/40 p-4">
            <p className="font-extrabold text-[var(--color-navy)]">
              Warnings — resolve these before publishing
            </p>
            <ul className="mt-2 space-y-2">
              {draft.extractionFlags.map((flag) => (
                <li key={flag} className="flex items-center gap-2 text-sm">
                  <button
                    type="button"
                    onClick={() =>
                      setDraft({
                        ...draft,
                        extractionFlags: draft.extractionFlags.filter((f) => f !== flag),
                      })
                    }
                    className="rounded border-2 border-black bg-white px-2 py-0.5 text-xs font-bold"
                  >
                    Resolved
                  </button>
                  {EXTRACTION_FLAG_LABELS[flag as ExtractionFlag] ?? flag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {draft.media.length > 0 && (
          <p className="mt-3 text-sm text-[var(--color-navy)]/70">
            {draft.media.length} figure(s) attached
            {draft.media.some((item) => item.needsReview) && " — some still need checking"}
          </p>
        )}
      </div>

      <Editable
        label="Question text"
        value={draft.questionText}
        rows={8}
        onChange={(value) => setDraft({ ...draft, questionText: value })}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-bold text-[var(--color-navy)]">
          Total points
          <input
            type="number"
            value={draft.totalPoints}
            onChange={(event) =>
              setDraft({ ...draft, totalPoints: Number(event.target.value) || 0 })
            }
            className="mt-1 block w-full rounded-lg border-4 border-black bg-white px-3 py-2"
          />
          {draft.parts.length > 0 && (
            <span
              className={`mt-1 block text-xs font-normal ${
                partsTotal === draft.totalPoints ? "text-[var(--color-navy)]/60" : "text-red-700"
              }`}
            >
              Parts add up to {partsTotal}.
            </span>
          )}
        </label>

        <label className="block text-sm font-bold text-[var(--color-navy)]">
          Curriculum topic
          <select
            value={draft.primaryCurriculumTopic}
            onChange={(event) =>
              setDraft({ ...draft, primaryCurriculumTopic: event.target.value })
            }
            className="mt-1 block w-full rounded-lg border-4 border-black bg-white px-3 py-2"
          >
            {CURRICULUM_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>

      {draft.parts.map((part, index) => (
        <div key={part.id} className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4">
          <div className="flex gap-3">
            <label className="text-sm font-bold text-[var(--color-navy)]">
              Label
              <input
                value={part.label}
                onChange={(event) => updatePart(index, { label: event.target.value })}
                className="mt-1 block w-24 rounded border-2 border-black px-2 py-1"
              />
            </label>
            <label className="text-sm font-bold text-[var(--color-navy)]">
              Points
              <input
                type="number"
                value={part.maxPoints}
                onChange={(event) =>
                  updatePart(index, { maxPoints: Number(event.target.value) || 0 })
                }
                className="mt-1 block w-24 rounded border-2 border-black px-2 py-1"
              />
            </label>
          </div>

          <Editable
            label="Prompt"
            value={part.prompt}
            rows={3}
            onChange={(value) => updatePart(index, { prompt: value })}
          />
          <Editable
            label="Official solution"
            value={part.officialSolution ?? ""}
            rows={4}
            onChange={(value) => updatePart(index, { officialSolution: value })}
          />
          <Editable
            label="Marking scheme"
            value={part.gradingRubric ?? ""}
            rows={3}
            onChange={(value) => updatePart(index, { gradingRubric: value })}
          />
        </div>
      ))}

      {draft.parts.length === 0 && (
        <>
          <Editable
            label="Official solution"
            value={draft.officialSolution ?? ""}
            rows={6}
            onChange={(value) => setDraft({ ...draft, officialSolution: value })}
          />
          <Editable
            label="Marking scheme"
            value={draft.gradingRubric ?? ""}
            rows={4}
            onChange={(value) => setDraft({ ...draft, gradingRubric: value })}
          />
        </>
      )}

      <label className="block text-sm font-bold text-[var(--color-navy)]">
        Rights / permission status
        <select
          value={draft.rightsStatus}
          onChange={(event) => setDraft({ ...draft, rightsStatus: event.target.value })}
          className="mt-1 block w-full rounded-lg border-4 border-black bg-white px-3 py-2"
        >
          {[
            "UNREVIEWED",
            "PENDING_PERMISSION",
            "PERMISSION_GRANTED",
            "PUBLIC_DOMAIN",
            "FAIR_USE_CLAIMED",
            "DENIED",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>

      <Editable
        label="Review notes"
        value={draft.reviewNotes ?? ""}
        rows={3}
        onChange={(value) => setDraft({ ...draft, reviewNotes: value })}
      />

      {publishCheck && !publishCheck.ok && (
        <div className="rounded-lg border-4 border-black bg-red-100 p-4">
          <p className="font-extrabold text-[var(--color-navy)]">Not publishable yet:</p>
          <ul className="mt-1 list-disc pl-5 text-sm">
            {publishCheck.reasons?.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      )}

      {message && (
        <p role="status" className="rounded-lg border-4 border-black bg-[var(--color-cream)] p-4 font-bold">
          {message}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={save}
          disabled={busy}
          className="rounded-lg border-4 border-black bg-white px-5 py-2 font-bold disabled:opacity-50"
        >
          Save changes
        </button>
        <button
          type="button"
          onClick={() => act("approve")}
          disabled={busy}
          className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-5 py-2 font-extrabold shadow-[4px_4px_0_0_#000] disabled:opacity-50"
        >
          Approve &amp; publish
        </button>
        <button
          type="button"
          onClick={() => act("reject")}
          disabled={busy}
          className="rounded-lg border-4 border-black bg-red-200 px-5 py-2 font-bold disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );

  function updatePart(index: number, changes: Partial<FullDraft["parts"][number]>) {
    if (!draft) return;
    const parts = draft.parts.map((part, position) =>
      position === index ? { ...part, ...changes } : part,
    );
    setDraft({ ...draft, parts });
  }
}

function Editable({
  label,
  value,
  rows,
  onChange,
}: {
  label: string;
  value: string;
  rows: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-3 block text-sm font-bold text-[var(--color-navy)]">
      {label}
      <textarea
        value={value}
        rows={rows}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block w-full rounded-lg border-4 border-black bg-white p-3 font-normal text-[var(--color-navy)]"
      />
    </label>
  );
}
