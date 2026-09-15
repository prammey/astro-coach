"use client";

// The upload control for handwritten or PDF working.
//
// Two things this must get right:
//
//   - The page maths is shown live, because "8 pages" is not obvious when a
//     student attaches a 4-page PDF and four photos. Images count as one
//     page each; a PDF's real page count is confirmed by the server, so
//     until then the count shown for a PDF is an estimate.
//   - Nothing here costs anything. Choosing files, removing them, and
//     having one rejected are all free.

import { useRef } from "react";
import { PUBLIC_PRO_CONFIG } from "@/lib/pro/public-config";

export type PendingFile = {
  file: File;
  /// Known for images (always 1); unknown for a PDF until the server counts.
  estimatedPages: number | null;
};

const ACCEPT = "image/jpeg,image/png,image/webp,application/pdf";

export default function SolutionUploader({
  files,
  onChange,
  disabled,
}: {
  files: PendingFile[];
  onChange: (files: PendingFile[]) => void;
  disabled?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const knownPages = files.reduce((sum, entry) => sum + (entry.estimatedPages ?? 0), 0);
  const hasUnknown = files.some((entry) => entry.estimatedPages === null);

  function addFiles(selected: FileList | null) {
    if (!selected) return;

    const added: PendingFile[] = Array.from(selected).map((file) => ({
      file,
      // A PDF's page count can only be established by reading the file,
      // which the server does before anything is charged.
      estimatedPages: file.type === "application/pdf" ? null : 1,
    }));

    onChange([...files, ...added]);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="rounded-lg border-4 border-black bg-white p-4">
      <h3 className="font-extrabold text-[var(--color-navy)]">Upload your working</h3>

      {/* Handwriting guidance, kept honest — no promise that recognition is
          perfect. */}
      <p className="mt-2 text-sm text-[var(--color-navy)]/80">
        For best grading: write clearly, keep all work visible and well-lit,
        and box your final answers.
      </p>
      <ul className="mt-2 list-disc space-y-0.5 pl-5 text-xs text-[var(--color-navy)]/70">
        <li>Avoid blurry photos — check the page is in focus before uploading.</li>
        <li>Keep each page the right way up.</li>
        <li>Include all your working, not just the final line.</li>
      </ul>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept={ACCEPT}
        disabled={disabled}
        onChange={(event) => addFiles(event.target.files)}
        className="mt-4 block w-full text-sm text-[var(--color-navy)] file:mr-3 file:rounded-lg file:border-4 file:border-black file:bg-[var(--color-cream)] file:px-4 file:py-2 file:font-bold file:text-[var(--color-navy)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:opacity-50"
        aria-describedby="upload-limits"
      />

      <p id="upload-limits" className="mt-2 text-xs text-[var(--color-navy)]/70">
        JPG, PNG, WebP or PDF · up to {PUBLIC_PRO_CONFIG.maxUploadPages} pages in
        total per submission · 10 MB per file. Each photo counts as one page; a
        PDF counts its own pages. Typed working does not count.
      </p>

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((entry, index) => (
            <li
              key={`${entry.file.name}-${index}`}
              className="flex items-center justify-between gap-3 rounded-lg border-2 border-black bg-[var(--color-cream)] px-3 py-2"
            >
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-[var(--color-navy)]">
                {entry.file.name}
                <span className="ml-2 font-normal text-[var(--color-navy)]/60">
                  {entry.estimatedPages === null
                    ? "PDF — pages counted on submit"
                    : "1 page"}
                </span>
              </span>
              <button
                type="button"
                disabled={disabled}
                onClick={() => onChange(files.filter((_, position) => position !== index))}
                className="rounded border-2 border-black bg-white px-2 py-1 text-xs font-bold text-[var(--color-navy)] hover:bg-red-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-electric-blue)] disabled:opacity-50"
                aria-label={`Remove ${entry.file.name}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {files.length > 0 && (
        <p className="mt-3 text-sm font-bold text-[var(--color-navy)]">
          {knownPages} page{knownPages === 1 ? "" : "s"}
          {hasUnknown && " so far, plus your PDF pages"} of{" "}
          {PUBLIC_PRO_CONFIG.maxUploadPages} allowed
        </p>
      )}
    </div>
  );
}
