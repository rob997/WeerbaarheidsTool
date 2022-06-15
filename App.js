// App.js
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { UserContextProvider } from "./components/components/thingsContext";

import HomeScreen from "./components/screens/HomeScreen";
import MainScreen from "./components/screens/MainContainer";

export default function App() {
  // pretend we are fetching these 'things'
  const things = [
    { id: 1, name: "thing 1", length: 5 },
    { id: 2, name: "thing 2", length: 2 },
    { id: 3, name: "thing 3", length: 6 },
    { id: 4, name: "thing 4", length: 10 },
    { id: 5, name: "thing 5", length: 1 },
  ];

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

  return (
    <UserContextProvider value={things}>
      <AppContainer />
    </UserContextProvider>
  );
}
