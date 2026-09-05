'use client';

import { useState } from 'react';
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

export default function ReportProblemButton({ questionId }: { questionId: string }) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<string>('');
  const [details, setDetails] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

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
        className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[var(--color-navy)]/25 px-3 py-1.5 text-sm font-bold text-[var(--color-navy)]/70 transition hover:border-red-500 hover:bg-red-50 hover:text-red-700"
      >
        <span aria-hidden="true">⚑</span> Report a problem
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
            {sent ? (
              // Confirmation, so the learner knows it actually went somewhere.
              <div className="text-center">
                <p className="text-2xl">✅</p>
                <h2 className="mt-2 text-xl font-extrabold text-[var(--color-navy)]">
                  Thanks — report sent
                </h2>
                <p className="mt-2 text-sm text-[var(--color-navy)]/70">
                  We&apos;ll take a look at this question and fix it if something is wrong.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-5 w-full rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-2 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-[var(--color-navy)]">
                  Report a problem
                </h2>
                <p className="mt-1 text-sm text-[var(--color-navy)]/70">
                  What&apos;s wrong with this question?
                </p>

                <div className="mt-4 space-y-2">
                  {REASONS.map((option) => {
                    const selected = reason === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setReason(option.value)}
                        className={`block w-full rounded-lg border-2 px-4 py-2.5 text-left transition ${
                          selected
                            ? 'border-black bg-[var(--color-electric-blue)] text-white'
                            : 'border-black/20 bg-white text-[var(--color-navy)] hover:border-black hover:bg-[var(--color-cream)]'
                        }`}
                      >
                        <span className="block text-sm font-bold">{option.label}</span>
                        <span
                          className={`block text-xs ${selected ? 'text-white/80' : 'text-[var(--color-navy)]/55'}`}
                        >
                          {option.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <label
                  htmlFor="report-details"
                  className="mt-4 block text-sm font-bold text-[var(--color-navy)]"
                >
                  {detailsRequired ? 'Tell us what happened' : 'Anything else? (optional)'}
                </label>
                <textarea
                  id="report-details"
                  value={details}
                  onChange={(event) => setDetails(event.target.value.slice(0, 1000))}
                  rows={3}
                  placeholder="Add any detail that would help us fix it"
                  className="mt-1 w-full rounded border-2 border-black px-3 py-2 text-sm text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                />
                <p className="mt-1 text-right text-xs text-[var(--color-navy)]/50">
                  {details.length}/1000
                </p>

                {error && <p className="mt-2 text-sm font-bold text-red-700">{error}</p>}

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={close}
                    className="flex-1 rounded-lg border-2 border-black bg-white px-4 py-2 font-bold text-[var(--color-navy)] transition hover:bg-[var(--color-cream)]"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || isSending}
                    className="flex-1 rounded-lg border-2 border-black bg-[var(--color-electric-blue)] px-4 py-2 font-bold text-white transition hover:bg-[var(--color-electric-blue)]/90 disabled:cursor-not-allowed disabled:opacity-50"
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
