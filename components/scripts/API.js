import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Linking } from "react-native";
import { id, wantsToShare } from "../screens/HomeScreen";
import AddEmailInfo from "./AddEmailInfo";

export default function EmailBreaches(value) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    fetch(
      //"https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json",
      //`https://haveibeenpwned.com/api/v3/breachedaccount/${value.email}`,
      //`http://51.11.106.178:3000/getEmailBreaches?email=${value.email}`,
      `http://192.168.1.210:3000/getEmailBreaches?email=${value.email}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((json) => JSON.parse(json))
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function addEmailToDb(datalength) {
    if (wantsToShare === "Ja") {
      AddEmailInfo(id, datalength);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Laden...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              paddingBottom: 8,
            }}
          >
            Gevonden datalekken:
          </Text>
          {data.length === 0 ? <Text>Niets gevonden!</Text> : null}
          {addEmailToDb(data.length)}
          {/*console.log(data.length)*/}
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.Name}</Text>}
          />
          <Text
            style={{ color: "mediumblue" }}
            onPress={() => Linking.openURL("https://haveibeenpwned.com/")}
          >
            Bron: https://haveibeenpwned.com/
          </Text>
        </View>
      )}
    </View>
  );
}
