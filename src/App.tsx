import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import {useTheme} from './contexts/ThemeContext';

const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme.colors.background === '#121212';

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Text style={[styles.title, {color: theme.colors.text}]}>
          Welcome to BananaGuard!
        </Text>
        <Text style={[styles.subtitle, {color: theme.colors.text}]}>
          Your companion for banana leaf disease detection.
        </Text>
        <Button
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
          color={theme.colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default App;
