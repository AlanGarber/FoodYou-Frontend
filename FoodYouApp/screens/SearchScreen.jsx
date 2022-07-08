import * as React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native-web';
import Searchbar from '../components/SearchBar';

export default function SearchScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center'}}>
            <Searchbar/>
        </View>
    )
}