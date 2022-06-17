import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { key } from "./APIkey";

export default function EmailBreaches(value) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //console.log(data);

  useEffect(() => {
    fetch(
      //"https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json",
      //`https://haveibeenpwned.com/api/v3/breachedaccount/${value.email}`,
      `http://51.11.106.178:3000/getEmailBreaches?email=${value.email}`,
      {
        method: "GET",
        headers: { "hibp-api-key": key },
      }
    )
      .then((response) => response.json())
      .then((json) => JSON.parse(json))
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
          {console.log(data.length)}
          <FlatList
            data={data}
            renderItem={({ item }) => <Text>{item.Name}</Text>}
          />
        </View>
      )}
    </View>
  );
}
