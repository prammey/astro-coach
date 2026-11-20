'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

interface BookmarkButtonProps {
  questionId: string;
  isBookmarked: boolean;
  onBookmarkChange: (isBookmarked: boolean) => void;
  className?: string;
}

// A star that saves or un-saves a question.
//
// This is a "controlled" button: the parent owns whether the question is
// bookmarked and passes it in as `isBookmarked`. That way, when the parent
// finishes loading the student's saved questions, the star updates too.
// The button reports every change back through `onBookmarkChange`.
export default function BookmarkButton({
  questionId,
  isBookmarked,
  onBookmarkChange,
  className = '',
}: BookmarkButtonProps) {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Saves or removes the bookmark on the server. The star flips straight
  // away (so it feels instant) and flips back if the server says no.
  const handleBookmarkClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      // Send signed-out visitors to log in, then bring them back here.
      router.push(`/login?next=${encodeURIComponent(pathname ?? '/training')}`);
      return;
    }

    const wasBookmarked = isBookmarked;
    setIsLoading(true);
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;

      if (!token) {
        console.error('No auth token available');
        return;
      }

      // Optimistic update: show the new state before the server replies.
      onBookmarkChange(!wasBookmarked);

      const action = wasBookmarked ? 'remove' : 'add';
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ questionId, action }),
      });

      if (!response.ok) {
        // The save failed, so put the star back how it was.
        console.error('Failed to update bookmark');
        onBookmarkChange(wasBookmarked);
      }
    } catch (error) {
      // Network error: also put the star back how it was.
      console.error('Error updating bookmark:', error);
      onBookmarkChange(wasBookmarked);
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
          className="w-5 h-5 text-yellow"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ) : (
        // Outline bookmark (star)
        <svg
          className="w-5 h-5 text-navy/40 hover:text-yellow"
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
