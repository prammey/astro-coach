"use client";

// A keyboard-accessible confirmation dialog.
//
// Astro Coach uses this instead of window.confirm() for anything that costs
// a credit or cannot be undone, because a native dialog cannot show the
// student what they are about to spend, and cannot be styled or read out
// properly by a screen reader.
//
// Accessibility: focus moves into the dialog on open and returns to
// wherever it came from on close, Tab is trapped inside, and Escape
// cancels — so nobody can lose a credit to a stray keypress.

import { useCallback, useEffect, useRef } from "react";

export default function ConfirmDialog({
  open,
  title,
  children,
  confirmLabel,
  cancelLabel = "Cancel",
  confirmTone = "primary",
  busy = false,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  confirmLabel: string;
  cancelLabel?: string;
  /// "danger" for irreversible actions, like giving up on a question.
  confirmTone?: "primary" | "danger";
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Remember where focus came from, and put it back afterwards.
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    confirmRef.current?.focus();

    return () => previouslyFocused.current?.focus();
  }, [open]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape" && !busy) {
        event.preventDefault();
        onCancel();
        return;
      }

      if (event.key !== "Tab") return;

      // Keep Tab inside the dialog so the page behind stays unreachable.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [busy, onCancel],
  );

  if (!open) return null;

  const confirmClasses =
    confirmTone === "danger"
      ? "bg-danger text-white"
      : "bg-yellow text-navy";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        className="w-full max-w-md rounded-xl border-[3px] border-ink bg-cream p-6 shadow-brutal-lg"
      >
        <h2
          id="confirm-dialog-title"
          className="text-xl font-extrabold text-navy"
        >
          {title}
        </h2>

        <div className="mt-3 space-y-2 text-sm text-navy">{children}</div>

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className="rounded-lg border-[3px] border-ink bg-white px-5 py-2 font-bold text-navy transition hover:bg-cream focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-50"
          >
            {cancelLabel}
          </button>

          <button
            ref={confirmRef}
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className={`rounded-lg border-[3px] border-ink px-5 py-2 font-extrabold shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:cursor-wait disabled:opacity-70 ${confirmClasses}`}
          >
            {busy ? "Working…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
