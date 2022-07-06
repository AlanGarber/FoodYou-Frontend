import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cameraIcon from '../assets/cameraIcon.png'
import IonIcon from 'react-native-vector-icons/Ionicons'

const BotonCamara = (props) => {

    const { onPress, text } = props
    //<Image style={styles.imgCamera}source={cameraIcon}></Image>
    //<IonIcon name="camera-outline" color="white"/>
    return (
    
        <TouchableOpacity
            onPress={() => Linking.openURL('https://foodyoucamera.netlify.app/')}>
            
        </TouchableOpacity>
    )
}

export default BotonCamara


const styles = StyleSheet.create({

    imgCamera: {
      width:'30%',
      height:'30%',
      alignItems:'center',
      justifyContent:'center'
    },

    BotonCamara: {
        backgroundColor: '#30713A',
        borderRadius: 90,
        width: '50%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
    },

});