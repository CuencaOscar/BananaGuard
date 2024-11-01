import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ImageSelectionScreen from '../screens/ImageSelectionScreen';
import ImageConfirmationScreen from '../screens/ImageConfirmationScreen';
import ClassificationResultScreen from '../screens/ClassificationResultScreen';
import DiseaseListScreen from '../screens/DiseaseListScreen';
import DiseaseDetailScreen from '../screens/DiseaseDetailScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HistoryDetailScreen from '../screens/HistoryDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ImageSelection" component={ImageSelectionScreen} options={{ title: 'Select Image' }} />
      <Tab.Screen name="ImageConfirmation" component={ImageConfirmationScreen} options={{ title: 'Confirm Image' }} />
      <Tab.Screen name="ClassificationResult" component={ClassificationResultScreen} options={{ title: 'Result' }} />
      <Tab.Screen name="DiseaseList" component={DiseaseListScreen} options={{ title: 'Diseases' }} />
      <Tab.Screen name="DiseaseDetail" component={DiseaseDetailScreen} options={{ title: 'Disease Details' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'History' }} />
      <Tab.Screen name="HistoryDetail" component={HistoryDetailScreen} options={{ title: 'History Details' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
};

export default MainNavigator;