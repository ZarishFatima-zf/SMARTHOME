// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoverScreen from '../screens/CoverScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingScreen';
import AIStatsScreen from '../screens/StatisticsScreen';
import NotificationScreen from '../screens/NotificationScreen';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Cover"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cover" component={CoverScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="AIStats" component={AIStatsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
