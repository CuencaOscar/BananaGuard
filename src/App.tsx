import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAccess} from './contexts/AccessContext';
import MainNavigator from './navigation/MainNavigator';
import WelcomeScreen from './screens/WelcomeScreen';

const App: React.FC = () => {
  const {isAccessed, setAccessed} = useAccess();

  return (
    <NavigationContainer>
      {!isAccessed ? (
        <WelcomeScreen onAccess={setAccessed} />
      ) : (
        <MainNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
