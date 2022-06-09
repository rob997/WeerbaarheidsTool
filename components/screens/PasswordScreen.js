import React from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import PasswordStrengthDisplay from "../components/PasswordStrengthDisplay.js";
import styles from "../styles/styles.js";

export default function PasswordScreen({ navigation }) {
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
        <View style={styles.inputcontainer}>
          <PasswordStrengthDisplay></PasswordStrengthDisplay>
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
        <View></View>
      </View>
    </SafeAreaView>
  );
}
