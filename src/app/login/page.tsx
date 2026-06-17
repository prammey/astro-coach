'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to dashboard if already logged in
  if (!loading && user) {
    router.push('/dashboard');
    return null;
  }

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border-4 border-black bg-white p-8 shadow-[6px_6px_0_0_#000]">
          <h1 className="text-3xl font-extrabold text-[var(--color-navy)] mb-2">Log In</h1>
          <p className="text-sm text-gray-600 mb-6">Sign in to your Astro Coach account</p>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border-2 border-red-500 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
            >
              {isSubmitting ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold text-[var(--color-electric-blue)] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
