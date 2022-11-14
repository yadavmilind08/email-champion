import { ScrollView, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { SummaryCard } from "../../components/SummaryCard";
import { ContactContext } from "../../store/contact-context";
import { CampaignContext } from "../../store/campaign-context";

export const DashboardScreen = () => {
  const navigation = useNavigation();
  const contactCtx = useContext(ContactContext);
  const campaignCtx = useContext(CampaignContext);

  const contacts = contactCtx.getAllContacts();
  const campaigns = campaignCtx.getAllCampaigns();

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
