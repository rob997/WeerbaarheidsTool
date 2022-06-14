import React, { useState, useImperativeHandle, forwardRef } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import styles from "../styles/styles";

import PasswordInputComponent, {
  BarPasswordStrengthDisplay,
} from "react-native-password-strength-meter";

const PasswordStrengthDisplay = (props, ref) => {
  useImperativeHandle(ref, () => ({
    getScore: () => {
      return score;
    },
  }));

  const [score, setScore] = useState("0");

  return (
    <View style={styles.passwordinputwrapper}>
      <PasswordInputComponent
        defaultPassword=""
        inputStyle={styles.passwordinput}
        meterType="text"
        onChangeText={(pw, score) => {
          setScore(score);
        }}
      ></PasswordInputComponent>
    </View>
  );
};

export default forwardRef(PasswordStrengthDisplay);
