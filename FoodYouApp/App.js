import * as React from 'react';
import Navigation from './Navigation/Navigation.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function App() {
  return <SafeAreaProvider>
    <Navigation/>
  </SafeAreaProvider>;
       
  
}


