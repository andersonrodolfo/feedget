import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [componentMounted, setComponentMounted] = useState(false);

  function setMode(mode: Theme) {
    window.localStorage.setItem('theme', mode);
    setDocumentElementMode(mode);
    setTheme(mode);
  }

  function toggleTheme() {
    if (theme === 'light') setMode('dark');
    else setMode('light');
  }

  function setDocumentElementMode(mode: string) {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(mode);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme;
    if (!localTheme || (localTheme !== 'light' && localTheme !== 'dark')) {
      setDocumentElementMode('light');
      setMode('light');
    } else {
      setDocumentElementMode(localTheme);
      setTheme(localTheme);
    }
    setComponentMounted(true);
  }, []);

  return { theme, toggleTheme, componentMounted };
};
