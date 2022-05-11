import { useEffect, useState } from 'react';

import { DarkModeToggleSwitch } from '@/components/DarkModeToggleSwitch';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useIsDesktopSize } from '@/hooks/useResize';

import { HamburgerMenu } from '../HamburgerMenu';

export function Header() {
  const isDesktopSize = useIsDesktopSize();
  const { componentMounted, theme } = useDarkMode();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuItemStyle =
    'surface-secondary-hover w-16 h-4 rounded-lg shrink-0 max-md:w-full';

  function handleMenuClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  useEffect(() => {
    if (isDesktopSize) setIsMenuOpened(false);
  }, [isDesktopSize]);

  return (
    <header className="surface-secondary max-md:fixed max-md:top-0 max-md:w-full">
      <div className="max-w-7xl m-auto h-[72px] p-4 flex items-center">
        <HamburgerMenu isMenuOpened={isMenuOpened} handleMenuClick={handleMenuClick} />
        <div
          className={`md:w-full max-md:w-60 max-md:h-full max-md:shadow-md max-md:surface-secondary max-md:px-5 max-md:fixed max-md:top-0 max-md:left-0 max-md:pt-20 ${
            isMenuOpened
              ? 'max-md:translate-x-0 max-md:opacity-100 max-md:z-10'
              : 'max-md:-translate-x-8 max-md:opacity-0 max-md:z-0'
          }`}
        >
          <div
            className={`flex flex-1 items-center max-md:flex-col max-md:w-full max-md:items-baseline`}
          >
            <div className="surface-secondary-hover w-40 h-10 rounded-lg shrink-0 max-md:w-full" />
            <nav className="flex gap-4 items-center p-4 m-auto max-md:flex-col max-md:w-4/5 max-md:mt-4 max-md:px-0 max-md:m-0 max-md:gap-6">
              <span className={menuItemStyle} />
              <span className={menuItemStyle} />
              <span className={menuItemStyle} />
              <span className={menuItemStyle} />
            </nav>
          </div>
        </div>

        <div className="flex gap-4 items-center ml-auto">
          {componentMounted && <DarkModeToggleSwitch isChecked={theme === 'dark'} />}
          <div className="surface-secondary-hover w-8 h-8 rounded-lg shrink-0" />
          <div className="surface-secondary-hover w-12 h-12 rounded-full shrink-0" />
        </div>
      </div>
    </header>
  );
}
