import React, { Component } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import styles from "./styles/styles.js";

export default class PasswordScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainview}>
        <View style={styles.titleview}>
          <Text
            onPress={() => navigation.navigate("E-mail")}
            style={styles.title}
          >
            Wachtwoord Scherm
          </Text>
        </View>

        <View style={styles.inputview}>
          <Text>Vul hier een wachtwoord in:</Text>
          <View style={styles.inputwrapper}>
            <TextInput
              secureTextEntry={true}
              placeholder="******"
              style={styles.input}
            ></TextInput>
            <View>
              <Button
                title="Check"
                onPress={() => alert("Simple Button pressed")}
                color="green"
              />
            </View>
          </View>
        </View>

        <View style={styles.resultview}>
          <Text>Resultaten:</Text>
        </View>
      </SafeAreaView>
    );
  }
}
