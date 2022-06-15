import React, { useContext, useState } from "react";
import { Button, View, Text, TextInput, SafeAreaView } from "react-native";
import RadioButton from "../components/RadioButton";
import UserContext from "../components/thingsContext";
import styles from "../styles/styles";

export default function HomeScreen({ navigation }) {
  const data = [
    { key: 1, value: "Nee" },
    { key: 2, value: "Ja" },
  ];

  const [sharesInfo, setSharesInfo] = useState("null");

  const things = useContext(UserContext);

  const renderThings = (things) => {
    return things.map((thing) => {
      return <Text key={thing.id}>{thing.name}</Text>;
    });
  };

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
            wachtwoorden of emailadressen opgeslagen. {"\n\n"}
          </Text>
          <View style={styles.container}>
            <View style={styles.passwordRadioWrapper}>
              <Text style={{ flex: 0.6 }}>Maak hier uw keuze: </Text>
              <View style={styles.passwordRadio}>
                <RadioButton
                  data={data}
                  onSelect={(value) => setSharesInfo(value)}
                />
              </View>
            </View>
          </View>
          <Text>{"U heeft gekozen voor: " + sharesInfo + "\n"}</Text>
          <Button
            title="Verder"
            onPress={() => navigation.navigate("Weerbaarheidstool")}
          />
          {renderThings(things)}
        </View>
      </View>
    </SafeAreaView>
  );
}
