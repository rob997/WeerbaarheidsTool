import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import EmailBreaches from "../scripts/API";
import AddEmailInfo from "../scripts/AddEmailInfo";
import styles from "../styles/styles.js";
import { id, wantsToShare } from "./HomeScreen";

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [proceed, setProceed] = useState(false);
  const [loadEmail, setLoadEmail] = useState(null);

  function EmailHandler(email) {
    let reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg.test(email)) {
      return true;
    } else {
      alert("Ongeldig email address!");
      return false;
    }
  }

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
              setProceed(false);
            }}
            style={styles.emailinput}
          ></TextInput>
          <View>
            <Button
              title="Check"
              onPress={() => {
                // Valid email ? Proceed, else don't proceed
                EmailHandler(email)
                  ? setProceed(true) && setLoadEmail(email)
                  : setProceed(false);
              }}
              color="green"
            />
          </View>
        </View>
      </View>

      <View style={styles.resultview}>
        <View style={styles.resulttextview}>
          {/* Ready to proceed? Show results. */}
          {proceed ? (
            <EmailBreaches email={email} />
          ) : (
            <Text>Voer een (geldig) emailadres in.</Text>
          )}
        </View>

        {proceed ? (
          <View>
            <Text>
              Wanneer uw emailadres wordt gevonden in één of meerdere
              datalekken, dan zijn de wachtwoorden waarmee u staat ingeschreven
              openbaar! {"\n"}
            </Text>
            <Text>
              Dit geld ook voor elk ander account waar u hetzelfde wachtwoord
              gebruikt. {"\n"}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Verander deze wachtwoorden zo snel mogelijk!
            </Text>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
