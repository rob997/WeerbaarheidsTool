// Homescreen.js
import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  RadioButton,
  SafeAreaView,
} from "react-native";
import styles from "./styles/styles";

const radio = () => {
  const [checked, setChecked] = React.useState("first");
  return (
    <View>
      <RadioButton
        value="first"
        status={checked === "first" ? "checked" : "unchecked"}
        onPress={() => setChecked("first")}
      />
      <RadioButton
        value="second"
        status={checked === "second" ? "checked" : "unchecked"}
        onPress={() => setChecked("second")}
      />
    </View>
  );
};

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainview}>
        <View style={{ marginTop: "20%", marginBottom: "50%" }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 20 }}>
              Welkom! Bedankt voor uw deelname.
            </Text>
          </View>

          <View style={styles.inputview}>
            <Text>
              Mag uw data anoniem gebruikt worden voor statistische doeleinden?
              {"\n"}
              {"\n"}
              N.B.{"\n"}
              Er worden geen wachtwoorden gedeeld.
            </Text>
            <Button
              title="Verder"
              onPress={() =>
                this.props.navigation.navigate("Weerbaarheidstool")
              }
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
