import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAccess} from './contexts/AccessContext';
import MainNavigator from './navigation/MainNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  const {isAccessed, setAccessed} = useAccess();

  return (
    <NavigationContainer>
      {!isAccessed ? (
        <>
          <StatusBar hidden={true} />
          <WelcomeScreen onAccess={setAccessed} />
        </>
      ) : (
        <>
          <StatusBar hidden={true} />
          <MainNavigator />
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
