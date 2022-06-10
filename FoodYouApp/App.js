import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import {Link} from 'react-router-dom'



export default function App() {
  return (
    <Link to ='https://foodyoucamera.netlify.app/' >
      <Button
        title="Learn More"
      />
    </Link>
    
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
