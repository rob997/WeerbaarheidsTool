import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import GetEmailBreaches from "../scripts/API";
import ExpressAPI from "../scripts/ExpressAPI";
import styles from "../styles/styles.js";

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
        <Text>Resultaten:</Text>
        <View style={styles.resulttextview}>
          {/* Ready to proceed? Show results. */}
          {proceed ? (
            <GetEmailBreaches email={email} />
          ) : (
            <Text>Voer een (geldig) emailadres in.</Text>
          )}

          {
            //<ExpressAPI />
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
