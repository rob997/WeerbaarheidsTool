import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/styles";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => setUserOption(item.value)}
          >
            <Text style={styles.option}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
