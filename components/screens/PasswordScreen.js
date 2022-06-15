import React, { useState, useRef, forwardRef, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView, Button } from "react-native";
import scorePassword from "react-native-password-strength-meter/src/utils/score-password.js";
import PasswordStrengthDisplay from "../components/PasswordStrengthDisplay.js";
import RadioButton from "../components/RadioButton.js";
import styles from "../styles/styles.js";

export default function PasswordScreen({ navigation }) {
  const data = [
    { key: 1, value: "Ja" },
    { key: 2, value: "Nee" },
  ];

  const [score, setScore] = useState(null);
  const [renderResults, setRenderResults] = useState(false);
  const [recycles, setRecycles] = useState(null);
  const [previousRecycles, setPreviousRecycles] = useState(null);

  const childRef = useRef();

  function recycleInfo() {
    if (previousRecycles === "Ja") {
      return (
        <Text>
          {"\n"}Verder geeft u aan dat wachtwoorden hergebruikt. Dit is erg
          gevaarlijk, zelfs met een sterk wachtwoord. Als een slecht beveiligde
          database waar u staat ingeschreven wordt gehackt bent u meerdere
          accounts kwijt!
        </Text>
      );
    } else
      return (
        <Text>{"\n"}Verder hergebruikt u geen wachtwoorden. Geweldig!</Text>
      );
  }

  function assessPwStrength() {
    let res = "";

    if (score >= 60) {
      res =
        "Een score van " +
        score +
        " punten is uitstekend! Uw wachtwoord is erg veilig.";
    } else if (score >= 50) {
      res =
        "Een score van " +
        score +
        " punten is erg goed. Uw wachtwoord is veilig, maar misschien kan het nog veiliger.";
    } else if (score >= 40) {
      res =
        "Een score van " +
        score +
        " punten is goed. Uw wachtwoord is redelijk veilig, maar het kan nog veiliger.";
    } else if (score >= 30) {
      res =
        "Een score van " +
        score +
        " punten is matig. U wordt geadviseerd om een veiliger wachtwoord te kiezen.";
    } else if (score >= 20) {
      res =
        "Een score van " +
        score +
        " punten is slecht. U wordt geadviseerd om dringend een nieuw wachtwoord te kiezen.";
    } else {
      res =
        "Een score van " +
        score +
        " punten is zeer slecht. U wordt geadviseerd om dringend een nieuw wachtwoord te kiezen.";
    }
    return res;
  }

  function getResults() {
    return (
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Uw score is: {score} / 100.
        </Text>
        <Text>{assessPwStrength()}</Text>
        <Text>{recycleInfo()}</Text>
        <Text>
          {"\n"}
          Voor het maken van een sterk wachtwoord is het belangrijk dat u een
          mix van hoofdletters, getallen en speciale tekens gebruikt. Gebruik
          geen
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.titleview}>
        <Text
          onPress={() => navigation.navigate("E-mail")}
          style={styles.title}
        >
          Wachtwoord Scherm
        </Text>
      </View>

      <View style={styles.passwordinputview}>
        <View style={styles.passwordRadioWrapper}>
          <Text>Hergebruikt u wel eens wachtwoorden?</Text>
          <View style={styles.passwordRadio}>
            <RadioButton data={data} onSelect={(value) => setRecycles(value)} />
          </View>
        </View>
        <Text>Vul hier een wachtwoord in:</Text>
        <View style={styles.inputcontainer}>
          <PasswordStrengthDisplay ref={childRef}></PasswordStrengthDisplay>
          <View style={{ marginTop: "4%" }}>
            <Button
              title="Check"
              onPress={() => {
                if (recycles !== null) {
                  setPreviousRecycles(recycles);
                  // Haal score op van child object (PasswordStrengthDisplay)
                  setScore(childRef.current.getScore());
                  // Wanneer de score opgehaald is en geen 0 is, render de resultaten
                  childRef.current.getScore() > 0
                    ? setRenderResults(true)
                    : alert("Voer tenminste vijf karakters in");
                } else alert("Maak een keuze alstublieft");
              }}
              color="green"
            />
          </View>
        </View>
      </View>

      <View style={styles.resultview}>
        <View style={styles.resulttextview}>
          {
            // Resultaten worden hier gerendered
            renderResults ? (
              getResults()
            ) : (
              <Text>Er zijn nog geen resultaten beschikbaar.</Text>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
