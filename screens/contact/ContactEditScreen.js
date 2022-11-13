import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";

export const ContactEditScreen = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "firstName":
        setEnteredFirstName(enteredValue);
        break;
      case "lastName":
        setEnteredLastName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
    }
  }

  const onChangeHandler = (value) => {
    console.log({ value });
  };

  const data = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add contact</Text>
      <View style={styles.form}>
        <Input
          label="First Name"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
          value={enteredFirstName}
        />
        <Input
          label="Last Name"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
          value={enteredLastName}
        />
        <Input
          label="Email Address"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          value={enteredEmail}
          keyboardType="email-address"
        />
        <RadioButton
          data={data}
          value={data[0].value}
          label="Gender"
          onChange={onChangeHandler}
        />
        <View style={styles.buttons}>
          <Button>Add</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  form: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  buttons: {
    marginTop: 20,
  },
});
