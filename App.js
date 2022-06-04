import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MainContainer from './navigation/MainContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Welcome from './navigation/screens/Welcome';


// App launched code
const HAS_LAUNCHED = 'hasLaunched';

function setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}

const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
    // If app not launched before
    if (hasLaunched === null) {
      setAppLaunched();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}


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
    alert(value);
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



// MAIN
export default function App() {


  //Uncomment
  //removeData();
  saveData('true')


  if (checkIfFirstLaunch()){
    return(<MainContainer/>)
  }
  else {
    return(<MainContainer/>)
  }

};

App();