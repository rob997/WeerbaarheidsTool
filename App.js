// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainContainer";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Weerbaarheidstool: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(StackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
