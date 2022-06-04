import * as React from 'react';
import { View, Text } from 'react-native';

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Welcome from './screens/Welcome.js';
import EmailCheck from './screens/EmailCheck.js';
import PasswordCheck from './screens/PasswordCheck.js';
import InfoScreen from './screens/InfoScreen.js';


// Screen names
const welcomeName = 'Welcome'
const emailName = 'E-mail';
const pwName = 'Wachtwoord';
const infoName = 'Info';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return(

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={emailName}
                screenOptions={{
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "grey",
                    tabBarLabelStyle: {
                        paddingBottom: 10,
                        fontSize: 10
                },
                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ]         
                }}
            >

            {/*
            <Tab.Screen
                name={welcomeName}
                component={Welcome}
                options={{
                tabBarLabel: 'Welkom',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="mail-outline" color={color} size={size} />
                ),
                }}
            />
            */}

            <Tab.Screen
                name={emailName}
                component={EmailCheck}
                options={{
                tabBarLabel: 'E-mail',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="mail-outline" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name={pwName}
                component={PasswordCheck}
                options={{
                tabBarLabel: 'Wachtwoord',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="key-outline" color={color} size={size} />
                ),
                //tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name={infoName}
                component={InfoScreen}
                options={{
                tabBarLabel: 'Beveiligingstips',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle-outline" color={color} size={size} />
                ),
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
  );
}