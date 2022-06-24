import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cameraIcon from '../assets/cameraIcon.png'

const BotonCamara = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonCamara}
            onPress={() => Linking.openURL('https://foodyoucamera.netlify.app/')}
        >
            <Image style={styles.imgCamera}source={cameraIcon}></Image>

            
        
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
        borderRadius: 70,
        marginTop:'150%',
        width: '47%',
        height:'10%',
        left: '25%',
        alignItems:'center',
        justifyContent:'center'
    },

});