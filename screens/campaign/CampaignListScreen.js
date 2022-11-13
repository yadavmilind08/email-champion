import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Table } from "../../components/Table";
import { Button } from "../../components/Button";

export const CampaignListScreen = () => {
  const navigation = useNavigation();

  const columns = ["Campaign Name", "Subject", "Status", "Template", ""];
  const keys = ["name", "subject", "status", "name"];
  const data = [
    {
      id: 1,
      name: "Energy bill May 2022",
      subject: "Pay Energy Bill for May 2022",
      status: "pending",
      template: {
        name: "EnergyBillTemplate",
      },
      template_vars: {
        corporation_name: "Green Energy Corporation",
        month: "May",
        Year: "2022",
        bill_amount: "2000",
      },
      contacts: [1, 3, 4],
      userId: 1,
    },
    {
      id: 2,
      name: "Certificate distribution October 2022",
      subject: "Certificate distribution in October 2022 TownHall",
      status: "pending",
      template_vars: {
        hours: "40",
        issuer: "UIE studio india",
        course_name: "Nodejs Reskilling",
      },
      template: {
        name: "CertificateTemplate",
      },
      contacts: [1, 4],
      userId: 1,
    },
  ];

  const onEditHandler = () => {
    navigation.navigate("CampaignEdit");
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
          <Text style={styles.header}>Campaigns</Text>
          <Text>List of all the campaigns created and sent.</Text>
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
