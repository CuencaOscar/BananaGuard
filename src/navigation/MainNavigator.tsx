import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ImageSelectionScreen from '../screens/ImageSelectionScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const {theme} = useTheme();

  const getTabBarIcon = (routeName: string, color: string, size: number) => {
    let iconName: string;

    switch (routeName) {
      case 'Home':
        iconName = 'home';
        break;
      case 'ImageSelection':
        iconName = 'camera';
        break;
      default:
        iconName = 'question-circle';
    }

    return <Icon name={iconName} size={size} color={color} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => getTabBarIcon(route.name, color, 20),
        tabBarActiveTintColor: theme.colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: theme.colors.tabBarInactiveTintColor,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#41aca6",
        },
        tabBarLabelStyle: {
          backgroundColor: "#41aca6",
        }
      })}>
      <Tab.Screen name="Home">
        {() => (
          <HomeScreen
            onClassifyImage={() => {}}
            onViewDiseases={() => {}}
            onViewHistory={() => {}}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="ImageSelection"
        component={ImageSelectionScreen}
        options={{title: 'Select Image'}}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
