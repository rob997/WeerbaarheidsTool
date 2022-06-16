// App.js
import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { UserContextProvider } from "./components/components/UserContext";

import HomeScreen from "./components/screens/HomeScreen";
import MainScreen from "./components/screens/MainContainer";

export default function App() {
  const [id, setid] = useState(1);
  const [sharesInfo, setsharesInfo] = useState(111);

  const userData = [
    { id: 1, value: id },
    { id: 2, value: sharesInfo },
    { id: 3, value: "thing 3" },
    { id: 4, value: "thing 4" },
  ];

  const toggleSharesInfo = () => {
    sharesInfo === "Nee" ? setsharesInfo("Ja") : setsharesInfo("Nee");
    return sharesInfo;
  };

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
    <UserContextProvider value={userData}>
      <AppContainer />
    </UserContextProvider>
  );
}
