import * as React from 'react';
import {View} from 'react-native';
import { Input } from "@rneui/base";
import InputApellido from '../components/InputApellido';
import InputNombre from '../components/InputNombre';
import BotonEnviar from '../components/BotonEnviar';
import CheckBoxes from '../components/CheckBoxes';
import FotoUser from '../components/Avatar';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#41AC92'}}>
            <View style={{alignItems: 'center', justifyContent:'center', width:'75%', backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
                <FotoUser/>
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    placeholder="Name"
                    placeholderTextColor="black"
                />
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    placeholder="Last Name"
                    placeholderTextColor="black"
                />
                <BotonEnviar/>
            </View>
        </View>
    )
}

//USAR MAP PARA RECORRER LA CANTIDAD DE CHECKBOXES