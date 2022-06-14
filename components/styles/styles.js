import { StyleSheet } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";

export default StyleSheet.create({
  // Main view for use on every screen
  mainview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },

  // View for titles on every screen
  titleview: {
    marginTop: "5%",
    padding: "3%",
    height: "10%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  // Text for titles on every screen
  title: {
    //backgroundColor: 'tomato',
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "space-between",
  },

  // View for title on HomeScreen
  hometitleview: {
    marginTop: "5%",
    padding: "3%",
    height: "15%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  // View for content on HomeScreen
  homeview: {
    flex: 4,
    marginTop: "10%",
    marginBottom: "5%",
    marginLeft: "10%",
    height: "20%",
    width: "100%",
  },

  // View for input on HomeScreen
  homeinputview: {
    flex: 4,
    marginTop: "10%",
    marginBottom: "5%",
    padding: 20,
    height: "20%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  // View for input on EmailScreen and PasswordScreen
  emailinputview: {
    flex: 1.5,
    marginTop: "10%",
    marginBottom: "5%",
    padding: 10,
    height: "20%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  passwordinputview: {
    flex: 2,
    marginTop: "10%",
    marginBottom: "5%",
    padding: 10,
    height: "20%",
    width: "90%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },

  // View around input field on EmailScreen and PasswordScreen
  emailinputwrapper: {
    flexDirection: "row",
    marginTop: "5%",
    height: "40%",
  },

  inputcontainer: {
    flexDirection: "row",
    height: "40%",
  },

  passwordinputwrapper: {
    width: "80%",
  },

  // Text above input field on EmailScreen and PasswordScreen
  inputtext: {},

  // Input field on EmailScreen and PasswordScreen
  emailinput: {
    marginRight: "5%",
    paddingLeft: 10,
    height: 35,
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgrey",
  },

  passwordinput: {
    marginRight: "5%",
    paddingLeft: 10,
    height: 35,
    width: "94%",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgrey",
  },

  passwordRadioWrapper: {
    flexDirection: "row",
  },

  passwordRadio: {
    marginLeft: "5%",
  },

  resulttext: {},

  // View for results on EmailScreen and PasswordScreen
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

  resulttextview: {
    flex: 4,
    marginBottom: "5%",
    padding: 5,
    height: "40%",
  },

  // View-container for all Tip views on InfoScreen
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

  // View for Tip on InfoScreen
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

  // Radiobutton on HomeScreen
  option: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },

  // Unselected style for Radiobutton on HomeScreen
  unselected: {
    backgroundColor: "grey",
    margin: 5,
    borderRadius: 10,
    padding: 4,
  },

  // Selected style for Radiobutton on HomeScreen
  selected: {
    backgroundColor: "cornflowerblue",
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
});
