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

const lightTheme: DefaultTheme = {
  colors: {
    background: '#FFF8E1',
    text: '#333333',
    primary: '#4CAF50',
    secondary: '#FFC107',
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: 'gray',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    background: ' #0a1c22 ',
    text: '#FFFFFF',
    primary: '#269b86 ',
    secondary: '#FFD54F',
    tabBarActiveTintColor: '#000',
    tabBarInactiveTintColor: 'white',
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // const theme = isDarkMode ? darkTheme : lightTheme;
  const theme = darkTheme ? darkTheme : lightTheme;

  const value = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
