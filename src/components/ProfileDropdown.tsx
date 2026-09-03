'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function ProfileDropdown() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get username and profile image from user metadata
  const username = user?.user_metadata?.username || user?.user_metadata?.first_name || 'User';
  const profileImageUrl = user?.user_metadata?.profile_image_url;

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      await signOut();
      setIsOpen(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return null;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-lg border-2 border-[var(--color-yellow)] px-3 py-1 transition hover:bg-[var(--color-yellow)] hover:text-[var(--color-navy)]"
      >
        {/* Profile Avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-electric-blue)] text-white font-bold text-sm overflow-hidden">
          {profileImageUrl ? (
            <img
              src={profileImageUrl}
              alt={username}
              className="h-full w-full object-cover"
            />
          ) : (
            username.charAt(0).toUpperCase()
          )}
        </div>
        {/* Username */}
        <span className="text-sm font-semibold text-[var(--color-yellow)] hidden sm:inline">
          {username}
        </span>
        {/* Dropdown Arrow */}
        <svg
          className={`h-4 w-4 text-[var(--color-yellow)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border-2 border-black bg-white shadow-[6px_6px_0_0_#000] z-50">
          <div className="px-4 py-3 border-b-2 border-black">
            <p className="text-sm font-semibold text-[var(--color-navy)]">{username}</p>
            <p className="text-xs text-gray-600 truncate">{user.email}</p>
          </div>

          <ul className="divide-y-2 divide-black">
            <li>
              <Link
                href="/profile/settings"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-[var(--color-navy)] hover:bg-[var(--color-cream)] transition"
              >
                Profile Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 transition"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
