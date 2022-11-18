import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { useContext, useState } from "react";
import { ContactContext } from "../../store/contact-context";
import { deleteContact } from "../../util/contact";
import { LoadingOverlay } from "../../components/LoadingOverlay";

export const ContactListScreen = () => {
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const columns = ["First Name", "Last Name", "Email ID", "Gender", ""];
  const keys = ["first_name", "last_name", "email", "gender"];

  const contacts = contactCtx.contacts;

  const onAddHandler = () => {
    navigation.navigate("ContactEdit", {
      contactId: null,
    });
  };

  const onEditHandler = (item) => {
    navigation.navigate("ContactEdit", {
      contactId: item.id,
    });
  };

  const onDeleteHandler = (item) => {
    Alert.alert("Are you sure you want to delete?", undefined, [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => deleteContactFromList(item),
      },
    ]);
  };

  const deleteContactFromList = (item) => {
    contactCtx.deleteContact(item);
    // deleteExistingContact(item);
  };

  async function deleteExistingContact(newContact) {
    setIsAuthenticating(true);
    try {
      const response = await deleteContact(newContact);
      contactCtx.deleteContact(response.data);
      setIsAuthenticating(false);
    } catch (err) {
      setIsAuthenticating(false);
      console.log("ContactListScreen editContact error", err);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loading..." />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Contacts</Text>
        <Button onPress={onAddHandler}>Add</Button>
      </View>
      <View style={styles.subHeader}>
        <Text>
          List of all the contacts which can be used to send capaigs to. You can
          add, edit and delete contact.
        </Text>
      </View>
      <Table
        columns={columns}
        keys={keys}
        data={contacts}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },
  subHeader: {
    marginVertical: 5,
  },
});
