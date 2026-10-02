'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';
import LoadingStar from '@/components/ui/LoadingStar';

export default function ProfileSettingsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [deactivatePassword, setDeactivatePassword] = useState('');
  const [deactivateConfirmed, setDeactivateConfirmed] = useState(false);
  const [isDeactivating, setIsDeactivating] = useState(false);
  // "Change password": idle → sending → sent (a reset link was emailed).
  const [passwordEmailState, setPasswordEmailState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const initRef = useRef(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?next=/profile/settings');
    }
  }, [user, loading, router]);

  // Initialize form values from user metadata (once)
  useEffect(() => {
    if (user && !initRef.current) {
      initRef.current = true;
      // Google's own metadata keys are read as a fallback, so the form is
      // still filled in for anyone who signed in with Google before the
      // callback started translating them into our own fields.
      const meta = user.user_metadata ?? {};
      const fname = meta.first_name || meta.given_name || '';
      const lname = meta.last_name || meta.family_name || '';
      const uname = meta.username || fname || '';
      const profileImg = meta.profile_image_url || meta.avatar_url || meta.picture || '';

      setFirstName(fname);
      setLastName(lname);
      setUsername(uname);
      setProfileImageUrl(profileImg);
    }
  }, [user]);

  const handleProfileImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB max)
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSizeBytes) {
      setError(`File too large. Max 5MB (you uploaded ${(file.size / 1024 / 1024).toFixed(2)}MB)`);
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    setIsUploadingImage(true);
    setError('');

    try {
      // Upload to Supabase Storage in profiles bucket
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('profiles')
        .upload(`profile-pictures/${fileName}`, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL for the uploaded image
      const { data: urlData } = supabase.storage
        .from('profiles')
        .getPublicUrl(`profile-pictures/${fileName}`);

      setProfileImageUrl(urlData.publicUrl);
      setSuccess('Profile picture updated successfully');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSaving(true);

    if (!username.trim()) {
      setError('Username cannot be empty');
      setIsSaving(false);
      return;
    }

    try {
      // Update user metadata with new username and profile image
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`.trim(),
          username: username.trim(),
          profile_image_url: profileImageUrl,
        },
      });

      if (updateError) {
        throw updateError;
      }

      setSuccess('Profile updated successfully!');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeactivateAccount = async () => {
    if (!user) {
      setError('User not found');
      return;
    }

    if (!deactivatePassword.trim()) {
      setError('Please enter your password');
      return;
    }

    if (!deactivateConfirmed) {
      setError('Please agree to account deactivation');
      return;
    }

    setIsDeactivating(true);
    setError('');

    try {
      // Verify password by attempting to sign in
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: user.email || '',
        password: deactivatePassword,
      });

      if (authError) {
        throw new Error('Password is incorrect');
      }

      // The session lives in localStorage, not cookies, so the token has to
      // be sent explicitly — same as every other API call in the app.
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        throw new Error('Your session has expired. Please log in again.');
      }

      // Delete the user account via API endpoint
      const response = await fetch('/api/auth/deactivate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (!response.ok) {
        // Surface the server's actual reason — a generic message here hid a
        // real configuration failure and made it look like a user error.
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Failed to deactivate account');
      }

      // Drop the stored session too, or the browser keeps a token for an
      // account that no longer exists.
      await supabase.auth.signOut();

      // Redirect to home page after successful deletion
      window.location.href = '/';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to deactivate account');
    } finally {
      setIsDeactivating(false);
    }
  };

  // Emails the student a link to /reset-password, where they choose a new
  // password. Same flow as "Forgot password?", so it also works for
  // accounts that signed up with Google and never had a password.
  const sendPasswordEmail = async () => {
    if (!user?.email) return;
    setError('');
    setPasswordEmailState('sending');

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (resetError) {
      console.error('Password email failed:', resetError);
      setError(
        resetError.status === 429
          ? 'Too many requests — please wait a minute and try again.'
          : 'Could not send the password email. Please try again.',
      );
      setPasswordEmailState('idle');
      return;
    }

    setPasswordEmailState('sent');
  };

  if (loading || !user) {
    return (
      <div className="starfield-dark min-h-screen bg-navy flex items-center justify-center">
        <LoadingStar tone="light" />
      </div>
    );
  }

  // Get avatar initial
  const avatarInitial = (username || 'U').charAt(0).toUpperCase();

  return (
    <div className="starfield-dark min-h-screen bg-navy px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Back Link */}
        <Link href="/dashboard" className="mb-8 inline-block text-sm font-semibold text-yellow hover:underline">
          ← Back to Dashboard
        </Link>

        {/* Settings Card */}
        <div className="rounded-xl border-[3px] border-ink bg-white p-8 shadow-brutal">
          <h1 className="text-3xl font-extrabold text-navy mb-2">Profile Settings</h1>
          <p className="text-sm text-navy/70 mb-8">Customize your profile and account information</p>

          {error && (
            <div className="mb-6 p-4 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-lg border-[3px] border-success bg-white font-semibold text-success text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            {/* Profile Picture Section */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-4">
                Profile Picture
              </label>
              <div className="flex items-center gap-6">
                {/* Avatar Preview */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-electric text-white font-bold text-3xl border-2 border-ink">
                  {profileImageUrl ? (
                    <>
                      {/* A user-supplied photo from any host, so next/image's allow-list does not apply. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={profileImageUrl}
                        alt="Profile"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </>
                  ) : (
                    avatarInitial
                  )}
                </div>
                {/* Upload Input */}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImageUpload}
                    disabled={isSaving || isUploadingImage}
                    className="block w-full text-sm text-navy/70 border-2 border-ink rounded px-3 py-2 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <p className="text-xs text-navy/70 mt-2">
                    {isUploadingImage ? 'Uploading...' : 'PNG, JPG, GIF, WebP up to 5MB'}
                  </p>
                </div>
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-navy mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.slice(0, 25))}
                maxLength={25}
                className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                placeholder="Your username"
                disabled={isSaving}
              />
              <p className="text-xs text-navy/70 mt-2">Max 25 characters. Shown in navbar and dashboard greeting</p>
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                placeholder="Your first name"
                disabled={isSaving}
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-[3px] border-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
                placeholder="Your last name"
                disabled={isSaving}
              />
            </div>

            {/* Email (Read-only) */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Email
              </label>
              <input
                type="email"
                value={user.email || ''}
                disabled
                className="w-full px-4 py-2 border-2 border-gray-300 rounded bg-navy/5 text-navy/70 cursor-not-allowed"
              />
              <p className="text-xs text-navy/70 mt-2">Your email cannot be changed here. Contact support if needed.</p>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              disabled={isSaving}
              className="w-full mt-8 rounded-lg border-[3px] border-ink bg-electric px-6 py-3 font-bold text-white shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Password: emailed reset link */}
        <div className="mt-6 rounded-xl border-[3px] border-ink bg-white p-6 shadow-brutal">
          <h2 className="text-lg font-extrabold text-navy">Password</h2>
          {passwordEmailState === 'sent' ? (
            <p className="mt-2 text-sm font-semibold text-success">
              Check {user.email} — we sent a link to choose a new password.
            </p>
          ) : (
            <>
              <p className="mt-1 text-sm text-navy/70">
                We&apos;ll email you a link to choose a new password.
              </p>
              <button
                type="button"
                onClick={sendPasswordEmail}
                disabled={passwordEmailState === 'sending'}
                className="mt-4 rounded-lg border-[3px] border-ink bg-white px-4 py-2 text-sm font-bold text-navy shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-60"
              >
                {passwordEmailState === 'sending' ? 'Sending…' : 'Email me a reset link'}
              </button>
            </>
          )}
        </div>

        {/* Danger zone: kept small and separate so it is never hit by accident */}
        <div className="mt-6 rounded-xl border-[3px] border-danger bg-white p-6">
          <h2 className="text-lg font-extrabold text-danger">Danger zone</h2>
          <p className="mt-1 text-sm text-navy/70">
            Permanently delete your account and everything saved in it. Want to stop paying
            but keep your progress? Cancel Pro from your dashboard instead.
          </p>
          <button
            type="button"
            onClick={() => setShowDeactivateModal(true)}
            className="mt-4 rounded-lg border-[3px] border-ink bg-danger px-4 py-2 text-sm font-bold text-white shadow-brutal-sm transition-[translate,box-shadow] duration-200 ease-snappy hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Delete my account…
          </button>
        </div>
      </div>

      {/* Deactivate Account Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl border-[3px] border-ink bg-white p-8 shadow-brutal-lg max-w-md w-full">
            <h2 className="text-2xl font-extrabold text-danger mb-4">Deactivate Account</h2>

            <div className="mb-6 space-y-3 text-sm text-navy">
              <p className="font-semibold">⚠️ This action is irreversible!</p>
              <p>Deactivating your account will:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Delete all your profile data</li>
                <li>Delete all your saved progress</li>
                <li>Delete all your attempt history</li>
                <li>Delete your free-response answers and uploaded work</li>
                <li>
                  Cancel Astro Coach Pro immediately, with no refund for the rest
                  of the month
                </li>
                <li>Lose any unused grading credits you bought</li>
                <li>Remove your account permanently</li>
              </ul>
              <p className="font-semibold text-danger mt-4">This cannot be undone.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg border-[3px] border-danger bg-white font-semibold text-danger text-sm">
                {error}
              </div>
            )}

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="deactivatePassword" className="block text-sm font-semibold text-navy mb-2">
                Enter your password to confirm
              </label>
              <input
                id="deactivatePassword"
                type="password"
                value={deactivatePassword}
                onChange={(e) => setDeactivatePassword(e.target.value)}
                disabled={isDeactivating}
                className="w-full px-4 py-2 border-2 border-ink rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="••••••••"
              />
            </div>

            {/* Confirmation Checkbox */}
            <div className="mb-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={deactivateConfirmed}
                  onChange={(e) => setDeactivateConfirmed(e.target.checked)}
                  disabled={isDeactivating}
                  className="mt-1 w-4 h-4 cursor-pointer"
                />
                <span className="text-sm text-navy">
                  I understand this will permanently delete my account and all associated data. This cannot be undone.
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowDeactivateModal(false);
                  setDeactivatePassword('');
                  setDeactivateConfirmed(false);
                  setError('');
                }}
                disabled={isDeactivating}
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 font-semibold text-navy hover:bg-cream transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeactivateAccount}
                disabled={isDeactivating || !deactivatePassword.trim() || !deactivateConfirmed}
                className="flex-1 rounded-lg border-2 border-red-600 bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeactivating ? 'Deactivating...' : 'Deactivate'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
