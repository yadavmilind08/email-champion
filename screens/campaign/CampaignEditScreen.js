import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { Checkbox } from "../../components/Checkbox";
import { CampaignVarsScreen } from "./CampaignVarsScreen";

export const CampaignEditScreen = () => {
  const data = [
    { name: "Energy Bill Template", value: "EnergyBillTemplate" },
    { name: "Certificate Template", value: "CertificateTemplate" },
    { name: "Musical Event Template", value: "MusicalEventTemplate" },
  ];

  const contacts = [
    { name: "Leena", value: "1" },
    { name: "John", value: "2" },
    { name: "Max", value: "3" },
  ];

  const [enteredCampaignName, setEnteredCampaignName] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredTemplateName, setEnteredTemplateName] = useState(data[0].value);

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Add campaign</Text>
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
          <CampaignVarsScreen />
          <RadioButton
            data={data}
            value={enteredTemplateName}
            label="Select Template"
            isRow={false}
            onChange={onChangeHandler}
          />
          <Checkbox data={contacts} label="Select Contacts" />
          <View style={styles.buttons}>
            <Button>Add</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
