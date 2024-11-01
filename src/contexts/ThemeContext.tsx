import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components/native';

// Define colors and styles for light theme
const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFF8E1',
    text: '#333333',
    primary: '#4CAF50',
    secondary: '#FFEB3B',
  },
};

// Define colors and styles for dark theme
const darkTheme: DefaultTheme = {
  colors: {
    background: '#121212',
    text: '#FFFFFF',
    primary: '#81C784',
    secondary: '#FFC107',
  },
};

// Define a type for theme context
type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

// Create a theme context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

// Custom hook for accessing theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between light and dark themes
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Memoize the context value
  const value = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
