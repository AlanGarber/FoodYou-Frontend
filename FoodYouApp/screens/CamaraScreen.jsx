import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BotonCamara from '../components/BotonCamara.jsx'
import { Camera, CameraType } from 'expo-camera';
import {init,loop,predict} from '../utils/loadCamera.js';

export default function CamaraScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
        return (
            <View>
            <Camera type={type} style={{height:'90%'}}>
              <View>
                <TouchableOpacity
                  
                  onPress={() => {
                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                  }}>
                  <Text> Flip </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );

    const styles =StyleSheet.create({
        CameraView:{
            flex:1,
            height:'100%'
        }
    });
}