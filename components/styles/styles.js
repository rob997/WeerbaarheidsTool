import { StyleSheet } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";

export default StyleSheet.create({
  generalview: {},

  mainview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },

  titleview: {
    marginTop: "5%",
    padding: "3%",
    height: "15%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  title: {
    //backgroundColor: 'tomato',
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "space-between",
  },

  inputview: {
    flex: 2,
    marginTop: "10%",
    marginBottom: "5%",
    padding: 5,
    height: "20%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  inputwrapper: {
    flexDirection: "row",
    marginTop: "5%",
    height: "40%",
  },

  inputtext: {},

  input: {
    marginRight: "5%",
    paddingLeft: 10,
    height: 35,
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgrey",
  },

  resulttext: {},

  resultview: {
    flex: 4,
    marginBottom: "5%",
    padding: 5,
    height: "40%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  infoviewcontainer: {
    flex: 1,
    marginTop: "10%",
    marginBottom: "5%",
    height: "70%",
    width: "90%",
    //backgroundColor: 'white',
    //borderColor: 'black',
    //borderWidth: 1,
  },

  infoview: {
    flex: 1,
    marginTop: "5%",
    padding: 5,
    height: "50%",
    width: "100%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  option: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  unselected: {
    backgroundColor: "red",
    margin: 5,
  },
  selected: {
    backgroundColor: "blue",
    margin: 6,
    padding: 10,
    borderRadius: 10,
  },
});
