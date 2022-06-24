import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Linking} from 'react-native';
import {Link} from 'react-router-dom'



export default function App() {
  return (
    
      <Button
        title="Learn More"
        onPress={() => Linking.openURL('https://foodyoucamera.netlify.app/')}>
      </Button>
      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
