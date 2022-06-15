import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from "../styles/styles.js";

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [proceed, setProceed] = useState(false);

  function EmailHandler(email) {
    let reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(email)) {
      alert("Geldig emailadres!");
      return true;
    } else {
      alert("Ongeldig email address!");
      return false;
    }
  }

  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.titleview}>
        <Text style={styles.title}>
          Hier kunt u testen of uw e-mailadres is getroffen door een hack op een
          database.
        </Text>
      </View>
      <View style={styles.emailinputview}>
        <Text>Vul hier uw email in:</Text>
        <View style={styles.emailinputwrapper}>
          <TextInput
            type="email"
            placeholder="email@domain.com"
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.emailinput}
          ></TextInput>
          <View>
            <Button
              title="Check"
              onPress={() => {
                EmailHandler(email) ? setProceed(true) : setProceed(false);
              }}
              color="green"
            />
          </View>
        </View>
      </View>

      <View style={styles.resultview}>
        <Text>Resultaten:</Text>
        <View style={styles.resulttextview}>
          <Text>{proceed ? "Gelukt!" : "Mislukt!"}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
