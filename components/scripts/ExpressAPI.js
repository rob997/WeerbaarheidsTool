import React, { Component } from "react";
import { Text, View } from "react-native";

export default class ExpressAPI extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("http://51.104.44.228:5000/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <View>
        <Text>
          Welcome to React Express API! This is a GET request to
          /express_backend
        </Text>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}
