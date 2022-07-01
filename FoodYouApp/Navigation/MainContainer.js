import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './Screens/HomeScreen'
import HistoryScreen from './Screens/HistoryScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SearchScreen from './Screens/SearchScreen'
import BotonCamara from '../components/BotonCamara';

const homeName = 'Home';
const historyName = 'History';
const profileName = 'Profile';
const searchName = 'Search';
const CamaraName = 'Camara';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) =>({
                        tabBarIcon: ({focused, size}) => {
                            let iconName;
                            let rn= route.name;

                            if (rn === homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            }else if (rn === historyName){
                                iconName = focused ? 'timer' : 'timer-outline'
                            }else if (rn === profileName){
                                iconName = focused ? 'person' : 'person-outline'
                            }else if (rn === searchName){
                                iconName = focused ? 'search' : 'search-outline'
                            }else if (rn === searchName){
                                iconName = focused ? 'camera' : 'camera-outline'
                            }

                            return <Ionicons name={iconName} size={size} />
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#30713a',
                        inactiveTintColor: 'grey',
                        labelStyle: {fontSize:10},                     
                    }}

                    >

                    <Tab.Screen name={homeName} component={Home}/>
                    <Tab.Screen name={searchName} component={SearchScreen}/>
                    <Tab.Screen name={CamaraName} component={BotonCamara}/>
                    <Tab.Screen name={historyName} component={HistoryScreen}/>
                    <Tab.Screen name={profileName} component={ProfileScreen}/>

                </Tab.Navigator>
            </NavigationContainer>
        )
}