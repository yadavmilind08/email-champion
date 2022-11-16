import { View, StyleSheet, Text, ScrollView } from "react-native";
import { EnergyBillTemplateScreen } from "./EnergyBillTemplateScreen";
import { CertificateTemplateScreen } from "./CertificateTemplateScreen";
import { MusicEventTemplateScreen } from "./MusicEventTemplateScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { CampaignContext } from "../../store/campaign-context";
import { ContactContext } from "../../store/contact-context";

export const GeneratedTemplatesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const campaignCtx = useContext(CampaignContext);
  const contactCtx = useContext(ContactContext);

  const campaignId = route.params.campaignId;
  const selectedCampaign = campaignCtx.campaigns.find(
    (item) => item.id === campaignId
  );

  navigation.setOptions({ title: "Templates" });

  const getFirstName = (contactId) => {
    const selectedContact = getSelectedContact(contactId);
    return selectedContact.first_name;
  };

  const getLastName = (contactId) => {
    const selectedContact = getSelectedContact(contactId);
    return selectedContact.last_name;
  };

  const getPersonName = (contactId) => {
    const selectedContact = getSelectedContact(contactId);
    return `${selectedContact.first_name} ${selectedContact.last_name}`;
  };

  const getSelectedContact = (contactId) => {
    return contactCtx.contacts.find((x) => x.id === contactId);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>{selectedCampaign.name}</Text>
        {selectedCampaign.contacts.map((contactId) => {
          return (
            <View key={contactId} style={styles.tempate}>
              {selectedCampaign.template.name === "EnergyBillTemplate" && (
                <EnergyBillTemplateScreen
                  firstName={getFirstName(contactId)}
                  lastName={getLastName(contactId)}
                  corporationName={
                    selectedCampaign.template_vars.corporation_name
                  }
                  month={selectedCampaign.template_vars.month}
                  year={selectedCampaign.template_vars.Year}
                  amount={selectedCampaign.template_vars.bill_amount}
                />
              )}
              {selectedCampaign.template.name === "CertificateTemplate" && (
                <CertificateTemplateScreen
                  personName={getPersonName(contactId)}
                  hours={selectedCampaign.template_vars.hours}
                  issuer={selectedCampaign.template_vars.issuer}
                  courseName={selectedCampaign.template_vars.course_name}
                />
              )}
              {selectedCampaign.template.name === "MusicalEventTemplate" && (
                <MusicEventTemplateScreen
                  firstName={getFirstName(contactId)}
                  lastName={getLastName(contactId)}
                  venue={selectedCampaign.template_vars.venue}
                  eventTime={selectedCampaign.template_vars.event_time}
                  eventDate={selectedCampaign.template_vars.event_date}
                  bandName={selectedCampaign.template_vars.band_name}
                />
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  tempate: {
    marginTop: 20,
  },
});
