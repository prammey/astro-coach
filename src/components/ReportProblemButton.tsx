'use client';

import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

// The preset reasons a learner can pick from. Kept short and concrete so
// the common cases are one click, with "Other" as the escape hatch.
const REASONS = [
  { value: 'needs_image', label: 'This question needs an image', hint: 'A figure is referred to but missing' },
  { value: 'wrong_answer', label: 'The answer is wrong', hint: 'The marked correct answer looks incorrect' },
  { value: 'wrong_explanation', label: 'The explanation is wrong', hint: "The working doesn't support the answer" },
  { value: 'typo', label: 'Typo or formatting problem', hint: 'Spelling, symbols, or layout' },
  { value: 'other', label: 'Something else', hint: 'Tell us below' },
] as const;

// Everything inside the dialog that Tab can land on (same list as
// ConfirmDialog), used to keep keyboard focus inside the dialog.
const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';

// A "Report a problem" button that opens an accessible dialog.
//
// Accessibility (mirrors ConfirmDialog): focus moves into the dialog when it
// opens and returns to the button when it closes, Tab stays inside, and
// Escape closes it. The dialog scrolls on small phones so the Send button
// is always reachable.
export default function ReportProblemButton({ questionId }: { questionId: string }) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<string>('');
  const [details, setDetails] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeAfterSentRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // When the dialog opens: remember what had focus, then move focus to the
  // first option inside. When it closes: put focus back where it was.
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();

    return () => previouslyFocused.current?.focus();
  }, [isOpen]);

  // Once the report is sent, the form (and its Send button) disappears, so
  // move focus to the new Close button instead of losing it.
  useEffect(() => {
    if (sent) closeAfterSentRef.current?.focus();
  }, [sent]);

  // "Other" is only meaningful with an explanation; everything else is
  // optional detail.
  const detailsRequired = reason === 'other';
  const canSubmit = reason !== '' && (!detailsRequired || details.trim().length > 0);

  function close() {
    setIsOpen(false);
    setError('');
    // Reset for next time, but only once the dialog is closed.
    setTimeout(() => {
      setReason('');
      setDetails('');
      setSent(false);
    }, 200);
  }

  // Keyboard handling for the dialog: Escape closes it (unless a report is
  // mid-send), and Tab / Shift+Tab wrap around inside it.
  function handleDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape' && !isSending) {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
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
  }

  async function handleSubmit() {
    if (!canSubmit) return;
    setIsSending(true);
    setError('');

    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };

      // Attach the token when signed in, so the report can be attributed.
      // Signed-out learners can still report; it just arrives anonymous.
      if (user) {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) headers.Authorization = `Bearer ${session.access_token}`;
      }

      const response = await fetch('/api/reports', {
        method: 'POST',
        headers,
        body: JSON.stringify({ questionId, reason, details: details.trim() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Could not send your report');
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send your report');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title="Report a problem with this question"
        className="inline-flex items-center gap-1.5 border-2 border-navy/25 px-3 py-1.5 text-sm font-bold text-navy/70 transition hover:border-danger hover:bg-danger/10 hover:text-danger"
      >
        <span aria-hidden="true">⚑</span> Report a problem
      </button>

      {isOpen && (
        // The overlay and the panel both scroll, so on a short phone screen
        // the whole form (including Send) can still be reached.
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onKeyDown={handleDialogKeyDown}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-dialog-title"
            className="max-h-full w-full max-w-lg overflow-y-auto border-[3px] border-ink bg-white p-6 shadow-brutal-lg"
          >
            {sent ? (
              // Confirmation, so the learner knows it actually went somewhere.
              <div className="text-center">
                <p className="text-2xl">✅</p>
                <h2 id="report-dialog-title" className="mt-2 text-xl font-extrabold text-navy">
                  Thanks — report sent
                </h2>
                <p className="mt-2 text-sm text-navy/70">
                  We&apos;ll take a look at this question and fix it if something is wrong.
                </p>
                <button
                  ref={closeAfterSentRef}
                  type="button"
                  onClick={close}
                  className="mt-5 w-full border-[3px] border-ink bg-electric px-6 py-2 font-bold text-white shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 id="report-dialog-title" className="text-xl font-extrabold text-navy">
                  Report a problem
                </h2>
                <p className="mt-1 text-sm text-navy/70">
                  What&apos;s wrong with this question?
                </p>

                <div className="mt-4 space-y-2">
                  {REASONS.map((option) => {
                    const selected = reason === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setReason(option.value)}
                        className={`block w-full border-2 px-4 py-2.5 text-left transition ${
                          selected
                            ? 'border-ink bg-electric text-white'
                            : 'border-navy/20 bg-white text-navy hover:border-ink hover:bg-cream'
                        }`}
                      >
                        <span className="block text-sm font-bold">{option.label}</span>
                        <span
                          className={`block text-xs ${selected ? 'text-white/80' : 'text-navy/55'}`}
                        >
                          {option.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <label
                  htmlFor="report-details"
                  className="mt-4 block text-sm font-bold text-navy"
                >
                  {detailsRequired ? 'Tell us what happened' : 'Anything else? (optional)'}
                </label>
                <textarea
                  id="report-details"
                  value={details}
                  onChange={(event) => setDetails(event.target.value.slice(0, 1000))}
                  rows={3}
                  placeholder="Add any detail that would help us fix it"
                  className="mt-1 w-full border-2 border-ink px-3 py-2 text-sm text-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                />
                <p className="mt-1 text-right text-xs text-navy/50">
                  {details.length}/1000
                </p>

                {/* Reporting works signed out, so this nudges rather than
                    blocks. The link opens in a new tab so a half-written
                    report is not lost by navigating away. */}
                {!user && (
                  <p className="mt-3 border-2 border-yellow bg-yellow/20 px-3 py-2 text-xs text-navy">
                    You&apos;re reporting anonymously.{' '}
                    <a
                      href="/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-electric underline"
                    >
                      Sign in
                    </a>{' '}
                    so we can follow up if we need more detail — your report counts
                    either way.
                  </p>
                )}

                {error && <p className="mt-2 text-sm font-bold text-danger">{error}</p>}

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={close}
                    className="flex-1 border-2 border-ink bg-white px-4 py-2 font-bold text-navy transition hover:bg-cream"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSending}
                    className="flex-1 border-2 border-ink bg-electric px-4 py-2 font-bold text-white transition hover:bg-electric/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSending ? 'Sending...' : 'Send report'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
