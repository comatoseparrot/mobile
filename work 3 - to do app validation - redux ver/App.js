import React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';

import { store } from './redux/store';


export default function App() {
  return (
    <Provider store = {store}>
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
    </Provider>
  );
}
