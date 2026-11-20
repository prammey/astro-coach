'use client';

import { useEffect, useState } from 'react';
import BookmarkButton from './BookmarkButton';
import { useAuth } from '@/lib/auth-context';
import { supabase } from '@/lib/auth';

interface BookmarkButtonWrapperProps {
  questionId: string;
}

// The bookmark star on a single question's page.
//
// It owns the "is this saved?" state. When a student is signed in, it asks
// the server for their saved questions (the same request the Training list
// makes) so the star starts filled if this question is already bookmarked.
export default function BookmarkButtonWrapper({ questionId }: BookmarkButtonWrapperProps) {
  const { user } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load whether this question is bookmarked, once we know who is signed in.
  useEffect(() => {
    if (!user) return;

    // `active` goes false if the page changes before the answer arrives,
    // so an old answer never overwrites a newer one.
    let active = true;

    const fetchBookmarkState = async () => {
      try {
        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;
        if (!token) return;

        const response = await fetch('/api/bookmarks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) return;

        const data: { bookmarkedQuestionIds: string[] } = await response.json();
        if (active) setIsBookmarked(data.bookmarkedQuestionIds.includes(questionId));
      } catch (error) {
        // Not fatal: the star just starts empty.
        console.error('Error fetching bookmark state:', error);
      }
    };

    fetchBookmarkState();

    return () => {
      active = false;
    };
  }, [user, questionId]);

  return (
    <BookmarkButton
      questionId={questionId}
      isBookmarked={isBookmarked}
      onBookmarkChange={setIsBookmarked}
      className="p-2"
    />
  );
}
