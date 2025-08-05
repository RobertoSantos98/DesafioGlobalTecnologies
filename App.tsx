import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation/StackNavigation';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/Pages/SplashScreen';

export default function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula um carregamento de 3 segundos
  },[])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        {loading? <SplashScreen /> : <Navigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// SplashScreen básica criada apenas para simular um carregamento de asyncStorage de algum dado necessário para abertura do app ou um login com chave token salva em cache.
