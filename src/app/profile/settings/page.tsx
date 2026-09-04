'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

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
  const initRef = useRef(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
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

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[var(--color-navy)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  // Get avatar initial
  const avatarInitial = (username || 'U').charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[var(--color-navy)] px-4 py-10">
      <div className="mx-auto max-w-2xl">
        {/* Back Link */}
        <Link href="/dashboard" className="mb-8 inline-block text-sm font-semibold text-[var(--color-yellow)] hover:underline">
          ← Back to Dashboard
        </Link>

        {/* Settings Card */}
        <div className="rounded-xl border-4 border-black bg-white p-8 shadow-[6px_6px_0_0_#000]">
          <h1 className="text-3xl font-extrabold text-[var(--color-navy)] mb-2">Profile Settings</h1>
          <p className="text-sm text-gray-600 mb-8">Customize your profile and account information</p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded text-green-700 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            {/* Profile Picture Section */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-4">
                Profile Picture
              </label>
              <div className="flex items-center gap-6">
                {/* Avatar Preview */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-electric-blue)] text-white font-bold text-3xl border-2 border-black">
                  {profileImageUrl ? (
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="h-full w-full rounded-full object-cover"
                    />
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
                    className="block w-full text-sm text-gray-600 border-2 border-black rounded px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    {isUploadingImage ? 'Uploading...' : 'PNG, JPG, GIF, WebP up to 5MB'}
                  </p>
                </div>
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.slice(0, 25))}
                maxLength={25}
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                placeholder="Your username"
                disabled={isSaving}
              />
              <p className="text-xs text-gray-600 mt-2">Max 25 characters. Shown in navbar and dashboard greeting</p>
            </div>

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                placeholder="Your first name"
                disabled={isSaving}
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-blue)]"
                placeholder="Your last name"
                disabled={isSaving}
              />
            </div>

            {/* Email (Read-only) */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Email
              </label>
              <input
                type="email"
                value={user.email || ''}
                disabled
                className="w-full px-4 py-2 border-2 border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed"
              />
              <p className="text-xs text-gray-600 mt-2">Your email cannot be changed here. Contact support if needed.</p>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              disabled={isSaving}
              className="w-full mt-8 rounded-lg border-4 border-black bg-[var(--color-electric-blue)] px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Deactivate Account Button */}
        <button
          onClick={() => setShowDeactivateModal(true)}
          className="w-full mt-6 rounded-lg border-4 border-red-600 bg-red-600 px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_rgba(220,38,38,0.6)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          Deactivate Account
        </button>
      </div>

      {/* Deactivate Account Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl border-4 border-black bg-white p-8 shadow-[8px_8px_0_0_#000] max-w-md w-full">
            <h2 className="text-2xl font-extrabold text-red-600 mb-4">Deactivate Account</h2>

            <div className="mb-6 space-y-3 text-sm text-[var(--color-navy)]">
              <p className="font-semibold">⚠️ This action is irreversible!</p>
              <p>Deactivating your account will:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Delete all your profile data</li>
                <li>Delete all your saved progress</li>
                <li>Delete all your attempt history</li>
                <li>Remove your account permanently</li>
              </ul>
              <p className="font-semibold text-red-600 mt-4">This cannot be undone.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 rounded text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="deactivatePassword" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
                Enter your password to confirm
              </label>
              <input
                id="deactivatePassword"
                type="password"
                value={deactivatePassword}
                onChange={(e) => setDeactivatePassword(e.target.value)}
                disabled={isDeactivating}
                className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-red-500"
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
                <span className="text-sm text-[var(--color-navy)]">
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
                className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-2 font-semibold text-[var(--color-navy)] hover:bg-gray-100 transition disabled:opacity-50"
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
