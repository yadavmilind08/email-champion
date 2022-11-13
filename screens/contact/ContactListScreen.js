import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Table } from "../../components/Table";

export const ContactListScreen = () => {
  const navigation = useNavigation();

  const columns = ["First Name", "Last Name", "Email ID", "Gender", ""];
  const keys = ["first_name", "last_name", "email", "gender"];
  const data = [
    {
      id: 1,
      userId: 1,
      first_name: "Shyam",
      last_name: "Singh",
      gender: "male",
      email: "shyam@gmail.com",
      address: "tokyo",
      phone: "2345678765",
      city: "japan",
    },
    {
      id: 2,
      userId: 2,
      first_name: "Ram",
      last_name: "Kumar",
      gender: "male",
      email: "ram@gmail.com",
      address: "23/2 Broadway, Paris, France",
      phone: "4567865436",
      city: "Paris",
    },
    {
      id: 3,
      userId: 1,
      first_name: "Ann",
      last_name: "Smith",
      gender: "male",
      email: "ann@gmail.com",
      address: "1310, 5th Avenue, 34th ST, New York City, USA",
      phone: "6764234523",
      city: "New York City",
    },
    {
      id: 4,
      userId: 1,
      first_name: "Cesar",
      last_name: "Godria",
      gender: "male",
      email: "cg@gmail.com",
      address: "Malasiya",
      phone: "4599909878",
      city: "Miri",
    },
    {
      id: 5,
      userId: 2,
      first_name: "Angelina",
      last_name: "Smith",
      gender: "female",
      email: "angelina@gmail.com",
      address: "indonesia",
      phone: "7645433456",
      city: "Jakarta",
    },
  ];

  const onEditHandler = () => {
    navigation.navigate("ContactEdit");
  };

  const onDeleteHandler = () => {
    Alert.alert("Are you sure you want to delete?", undefined, [
      { text: "Okay", style: "destructive", onPress: deleteContact },
    ]);
  };

  const deleteContact = () => {};

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
          <Button onPress={onEditHandler}>Add</Button>
        </View>
      </View>
      <Table
        columns={columns}
        keys={keys}
        data={data}
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
