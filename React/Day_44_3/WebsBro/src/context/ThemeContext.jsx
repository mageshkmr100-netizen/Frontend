import { createContext, useState, useContext } from 'react';

/**
 * Theme Context for useContext Hook Example
 * 
 * How it works:
 * - createContext() creates a context object
 * - ThemeProvider wraps the app and provides theme state
 * - useTheme() hook allows any component to access theme without prop drilling
 * - Theme persists across all components that use the hook
 */

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    bg: isDark ? 'bg-gray-900' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-800',
    border: isDark ? 'border-gray-700' : 'border-gray-300',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context anywhere
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
