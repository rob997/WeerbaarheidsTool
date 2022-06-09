import RadioForm from "react-native-simple-radio-button";

export default function ReactSimpleButton() {
  const [chosenOption, setChosenOption] = useState("0"); //will store our current user options
  const options = [
    { label: "No", value: "0" },
    { label: "Yes", value: "1" },
  ]; //create our options for radio group
  return (
    <View>
      <Text> {chosenOption}</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>
  );
}
