import { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Input } from "../../components/Input";

export const CampaignVarsScreen = () => {
  const [enteredCorporationName, setEnteredCorporationName] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredBillAmount, setEnteredBillAmount] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "corporationName":
        setEnteredCorporationName(enteredValue);
        break;
      case "year":
        setEnteredYear(enteredValue);
        break;
      case "billAmount":
        setEnteredBillAmount(enteredValue);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          label="Corporation Name"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "corporationName")}
          value={enteredCorporationName}
        />
        <Input
          label="Year"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "year")}
          value={enteredYear}
        />
        <Input
          label="Bill Amount"
          isWhiteLabel={false}
          onUpdateValue={updateInputValueHandler.bind(this, "billAmount")}
          value={enteredBillAmount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
