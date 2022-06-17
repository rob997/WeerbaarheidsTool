// App.js
import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { UserContextProvider } from "./components/components/UserContext";

import HomeScreen from "./components/screens/HomeScreen";
import MainScreen from "./components/screens/MainContainer";

export default function App() {
  const [id, setid] = useState(1);
  const [sharesinfo, setsharesinfo] = useState("Nee");

  const toggleSharesInfo = (value) => {
    console.log("runt goed " + value);
    //sharesInfo === "Nee" ? setsharesInfo("Ja") : setsharesInfo("Nee");
    //return sharesInfo;
  };

  const userData = {
    data: [
      { id: 1, value: id },
      { id: 2, value: sharesinfo },
    ],
    functions: {
      setSharesInfo: (value) => {
        return setsharesinfo(value);
      },
      setId: (value) => {
        return setid(value);
      },
    },
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
