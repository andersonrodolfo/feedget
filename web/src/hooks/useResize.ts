import { useEffect, useState } from 'react';

function isDesktop() {
  return typeof window === 'undefined' ? true : window.innerWidth >= 768;
}

export function useIsDesktopSize() {
  const [isDesktopSize, setIsDesktopSize] = useState(isDesktop);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function autoResize() {
      setIsDesktopSize(isDesktop());
    }

    window.addEventListener('resize', autoResize);
    autoResize();
    return () => window.removeEventListener('resize', autoResize);
  }, []);

  return isDesktopSize;
}
