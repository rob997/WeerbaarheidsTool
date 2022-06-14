import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import EmailHandler from "../scripts/EmailHandler.js";
import styles from "../styles/styles.js";

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [proceed, setProceed] = useState(false);

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
