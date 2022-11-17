import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Table } from "../../components/Table";
import { Button } from "../../components/Button";
import { CampaignContext } from "../../store/campaign-context";
import { useContext } from "react";

export const CampaignListScreen = () => {
  const navigation = useNavigation();
  const campaignCtx = useContext(CampaignContext);

  const columns = ["Campaign Name", "Subject", "Status", "Template", ""];
  const keys = ["name", "subject", "status", "name"];

  const campaigns = campaignCtx.campaigns;

  const onAddHandler = () => {
    navigation.navigate("CampaignEdit", {
      campaignId: null,
    });
  };

  const onEditHandler = (item) => {
    navigation.navigate("CampaignEdit", {
      campaignId: item.id,
    });
  };

  const onDeleteHandler = (item) => {
    Alert.alert("Are you sure you want to delete?", undefined, [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => deleteCampaign(item),
      },
    ]);
  };

  const deleteCampaign = (item) => {
    campaignCtx.deleteCampaign(item);
  };

  const onRunHandler = (item) => {
    navigation.navigate("GeneratedTemplates", {
      campaignId: item.id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>Campaigns</Text>
        <Button onPress={onAddHandler}>Add</Button>
      </View>
      <View style={styles.subHeader}>
        <Text>List of all the campaigns created and sent.</Text>
      </View>
      <Table
        columns={columns}
        keys={keys}
        data={campaigns}
        onRun={onRunHandler}
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
  subHeader: {
    marginVertical: 5,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
  },
});
