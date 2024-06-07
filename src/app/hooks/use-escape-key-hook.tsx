'use client';
import { useEffect } from 'react';
export const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [callback]);
};
