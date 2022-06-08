import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles/styles";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState("Nee");
  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable onPress={() => alert("Jouw keuze: " + item.value)}>
            <Text style={styles.option}> {item.value}</Text>
          </Pressable>
        );
      })}
      <Text> U heeft gekozen: {userOption}</Text>
      <Text></Text>
    </View>
  );
}
