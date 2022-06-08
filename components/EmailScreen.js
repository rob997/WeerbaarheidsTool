import React, { Component, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles/styles.js";

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.titleview}>
        <Text style={styles.title}>
          Hier kunt u testen of uw e-mailadres is getroffen door een hack op een
          database.
        </Text>
      </View>
      <View style={styles.inputview}>
        <Text>Vul hier uw email in:</Text>
        <View style={styles.inputwrapper}>
          <TextInput
            placeholder="email@domain.com"
            onChangeText={(text) => {
              setEmail({ text });
            }}
            style={styles.input}
          ></TextInput>
          <View>
            <Button
              title="Check"
              onPress={() => {
                console.warn(email);
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
