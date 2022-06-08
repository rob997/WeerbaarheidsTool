import React, { Component, useState } from "react";
import { Button, View, Text, TextInput, SafeAreaView } from "react-native";
import RadioButton from "./RadioButton";
import styles from "./styles/styles";

export default class HomeScreen extends Component {
  constructor() {
    super();
  }
  render() {
    const data = [
      { id: 1, value: "Nee" },
      { id: 2, value: "Ja" },
    ];
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
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                {" "}
                {"\n\n"}Maak hier je keuze:{" "}
              </Text>
              <RadioButton data={data} />
            </View>
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
