import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { SummaryCard } from "../../components/SummaryCard";
import { ContactContext } from "../../store/contact-context";
import { CampaignContext } from "../../store/campaign-context";
import { getAllContacts } from "../../util/contact";

export const DashboardScreen = () => {
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);
  const campaignCtx = useContext(CampaignContext);

  useEffect(() => {
    async function fetchAllContacts() {
      try {
        const response = await getAllContacts();
        contactCtx.saveContacts(response.data);
      } catch (err) {
        Alert.alert("Error", err);
      }
    }

    async function fetchAllCampaigns() {
      try {
        const response = await getAllCampaigns();
        campaignCtx.saveCampaigns(response.data);
      } catch (err) {
        Alert.alert("Error", err);
      }
    }

    fetchAllContacts();
    fetchAllCampaigns();
  }, []);

  const contacts = contactCtx.contacts;
  const campaigns = campaignCtx.campaigns;

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <SummaryCard
          count={contacts.length}
          label="Contacts"
          onPress={() => navigation.navigate("Contacts")}
        ></SummaryCard>
        <SummaryCard
          count={campaigns.length}
          label="Campaigns"
          onPress={() => navigation.navigate("Campaigns")}
        ></SummaryCard>
        <SummaryCard
          count={3}
          label="Templates"
          onPress={() => navigation.navigate("Templates")}
        ></SummaryCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
  },
});
