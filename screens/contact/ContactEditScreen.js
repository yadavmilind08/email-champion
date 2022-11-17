import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { ContactContext } from "../../store/contact-context";
import { AuthContext } from "../../store/auth-context";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { createContact, editContact } from "../../util/contact";

export const ContactEditScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const contactId = route.params.contactId;
  const selectedContact = contactCtx.contacts.find(
    (item) => item.id === contactId
  );
  const title = contactId ? "Edit Contact" : "Add Contact";
  navigation.setOptions({ title });

  const data = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
  ];

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState(
    selectedContact?.first_name || ""
  );
  const [enteredLastName, setEnteredLastName] = useState(
    selectedContact?.last_name || ""
  );
  const [enteredEmail, setEnteredEmail] = useState(
    selectedContact?.email || ""
  );
  const [enteredGender, setEnteredGender] = useState(
    selectedContact?.gender || data[0].value
  );

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
    setEnteredGender(value);
  };

  const onSubmit = () => {
    const newContact = {
      id: contactId || null,
      userId: authContext.user.id,
      first_name: enteredFirstName,
      last_name: enteredLastName,
      email: enteredEmail,
      gender: enteredGender,
    };
    if (contactId) {
      contactCtx.editContact(newContact);
    } else {
      contactCtx.addContact(newContact);
    }
    navigation.navigate("Contacts");
  };

  async function createNewContact(newContact) {
    setIsAuthenticating(true);
    try {
      const response = await createContact(newContact);
      contactCtx.addContact(response.data);
    } catch (err) {
      console.log("ContactEditScreen createContact error", err);
    }
    setIsAuthenticating(false);
  }

  async function editExistingContact(newContact) {
    setIsAuthenticating(true);
    try {
      const response = await editContact(newContact);
      contactCtx.editContact(response.data);
    } catch (err) {
      console.log("ContactEditScreen editContact error", err);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loading..." />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
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
          value={enteredGender}
          label="Gender"
          onChange={onChangeHandler}
        />
        <View style={styles.buttons}>
          <Button onPress={onSubmit}>{title}</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
