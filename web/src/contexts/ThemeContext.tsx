import React, { createContext, useContext } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as ThemeContextProps);

function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, toggleTheme, componentMounted } = useDarkMode();
  if (!componentMounted) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
