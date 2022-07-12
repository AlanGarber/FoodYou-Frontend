import * as React from 'react';
import {View} from 'react-native';
import InputApellido from '../components/InputApellido';
import InputNombre from '../components/InputNombre';
import BotonEnviar from '../components/BotonEnviar';
import CheckBoxes from '../components/CheckBoxes';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                <InputNombre/>
                <InputApellido/>
                <CheckBoxes/>
                <BotonEnviar/>
        </View>
    )
}

//USAR MAP PARA RECORRER LA CANTIDAD DE CHECKBOXES