import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      surfaceAlt: string;
      border: string;
      text: string;
      muted: string;
      primary: string;
      primaryText: string;
      secondary: string;
      tabBarActiveTintColor: string;
      tabBarInactiveTintColor: string;
    };
  }
}
