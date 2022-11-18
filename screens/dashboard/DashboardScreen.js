import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { SummaryCard } from "../../components/SummaryCard";
import { ContactContext } from "../../store/contact-context";
import { CampaignContext } from "../../store/campaign-context";
import { getAllContacts } from "../../util/contact";
import { LoadingOverlay } from "../../components/LoadingOverlay";

export const DashboardScreen = () => {
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);
  const campaignCtx = useContext(CampaignContext);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // const [contacts, setContacts] = useState([]);
  // const [campaigns, setCampaigns] = useState([]);

  const contacts = contactCtx.contacts;
  const campaigns = campaignCtx.campaigns;

  useEffect(() => {
    async function fetchAllContactsAndCampaigns() {
      setIsAuthenticating(true);
      try {
        const contctResponse = await getAllContacts();
        contactCtx.saveContacts(contctResponse.data);
        setContacts(contctResponse.data);
        const campaignResponse = await getAllCampaigns();
        campaignCtx.saveCampaigns(campaignResponse.data);
        setCampaigns(campaignResponse.data);
        setIsAuthenticating(false);
      } catch (err) {
        setIsAuthenticating(false);
        console.log("DashboardScreen fetchAllContactsAndCampaigns Error", err);
      }
    }

    // fetchAllContactsAndCampaigns();
  }, []);

  if (isAuthenticating) {
    return <LoadingOverlay message="Loading data..." />;
  }

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
