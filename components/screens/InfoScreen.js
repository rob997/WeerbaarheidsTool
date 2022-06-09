import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../styles/styles.js";

export default function InfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.titleview}>
        <Text
          onPress={() => navigation.navigate("E-mail")}
          style={styles.title}
        >
          Info Scherm
        </Text>
      </View>

      <View style={styles.infoviewcontainer}>
        <View style={styles.infoview}>
          <Text>Tip 1:</Text>
        </View>

        <View style={styles.infoview}>
          <Text>Tip 2:</Text>
        </View>

        <View style={styles.infoview}>
          <Text>Tip 3:</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
