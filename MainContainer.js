import * as React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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

// Navigator
const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();


// App Launched before or not
const HAS_LAUNCHED = 'hasLaunched';


// Tests for saving and reading data ASYNCSTORAGE
const saveData = async (a) => {
    try {
      await AsyncStorage.setItem(HAS_LAUNCHED, a)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage\n\n' + e)
    }
  }
   
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(HAS_LAUNCHED);
      alert('Read value: ' + value);
    } catch (e) {
      alert('Failed to fetch the input from storage\n\n' + e);
    }
  };
  
  const removeData = async () => {
    try {
      const value = await AsyncStorage.removeItem(HAS_LAUNCHED);
      alert('Successfully removed data');
    } catch (e) {
      alert('Failed to remove the input from storage\n\n' + e);
    }
  };
  
  
  const checkIfFirstLaunch = async () => {
    try {
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
        // If app not launched before
        if (hasLaunched === null) {
            AsyncStorage.setItem(HAS_LAUNCHED, 'true');
            return true;
        }
        return false;
    }   catch (error) {
            return false;
    }
  }


{/*
const WelcomePage = () => {
    // Stack Navigator for first page
    return(
        <Stack.Navigator initialRouteName={welcomeName}>
            <Stack.Screen
                name={welcomeName}
                options={{headerShown: false}}
            />
        </Stack.Navigator>

    )
}
*/}

function WelcomeScreen(){
    return(
        <Tab.Screen name="Home" component={Welcome} />
    )
}

function WelcomeStackScreen(){
    return(
        /*<Tab.Screen
                name={welcomeName}
                component={Welcome}
                options={{
                tabBarLabel: 'Welkom',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="mail-outline" color={color} size={size} />
                ),
                }}
            />*/
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Welcome} />
            </Stack.Navigator>
            
    )
}

function emailScreen(){
    return(
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
    )
}

function passwordScreen(){
    return(
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
    )
}

function infoScreen(){
    return(
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
    )
}

function renderFirstTime(){
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
                {WelcomeScreen()}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function renderApp(){
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
                {emailScreen()}
                {passwordScreen()}
                {infoScreen()}

            </Tab.Navigator>
        </NavigationContainer>
}

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

            
            {checkIfFirstLaunch() ? (
                <>
                    {WelcomeScreen()}
                </>
            ) : (
                <>
                    {emailScreen()}
                    {passwordScreen()}
                    {infoScreen()}
                </>
            )}

            </Tab.Navigator>
        </NavigationContainer>
  );
}