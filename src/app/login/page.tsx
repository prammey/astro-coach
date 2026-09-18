'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import BrutalButton from '@/components/ui/BrutalButton';
import LoadingStar from '@/components/ui/LoadingStar';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to the dashboard if already logged in. This runs after render
  // (in an effect) because navigating during render is not allowed.
  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [loading, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await signIn(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || user) {
    return (
      <div className="starfield-dark flex min-h-screen items-center justify-center bg-navy">
        <LoadingStar tone="light" />
      </div>
    );
  }

  return (
    <div className="starfield-dark min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="animate-rise-in rounded-xl border-[3px] border-ink bg-white p-8 shadow-brutal-lg">
          <h1 className="text-3xl font-extrabold text-navy mb-2">Log In</h1>
          <p className="text-sm text-navy/70 mb-6">Sign in to your Astro Coach account</p>

          {error && (
            <div className="mb-4 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
              {error}
            </div>
          )}

          <GoogleSignInButton />

          <div className="my-6 flex items-center gap-3">
            <span className="h-0.5 flex-1 bg-navy/20" />
            <span className="text-xs font-bold uppercase tracking-wide text-navy/60">or</span>
            <span className="h-0.5 flex-1 bg-navy/20" />
          </div>

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

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-navy mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>

            <BrutalButton type="submit" variant="primary" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </BrutalButton>
          </form>

          <p className="mt-6 text-center text-sm text-navy/70">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-semibold text-electric hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
