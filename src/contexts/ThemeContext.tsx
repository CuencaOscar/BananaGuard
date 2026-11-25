import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from 'styled-components/native';

const lightTheme: DefaultTheme = {
  colors: {
    background: '#f6faf7',
    surface: '#ffffff',
    surfaceAlt: '#eef5f0',
    border: 'rgba(15, 40, 30, 0.08)',
    text: '#0f2a1f',
    muted: '#5f7a6e',
    primary: '#1f9d6b',
    primaryText: '#ffffff',
    secondary: '#e0a800',
    tabBarActiveTintColor: '#1f9d6b',
    tabBarInactiveTintColor: '#8aa398',
  },
};

/** Default theme: deep leaf green with banana-yellow accents. */
const darkTheme: DefaultTheme = {
  colors: {
    background: '#08140f',
    surface: '#102019',
    surfaceAlt: '#163026',
    border: 'rgba(255, 255, 255, 0.07)',
    text: '#eef6f1',
    muted: '#93ada1',
    primary: '#34c48b',
    primaryText: '#062016',
    secondary: '#ffd54f',
    tabBarActiveTintColor: '#34c48b',
    tabBarInactiveTintColor: '#6f8a7e',
  },
};

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = useCallback(
    () => setIsDarkMode(!isDarkMode),
    [isDarkMode],
  );

  const theme = isDarkMode ? darkTheme : lightTheme;

  const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
