'use client';
import { Nav } from '../nav/Nav';
import { HamburgerButton } from './HamburgerButton';
import { useActive } from '@/app/hooks/use-active-hook';
import { useMobile } from '@/app/hooks/use-mobile-hook';
import { useEffect } from 'react';
export const Header = () => {
  const { isActive, handleIsActiveFalse, handleIsActiveTrue } = useActive();
  const [isMobile] = useMobile('768');
  useEffect(() => {
    if (!isMobile) {
      handleIsActiveFalse();
    }
  }, [isMobile]);

  return (
    <header className="header element-darken">
      <section className=" header-wrapper flex items-center justify-between">
        <div>
          <span className="inter-bold text-2xl">Temp Logo.</span>
        </div>
        <Nav
          isMobile={isMobile}
          isActive={isActive}
          handleIsActiveFalse={handleIsActiveFalse}
        />
        <HamburgerButton onClick={handleIsActiveTrue} />
      </section>
    </header>
  );
};
