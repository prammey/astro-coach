'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface TrainingModeContextType {
  queue: string[];
  currentIndex: number;
  isInTrainingMode: boolean;
  startTrainingMode: (questionIds: string[]) => void;
  nextQuestion: () => boolean;
  previousQuestion: () => boolean;
  skipQuestion: () => boolean;
  exitTrainingMode: () => void;
  getCurrentQuestionId: () => string | null;
  getProgress: () => { current: number; total: number };
}

const TrainingModeContext = createContext<TrainingModeContextType | undefined>(undefined);

export function TrainingModeProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInTrainingMode, setIsInTrainingMode] = useState(false);

  const startTrainingMode = useCallback((questionIds: string[]) => {
    // Shuffle the questions
    const shuffled = [...questionIds].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setCurrentIndex(0);
    setIsInTrainingMode(true);
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentIndex < queue.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return true;
    }
    return false;
  }, [currentIndex, queue.length]);

  const previousQuestion = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      return true;
    }
    return false;
  }, [currentIndex]);

  const skipQuestion = useCallback(() => {
    return nextQuestion();
  }, [nextQuestion]);

  const exitTrainingMode = useCallback(() => {
    setQueue([]);
    setCurrentIndex(0);
    setIsInTrainingMode(false);
  }, []);

  const getCurrentQuestionId = useCallback(() => {
    if (queue.length === 0 || currentIndex >= queue.length) return null;
    return queue[currentIndex];
  }, [queue, currentIndex]);

  const getProgress = useCallback(() => {
    return {
      current: currentIndex + 1,
      total: queue.length,
    };
  }, [currentIndex, queue.length]);

  const value: TrainingModeContextType = {
    queue,
    currentIndex,
    isInTrainingMode,
    startTrainingMode,
    nextQuestion,
    previousQuestion,
    skipQuestion,
    exitTrainingMode,
    getCurrentQuestionId,
    getProgress,
  };

  return (
    <TrainingModeContext.Provider value={value}>
      {children}
    </TrainingModeContext.Provider>
  );
}

export function useTrainingMode() {
  const context = useContext(TrainingModeContext);
  if (context === undefined) {
    throw new Error('useTrainingMode must be used within a TrainingModeProvider');
  }
  return context;
}
