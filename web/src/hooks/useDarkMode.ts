import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  function setMode(mode: string) {
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
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setDocumentElementMode(localTheme);
      setTheme(localTheme);
    } else {
      setDocumentElementMode('light');
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return { theme, toggleTheme, componentMounted };
};
