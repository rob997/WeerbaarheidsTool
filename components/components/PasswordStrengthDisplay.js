import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import styles from "../styles/styles";

import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";

export default class PasswordStrengthDisplay extends Component {
  state = {
    password: "",
  };

  onChange = (password) => this.setState({ password });

  render() {
    const { password } = this.state;
    return (
      <View style={styles.passwordinputwrapper}>
        <TextInput
          secureTextEntry={true}
          placeholder="Uw wachtwoord..."
          style={styles.passwordinput}
          onChangeText={this.onChange}
        />
        <BarPasswordStrengthDisplay width={220} password={password} />
      </View>
    );
  }
}
