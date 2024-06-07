'use client';
import { useEffect, useState } from 'react';

export const useMobile = (breakpoint: string): [boolean] => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = window.matchMedia(`(max-width:${breakpoint}px)`);

      const handleIsMobile = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches);
      };

      setIsMobile(match.matches);

      match.addEventListener('change', handleIsMobile);

      return () => {
        match.removeEventListener('change', handleIsMobile);
      };
    }
  }, [breakpoint]);

  return [isMobile] as const;
};
