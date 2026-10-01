'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/auth';
import BrutalButton from '@/components/ui/BrutalButton';

// The page a student reaches from "Forgot password?" on the login page.
//
// It asks Supabase to email a reset link. The link opens /reset-password,
// where they choose a new password. Clicking the link is what proves they
// own the email address.
//
// The success message is the same whether or not an account exists for
// that email, so this page cannot be used to find out who has an account.

/// Shown after every successful request, account or not.
const SENT_MESSAGE =
  'If an account exists for that email, a reset link is on its way. ' +
  'Check your inbox (and spam folder). The link works once and expires after an hour.';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Asks Supabase to send the reset email.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setIsSubmitting(false);

    if (resetError) {
      console.error('Password reset request failed:', resetError);
      // 429 = Supabase's email rate limit for this address or project.
      setError(
        resetError.status === 429
          ? 'Too many requests — please wait a minute and try again.'
          : 'Could not send the reset email. Please try again.',
      );
      return;
    }

    setSent(true);
  };

  return (
    <div className="starfield-dark min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="animate-rise-in rounded-xl border-[3px] border-ink bg-white p-8 shadow-brutal-lg">
          <h1 className="text-3xl font-extrabold text-navy mb-2">Reset your password</h1>
          <p className="text-sm text-navy/70 mb-6">
            Enter the email you signed up with and we&apos;ll send you a link to choose a new
            password.
          </p>

          {error && (
            <div className="mb-4 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
              {error}
            </div>
          )}

          {sent ? (
            // After sending: the neutral message, and a way to try again.
            <div className="space-y-4">
              <div className="p-4 rounded-lg border-[3px] border-ink bg-cream font-semibold text-navy text-sm">
                {SENT_MESSAGE}
              </div>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="text-sm font-semibold text-electric hover:underline"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <BrutalButton type="submit" variant="primary" className="mt-6 w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send reset link'}
              </BrutalButton>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-navy/70">
            Remembered it?{' '}
            <Link href="/login" className="font-semibold text-electric hover:underline">
              Back to log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
