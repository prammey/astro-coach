'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { ViewAsOptions } from './ViewAsSwitcher';

export default function ProfileDropdown() {
  const { user, signOut, canSwitchView } = useAuth();
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
        className="group flex items-center gap-2 rounded-lg border-2 border-yellow px-3 py-2 transition-colors duration-200 hover:bg-yellow hover:text-navy"
      >
        {/* Profile Avatar */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-electric text-white font-bold text-sm overflow-hidden flex-shrink-0">
          {profileImageUrl ? (
            <>
              {/* A user-supplied photo from any host, so next/image's allow-list does not apply. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImageUrl}
                alt={username}
                className="h-full w-full object-cover"
              />
            </>
          ) : (
            username.charAt(0).toUpperCase()
          )}
        </div>
        {/* Username */}
        <span className="text-base font-bold text-yellow group-hover:text-navy hidden sm:inline truncate max-w-[180px]">
          {username}
        </span>
        {/* Dropdown Arrow */}
        <svg
          className={`h-4 w-4 text-yellow group-hover:text-navy transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 min-w-full animate-pop-in rounded-lg border-2 border-ink bg-white shadow-brutal">
          <div className="px-4 py-3 border-b-2 border-ink">
            <p className="text-sm font-semibold text-navy">{username}</p>
            <p className="text-xs text-navy/70 truncate">{user.email}</p>
          </div>

          {/* Owner only: switch between Guest, Free and Pro views. */}
          {canSwitchView && (
            <div className="border-b-2 border-ink">
              <p className="px-4 pt-3 text-xs font-bold uppercase text-navy/60">View as (admin)</p>
              <ViewAsOptions />
            </div>
          )}

          <ul className="divide-y-2 divide-ink">
            <li>
              <Link
                href="/profile/settings"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-navy hover:bg-cream transition"
              >
                Profile Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm font-semibold text-danger hover:bg-danger/10 transition"
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
