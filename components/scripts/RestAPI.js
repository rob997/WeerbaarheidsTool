import React, { View, Text } from "react";

export default class GetRequestErrorHandling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
      errorMessage: null,
    };
  }

  componentDidMount() {
    // GET request using fetch with error handling
    fetch("https://api.npms.io/v2/invalid-url")
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <View>
        <Text>GET Request with Error Handling</Text>
        <View>Error message: {errorMessage}</View>
      </View>
    );
  }
}

export { GetRequestErrorHandling };

// export default function getBreachResults(email) {
//   const mail = "robperdok@hotmail.com";
//   return fetch(`https://haveibeenpwned.com/api/v2/breaches/${mail}`)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       alert(responseJson);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetch("https://haveibeenpwned.com/api/v3/breachedaccount/{account}", {
//   method: "GET",
//   hibpToken: "18b7abde56c449f4aabbdfae21285417",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     newName: "Some Name",
//     id: 123,
//   }),
// });
