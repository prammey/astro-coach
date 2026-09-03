'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

interface BookmarkButtonProps {
  questionId: string;
  isBookmarked: boolean;
  onBookmarkChange?: (isBookmarked: boolean) => void;
  className?: string;
}

export default function BookmarkButton({
  questionId,
  isBookmarked: initialIsBookmarked,
  onBookmarkChange,
  className = '',
}: BookmarkButtonProps) {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookmarkClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    setIsLoading(true);
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;

      if (!token) {
        console.error('No auth token available');
        return;
      }

      const action = isBookmarked ? 'remove' : 'add';
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ questionId, action }),
      });

      if (response.ok) {
        const newState = !isBookmarked;
        setIsBookmarked(newState);
        onBookmarkChange?.(newState);
      } else {
        console.error('Failed to update bookmark');
      }
    } catch (error) {
      console.error('Error updating bookmark:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleBookmarkClick}
      disabled={isLoading}
      className={`inline-flex items-center justify-center transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ? (
        // Filled bookmark (star)
        <svg
          className="w-5 h-5 text-[var(--color-yellow)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ) : (
        // Outline bookmark (star)
        <svg
          className="w-5 h-5 text-[var(--color-navy)]/40 hover:text-[var(--color-yellow)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
    </button>
  );
}
