import React, { useContext, useState, dispatch } from "react";
import { Button, View, Text, TextInput, SafeAreaView } from "react-native";
import { set } from "react-native-reanimated";
import RadioButton from "../components/RadioButton";
import UserContext from "../components/UserContext";
import AddUser from "../scripts/AddUser";
import getUserCount from "../scripts/GetUserCount";
import styles from "../styles/styles";

export let id = null;
export let wantsToShare = false;

function setId() {
  getUserCount().then((response) => {
    id = response[0].count + 1;
  });
}

export default function HomeScreen({ navigation }) {
  // Options for the radio buttons
  const data = [
    { key: 1, value: "Nee" },
    { key: 2, value: "Ja" },
  ];

  const [sharesInfo, setSharesInfo] = useState(null);

  const userData = useContext(UserContext);

  // Temp function to show global state data
  const renderThings = (things) => {
    return things.map((thing) => {
      return <Text key={thing.id}>{thing.value}</Text>;
    });
  };

  const getShareState = (things) => {
    console.log(things[1]["value"]);
  };

  //userData?.functions?.asdf("Nee");

  function updateContext(value) {
    userData?.functions?.setSharesInfo(value);
  }

  function setStates(value) {
    setSharesInfo(value);
    setId();
  }

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
                  onSelect={(value) => setStates(value)}
                />
              </View>
            </View>
          </View>
          <Text></Text>
          {sharesInfo === null ? (
            <Text>Maak een keuze alstublieft</Text>
          ) : (
            <Text>U heeft gekozen voor: {sharesInfo}</Text>
          )}
          <Text></Text>

          <Button
            title="Verder"
            onPress={() => {
              if (sharesInfo !== null) {
                wantsToShare = sharesInfo;
                AddUser(id, wantsToShare);
                navigation.navigate("Weerbaarheidstool");
              } else {
                alert("Maak een keuze alstublieft");
              }
            }}
          />
          {
            //getShareState(userData?.data)
          }
          {
            //userData
            //? renderThings(userData?.data)
            //: ? console.log(userData.data)
            //  null
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
