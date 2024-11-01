/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {ThemeProvider} from './src/contexts/ThemeContext';
import {name as appName} from './app.json';

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => Root);
