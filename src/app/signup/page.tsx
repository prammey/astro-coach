'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import BrutalButton from '@/components/ui/BrutalButton';
import LoadingStar from '@/components/ui/LoadingStar';

export default function SignupPage() {
  const router = useRouter();
  const { signUp, user, loading } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

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
    setSuccess('');
    setIsSubmitting(true);

    // Validate first and last name
    if (!firstName.trim()) {
      setError('Please enter your first name');
      setIsSubmitting(false);
      return;
    }

    if (!lastName.trim()) {
      setError('Please enter your last name');
      setIsSubmitting(false);
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsSubmitting(false);
      return;
    }

    try {
      await signUp(email, password, firstName, lastName);
      setSuccess('Account created! Check your email to confirm.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
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
          <h1 className="text-3xl font-extrabold text-navy mb-2">Sign Up</h1>
          <p className="text-sm text-navy/70 mb-6">Create your Astro Coach account</p>

          {error && (
            <div className="mb-4 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 rounded-lg border-[3px] border-success bg-white font-semibold text-success text-sm">
              {success}
            </div>
          )}

          <GoogleSignInButton label="Sign up with Google" />

          <div className="my-6 flex items-center gap-3">
            <span className="h-0.5 flex-1 bg-navy/20" />
            <span className="text-xs font-bold uppercase tracking-wide text-navy/60">or</span>
            <span className="h-0.5 flex-1 bg-navy/20" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  placeholder="John"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                  placeholder="Doe"
                  disabled={isSubmitting}
                />
              </div>
            </div>

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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-navy mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>

            <BrutalButton type="submit" variant="primary" className="mt-6 w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Sign up'}
            </BrutalButton>
          </form>

          <p className="mt-6 text-center text-sm text-navy/70">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-electric hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
