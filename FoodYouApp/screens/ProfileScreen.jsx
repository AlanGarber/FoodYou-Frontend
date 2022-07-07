import * as React from 'react';
import {View} from 'react-native';
import InputApellido from '../components/InputApellido';
import InputNombre from '../components/InputNombre';
import BotonEnviar from '../components/BotonEnviar';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
               <InputNombre/>
               <InputApellido/>
               <BotonEnviar/>
        </View>
    )
}