'use client';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useEscapeKey } from '@/app/hooks/use-escape-key-hook';
import { NavButton } from './NavButton';
import { NavList } from './NavList';
import { RefObject } from 'react';

type NavbarProps = {
  isMobile: boolean;
  isActive: boolean;
  handleIsActiveFalse: () => void;
};

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export const Nav: React.FC<NavbarProps> = ({
  isMobile,
  isActive,
  handleIsActiveFalse,
}) => {
  const ref: RefObject<HTMLElement> = useClickOutside(handleIsActiveFalse);
  useEscapeKey(handleIsActiveFalse);
  useEffect(() => {
    const darkElements =
      document.querySelectorAll<HTMLElement>('.element-darken');
    darkElements.forEach((element) => {
      if (isActive) {
        element.style.cssText = '';
      } else {
        element.style.opacity = '1';
      }
    });
    return () => {
      darkElements.forEach((element) => {
        element.style.opacity = '1';
      });
    };
  }, [isActive]);

  const mobileNav = (
    <motion.nav
      ref={ref}
      initial={{ x: '100%' }}
      animate={{ x: isActive ? '0%' : '100%' }}
      className="bg-blue-500 
      fixed
      right-0
      top-0
      h-full
      w-[20rem]
      z-[1]
      flex flex-col justify-center
      "
    >
      <NavButton onClick={handleIsActiveFalse} />
      <NavList />
    </motion.nav>
  );
  const desktopNav = (
    <nav className="flex">
      <NavList />
    </nav>
  );

  return (
    <>
      {isMobile &&
        createPortal(
          mobileNav,
          document.getElementById('portal') as HTMLDivElement
        )}
      {!isMobile && desktopNav}
    </>
  );
};
