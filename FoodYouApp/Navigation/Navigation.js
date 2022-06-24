import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home.jsx';

const Stack = createNativeStackNavigator();

const Navigation =()=>{
   
    return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }
        }>
            <Stack.Screen
                name='Home'
                component={ Home }
            />    
        </Stack.Navigator>
    </NavigationContainer>
    
    )}
    
    export default Navigation
    
    const style = StyleSheet.create({
        buttonContainer:{
            backgroundColor: 'green',
            marginBottom: 10,
            paddingHorizontal:20,
            paddingHorizontal:10
        },
        buttonText:{
        color:'white'
        }
    })