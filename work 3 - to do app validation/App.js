import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
