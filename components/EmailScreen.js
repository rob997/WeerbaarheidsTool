import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles/styles.js";

export default class EmailScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <SafeAreaView style={styles.mainview}>
        <View style={styles.titleview}>
          <Text style={styles.title}>
            Hier kunt u testen of uw e-mailadres is getroffen door een hack op
            een database.
          </Text>
        </View>

        <View style={styles.inputview}>
          <Text>Vul hier uw email in:</Text>
          <View style={styles.inputwrapper}>
            <TextInput
              placeholder="email@domain.com"
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
              style={styles.input}
            ></TextInput>
            <View>
              <Button
                title="Check"
                onPress={() => {
                  this.submit();
                }}
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