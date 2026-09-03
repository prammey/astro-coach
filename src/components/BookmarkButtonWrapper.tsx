'use client';

import { useState } from 'react';
import BookmarkButton from './BookmarkButton';

interface BookmarkButtonWrapperProps {
  questionId: string;
  initiallyBookmarked?: boolean;
}

export default function BookmarkButtonWrapper({
  questionId,
  initiallyBookmarked = false,
}: BookmarkButtonWrapperProps) {
  const [isBookmarked, setIsBookmarked] = useState(initiallyBookmarked);

  return (
    <BookmarkButton
      questionId={questionId}
      isBookmarked={isBookmarked}
      onBookmarkChange={setIsBookmarked}
      className="p-2"
    />
  );
}
