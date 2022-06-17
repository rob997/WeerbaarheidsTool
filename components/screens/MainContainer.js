// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import EmailScreen from "./EmailScreen";
import PasswordScreen from "./PasswordScreen";
import InfoScreen from "./InfoScreen";

const tabBarIconColor = "grey";
const tabBarIconSize = 20;

export default function MainScreen() {
  const TabNavigator = createBottomTabNavigator(
    {
      Email: {
        screen: EmailScreen,
        navigationOptions: {
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="mail-outline"
              color={tabBarIconColor}
              size={tabBarIconSize}
            />
          ),
        },
      },
      Wachtwoord: {
        screen: PasswordScreen,
        navigationOptions: {
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="key-outline"
              color={tabBarIconColor}
              size={tabBarIconSize}
            />
          ),
        },
      },
      Info: {
        screen: InfoScreen,
        navigationOptions: {
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              color={tabBarIconColor}
              size={tabBarIconSize}
            />
          ),
        },
      },
    },
    {
      initialRouteName: "Email",
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "grey",
      },
    }
  );

  const MainContainer = createAppContainer(TabNavigator);

  return <MainContainer />;
}
