import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity, navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotonCamara from '../components/BotonCamara.jsx';

const Home =({navigation})=>{
  
  return (
    <View>
      <BotonCamara
        text="Open Camera"
        onPress={() => Linking.openURL('https://foodyoucamera.netlify.app/')}
      />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({

  image: {
    height:'100%',
    width: '100%',
    alignItems: 'baseline',
    
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});