import React, { Component, useState } from "react";
import { Button, View, Text, TextInput, SafeAreaView } from "react-native";
import RadioButton from "./RadioButton";
import styles from "./styles/styles";

export default function HomeScreen({ navigation }) {
  const data = [{ value: "Nee" }, { value: "Ja" }];
  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.homeview}>
        <View style={styles.hometitleview}>
          <Text style={{ fontSize: 20 }}>
            Welkom! Bedankt voor uw deelname.
          </Text>
        </View>

        <View style={styles.homeinputview}>
          <Text>
            Mogen uw resultaten gebruikt worden voor statistische doeleinden?{" "}
            {"\n"}
          </Text>
          <Text style={{ fontSize: 12 }}>
            N.B.{"\n"}
            Het delen van resultaten gebeurt uitsluitend anoniem. Er worden geen
            wachtwoorden of emailadressen opgeslagen.
          </Text>
          <View style={styles.container}>
            <Text style={styles.paragraph}> {"\n\n"}Maak hier uw keuze: </Text>
            <RadioButton data={data} />
          </View>
          <Text>{"\n"}</Text>
          <Button
            title="Verder"
            onPress={() => navigation.navigate("Weerbaarheidstool")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
