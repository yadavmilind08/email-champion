import { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { Checkbox } from "../../components/Checkbox";
import { CampaignVarsScreen } from "./CampaignVarsScreen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { CampaignContext } from "../../store/campaign-context";
import { AuthContext } from "../../store/auth-context";
import { ContactContext } from "../../store/contact-context";

export const CampaignEditScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const campaignCtx = useContext(CampaignContext);
  const contactCtx = useContext(ContactContext);
  const authContext = useContext(AuthContext);

  const campaignId = route.params.campaignId;
  const selectedCampaign = campaignCtx.campaigns.find(
    (item) => item.id === campaignId
  );
  const title = campaignId ? "Edit Camapign" : "Add Camapign";
  navigation.setOptions({ title });

  const data = [
    { name: "Energy Bill Template", value: "EnergyBillTemplate" },
    { name: "Certificate Template", value: "CertificateTemplate" },
    { name: "Musical Event Template", value: "MusicalEventTemplate" },
  ];

  const contacts = contactCtx.contacts.map((x) => {
    return {
      name: `${x.first_name} ${x.last_name}`,
      value: x.id,
    };
  });

  const [enteredCampaignName, setEnteredCampaignName] = useState(
    selectedCampaign?.name || ""
  );
  const [enteredSubject, setEnteredSubject] = useState(
    selectedCampaign?.subject || ""
  );
  const [enteredTemplateName, setEnteredTemplateName] = useState(
    selectedCampaign?.template?.name || data[0].value
  );
  const [enteredTemplateVars, setEnteredTemplateVars] = useState(
    selectedCampaign?.template_vars || null
  );
  const [selectedContacts, setSelectedContacts] = useState(
    selectedCampaign?.contacts || []
  );

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "campaignName":
        setEnteredCampaignName(enteredValue);
        break;
      case "subject":
        setEnteredSubject(enteredValue);
        break;
      case "templateName":
        setEnteredTemplateName(enteredValue);
        break;
    }
  }

  const onChangeHandler = (value) => {
    setEnteredTemplateName(value);
  };

  const onTemplateChangeHandler = (vars) => {
    setEnteredTemplateVars(vars);
  };

  const onContactChangeHandler = (contactList) => {
    setSelectedContacts([...contactList]);
  };

  const onSubmit = () => {
    const newCampaign = {
      id: campaignId || null,
      userId: authContext.user.id,
      name: enteredCampaignName,
      subject: enteredSubject,
      status: selectedCampaign?.status || "pending",
      template_vars: { ...enteredTemplateVars },
      template: { name: enteredTemplateName },
      contacts: [...selectedContacts],
    };
    if (campaignId) {
      campaignCtx.editCampaign(newCampaign);
    } else {
      campaignCtx.addCampaign(newCampaign);
    }
    navigation.navigate("Campaigns");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <View style={styles.form}>
          <Input
            label="Campaign Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "campaignName")}
            value={enteredCampaignName}
          />
          <Input
            label="Subject"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "subject")}
            value={enteredSubject}
          />
          <RadioButton
            data={data}
            value={enteredTemplateName}
            label="Select Template"
            isRow={false}
            onChange={onChangeHandler}
          />
          <CampaignVarsScreen
            template={enteredTemplateName}
            templateVars={enteredTemplateVars}
            onChange={onTemplateChangeHandler}
          />
          <Checkbox
            data={contacts}
            label="Select Contacts"
            values={selectedContacts}
            onChange={onContactChangeHandler}
          />
          <View style={styles.buttons}>
            <Button onPress={onSubmit}>{title}</Button>
          </View>
        </View>
      </View>
    </ScrollView>
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
