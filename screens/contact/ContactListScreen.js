import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Table } from "../../components/Table";
import { useContext } from "react";
import { ContactContext } from "../../store/contact-context";

export const ContactListScreen = () => {
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);

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
        onPress: () => deleteContact(item),
      },
    ]);
  };

  const deleteContact = (item) => {
    contactCtx.deleteContact(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.header}>Contacts</Text>
          <Text>
            List of all the contacts which can be used to send capaigs to. You
            can add, edit and delete contact.
          </Text>
        </View>
        <View>
          <Button onPress={onAddHandler}>Add</Button>
        </View>
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
    paddingRight: 50,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },
});
