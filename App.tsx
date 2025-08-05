import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation/StackNavigation';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
