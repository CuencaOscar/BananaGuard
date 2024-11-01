import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {ThemeProvider} from './src/contexts/ThemeContext';
import {AccessProvider} from './src/contexts/AccessContext';
import {name as appName} from './app.json';

const Root = () => (
  <ThemeProvider>
    <AccessProvider>
      <App />
    </AccessProvider>
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Root);
