'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/auth';
import { validateNewPassword } from '@/lib/password';
import BrutalButton from '@/components/ui/BrutalButton';
import LoadingStar from '@/components/ui/LoadingStar';

// Where the emailed reset link lands.
//
// The link carries a one-time token in the URL. The shared Supabase client
// (src/lib/auth.ts) reads it automatically and signs the student in for
// this one purpose, so by the time getSession() answers, they either have a
// session (link was good) or not (link expired, already used, or opened
// without one). Then they choose a new password here.

/// What the page is currently showing.
type Stage = 'checking' | 'invalid' | 'form' | 'done';

/// True when Supabase sent the student back with an error, e.g. an
/// expired or already-used link. It can put it in the hash or the query.
function linkHasError(): boolean {
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  return Boolean(hash.get('error_code') || hash.get('error') || query.get('error_code') || query.get('error'));
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>('checking');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Decide whether the link worked. getSession() waits for the client to
  // finish reading the token from the URL, so no timer is needed.
  useEffect(() => {
    let active = true;

    const checkLink = async () => {
      if (linkHasError()) {
        setStage('invalid');
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (active) setStage(data.session ? 'form' : 'invalid');
    };

    checkLink();
    return () => {
      active = false;
    };
  }, []);

  // Saves the new password, then sends them to their dashboard.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const passwordError = validateNewPassword(password, confirmPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setIsSubmitting(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);

    if (updateError) {
      console.error('Password update failed:', updateError);
      setError(
        // Supabase refuses a new password identical to the current one.
        updateError.code === 'same_password'
          ? 'That is already your password — choose a different one.'
          : 'Could not save your new password. Please try again.',
      );
      return;
    }

    setStage('done');
    setTimeout(() => router.push('/dashboard'), 2000);
  };

  return (
    <div className="starfield-dark min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="animate-rise-in rounded-xl border-[3px] border-ink bg-white p-8 shadow-brutal-lg">
          <h1 className="text-3xl font-extrabold text-navy mb-2">Choose a new password</h1>

          {/* Still reading the link. */}
          {stage === 'checking' && (
            <div className="flex justify-center py-8">
              <LoadingStar />
            </div>
          )}

          {/* Expired, already used, or opened without a link. */}
          {stage === 'invalid' && (
            <div className="space-y-4">
              <div className="mt-4 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
                This reset link has expired or has already been used.
              </div>
              <Link href="/forgot-password" className="inline-block font-semibold text-electric hover:underline">
                Send me a new link
              </Link>
            </div>
          )}

          {/* The link worked: pick the new password. */}
          {stage === 'form' && (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {error && (
                <div className="p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-navy mb-2">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  placeholder="••••••••"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-navy mb-2">
                  Confirm new password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  placeholder="••••••••"
                  disabled={isSubmitting}
                />
              </div>

              <BrutalButton type="submit" variant="primary" className="mt-6 w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save new password'}
              </BrutalButton>
            </form>
          )}

          {/* Saved. */}
          {stage === 'done' && (
            <div className="mt-4 p-4 rounded-lg border-[3px] border-ink bg-cream font-semibold text-navy text-sm">
              Password updated! Taking you to your dashboard…
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
