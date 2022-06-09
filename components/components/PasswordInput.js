/* import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import styles from "../styles/styles";

import RNPasswordStrengthMeter from "react-native-password-strength-meter";

export default class PasswordInput extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  };
  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter onChangeText={this.onChange} meterType="bar" />
      </View>
    );
  }
}
*/
