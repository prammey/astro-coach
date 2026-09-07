"use client";

// The admin importer: source metadata, two PDFs, then extraction.
//
// The PDFs go straight to a private admin-only bucket via signed URLs, so
// large papers never pass through a Vercel function. Extraction writes
// drafts and nothing else — publication is a separate, explicit act on the
// review screen.

import { useState } from "react";
import Link from "next/link";
import { ApiError, apiPost } from "@/lib/pro/client";

const RIGHTS_OPTIONS = [
  { value: "UNREVIEWED", label: "Not reviewed yet" },
  { value: "PENDING_PERMISSION", label: "Permission requested" },
  { value: "PERMISSION_GRANTED", label: "Permission granted" },
  { value: "PUBLIC_DOMAIN", label: "Public domain" },
  { value: "FAIR_USE_CLAIMED", label: "Fair use claimed" },
  { value: "DENIED", label: "Permission denied" },
];

type Stage = "form" | "uploading" | "analyzing" | "done";

export default function FrqImporter() {
  const [competition, setCompetition] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [examName, setExamName] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [rightsStatus, setRightsStatus] = useState("UNREVIEWED");
  const [notes, setNotes] = useState("");
  const [questionPdf, setQuestionPdf] = useState<File | null>(null);
  const [solutionPdf, setSolutionPdf] = useState<File | null>(null);

  const [stage, setStage] = useState<Stage>("form");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ created: number; extracted: number } | null>(null);

  async function run(event: React.FormEvent) {
    event.preventDefault();
    if (!questionPdf) return;

    setError(null);
    setStage("uploading");

    try {
      const { batchId, uploads } = await apiPost<{
        batchId: string;
        uploads: { question: { signedUrl: string }; solution: { signedUrl: string } };
      }>("/api/admin/frq/batches", {
        competition,
        year,
        examName,
        sourceUrl: sourceUrl.trim() || null,
        rightsStatus,
        notes: notes.trim() || null,
      });

      await put(uploads.question.signedUrl, questionPdf);
      if (solutionPdf) await put(uploads.solution.signedUrl, solutionPdf);

      setStage("analyzing");
      const analysis = await apiPost<{ created: number; extracted: number }>(
        `/api/admin/frq/batches/${batchId}/analyze`,
        {},
      );

      setResult(analysis);
      setStage("done");
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "The import failed.");
      setStage("form");
    }
  }

  if (stage === "done" && result) {
    return (
      <div className="mt-6 rounded-xl border-4 border-black bg-[var(--color-cream)] p-6 shadow-[6px_6px_0_0_#000]">
        <h2 className="text-xl font-extrabold text-[var(--color-navy)]">Extraction finished</h2>
        <p className="mt-2 text-[var(--color-navy)]">
          {result.extracted} question{result.extracted === 1 ? "" : "s"} found,{" "}
          {result.created} saved as drafts. Nothing has been published.
        </p>
        <Link
          href="/admin/frq-review"
          className="mt-4 inline-block rounded-lg border-4 border-black bg-[var(--color-yellow)] px-5 py-2 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000]"
        >
          Review the drafts
        </Link>
      </div>
    );
  }

  const busy = stage !== "form";

  return (
    <form onSubmit={run} className="mt-6 space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Competition" value={competition} onChange={setCompetition} required />
        <Field
          label="Year"
          value={String(year)}
          onChange={(value) => setYear(Number(value) || year)}
          type="number"
          required
        />
        <Field label="Exam name" value={examName} onChange={setExamName} required />
        <Field label="Source URL" value={sourceUrl} onChange={setSourceUrl} type="url" />
      </div>

      <label className="block text-sm font-bold text-[var(--color-navy)]">
        Rights / permission status
        <select
          value={rightsStatus}
          onChange={(event) => setRightsStatus(event.target.value)}
          className="mt-1 block w-full rounded-lg border-4 border-black bg-white px-3 py-2 font-semibold text-[var(--color-navy)]"
        >
          {RIGHTS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="mt-1 block text-xs font-normal text-[var(--color-navy)]/70">
          A question cannot be published while this is unreviewed or denied.
          Nothing here assumes a public PDF may be reused commercially.
        </span>
      </label>

      <label className="block text-sm font-bold text-[var(--color-navy)]">
        Notes
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-lg border-4 border-black bg-white p-3 font-normal text-[var(--color-navy)]"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <FileField label="Question paper (PDF)" file={questionPdf} onChange={setQuestionPdf} required />
        <FileField label="Official solutions (PDF)" file={solutionPdf} onChange={setSolutionPdf} />
      </div>

      {error && (
        <p role="alert" className="rounded-lg border-4 border-black bg-red-100 p-4 font-semibold">
          {error}
        </p>
      )}

      {busy && (
        <p role="status" className="rounded-lg border-4 border-black bg-[var(--color-yellow)]/40 p-4 font-bold">
          {stage === "uploading"
            ? "Uploading the PDFs…"
            : "Reading the papers. This can take a couple of minutes for a long exam."}
        </p>
      )}

      <button
        type="submit"
        disabled={busy || !questionPdf || !competition || !examName}
        className="rounded-lg border-4 border-black bg-[var(--color-yellow)] px-6 py-3 font-extrabold text-[var(--color-navy)] shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        Analyze PDFs
      </button>
    </form>
  );
}

async function put(signedUrl: string, file: File): Promise<void> {
  const response = await fetch(signedUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/pdf" },
    body: file,
  });
  if (!response.ok) throw new ApiError(`"${file.name}" failed to upload.`, 500);
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-[var(--color-navy)]">
      {label}
      {required && <span aria-hidden> *</span>}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 block w-full rounded-lg border-4 border-black bg-white px-3 py-2 font-normal text-[var(--color-navy)]"
      />
    </label>
  );
}

function FileField({
  label,
  file,
  onChange,
  required,
}: {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-[var(--color-navy)]">
      {label}
      {required && <span aria-hidden> *</span>}
      <input
        type="file"
        accept="application/pdf"
        required={required}
        onChange={(event) => onChange(event.target.files?.[0] ?? null)}
        className="mt-1 block w-full text-sm file:mr-3 file:rounded-lg file:border-4 file:border-black file:bg-[var(--color-cream)] file:px-4 file:py-2 file:font-bold"
      />
      {file && (
        <span className="mt-1 block text-xs font-normal text-[var(--color-navy)]/70">
          {file.name}
        </span>
      )}
    </label>
  );
}
