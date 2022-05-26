import * as React from 'react';
import { View, Text } from 'react-native';

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import EmailCheck from './screens/EmailCheck.js';
import PasswordCheck from './screens/PasswordCheck.js';
import InfoScreen from './screens/InfoScreen.js';

// Screen names
const emailName = 'E-mail';
const pwName = 'Wachtwoord';
const infoName = 'Info';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={emailName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === emailName) {
                            iconName = focused ? 'mail' : 'mail-outline';
                        } else if (rn === pwName) {
                            iconName = focused ? 'key' : 'key-outline';
                        } else if (rn === infoName) {
                            iconName = focused ? 'information' : 'information-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10}
                    
                }}

            >

                <Tab.Screen name={emailName} component={EmailCheck}/>
                <Tab.Screen name={pwName} component={PasswordCheck}/>
                <Tab.Screen name={infoName} component={InfoScreen}/>



            </Tab.Navigator>

        </NavigationContainer>
    )
}