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
          Op deze pagina vindt u extra informatie over veilig omgaan met uw
          gegevens.
        </Text>
      </View>

      <View style={styles.infoviewcontainer}>
        <View style={styles.infoview}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Tip 1: Omgaan met wachtwoorden
          </Text>
          <Text>
            Het komt voor dat mensen hun inloggegevens opschrijven en op hun
            werkplek houden. Dit is een erg groot veiligheidsrisico. Iedereen
            die er langsloopt kan het wachtwoord aflezen, inclusief mensen die
            niet bij u werkzaam zijn!
          </Text>
          <Text>
            {"\n"}
            Als u maar één wachtwoord wilt hoeven onthouden, maak dan gebruik
            van een passwordmanager.
          </Text>
        </View>

        <View style={styles.infoview}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Tip 2: Herkennen van een phishingmail
          </Text>
          <Text>
            Vaak kunt u phishing herkennen aan het adres van de afzender of aan
            spelfouten. Wees altijd verdacht van bijlages of links, want hier
            zitten ook vaak pogingen in verborgen. Als u het vertrouwt en toch
            op een link klikt, controleer dan altijd het adres van de website.
          </Text>
        </View>

        <View style={styles.infoview}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Tip 3: Herkennen van een valse website
          </Text>
          <Text>
            Een officiële website begint met HTTPS en niet met HTTP. Bij sommige
            websites is dit nog wél HTTP. Dit hoeft geen probleem te zijn, maar
            is wel gevaarlijk wanneer u zelf uw gegevens invult.
            {"\n"}
            {"\n"}
            Uw gegevens kunnen afgeluisterd worden door iemand met slechte
            bedoelingen!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
