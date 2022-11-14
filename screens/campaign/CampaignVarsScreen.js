import { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Input } from "../../components/Input";

export const CampaignVarsScreen = ({ template, onChange }) => {
  const [enteredCorporationName, setEnteredCorporationName] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredBillAmount, setEnteredBillAmount] = useState("");

  const [enteredIssuer, setEnteredIssuer] = useState("");
  const [enteredPersonName, setEnteredPersonName] = useState("");
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredCourseName, setEnteredCourseName] = useState("");

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredVenue, setEnteredVenue] = useState("");
  const [enteredEventTime, setEnteredEventTime] = useState("");
  const [enteredEventDate, setEnteredEventDate] = useState("");
  const [enteredBandName, setEnteredBandName] = useState("");

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "corporationName":
        setEnteredCorporationName(enteredValue);
        break;
      case "month":
        setEnteredMonth(enteredValue);
        break;
      case "year":
        setEnteredYear(enteredValue);
        break;
      case "billAmount":
        setEnteredBillAmount(enteredValue);
        break;
      case "issuer":
        setEnteredIssuer(enteredValue);
        break;
      case "personName":
        setEnteredPersonName(enteredValue);
        break;
      case "hours":
        setEnteredHours(enteredValue);
        break;
      case "courseName":
        setEnteredCourseName(enteredValue);
        break;
      case "firstName":
        setEnteredFirstName(enteredValue);
        break;
      case "lastName":
        setEnteredLastName(enteredValue);
        break;
      case "venue":
        setEnteredVenue(enteredValue);
        break;
      case "eventTime":
        setEnteredEventTime(enteredValue);
        break;
      case "eventDate":
        setEnteredEventDate(enteredValue);
        break;
      case "bandName":
        setEnteredBandName(enteredValue);
        break;
    }
    const templateVars = {
      corporation_name: enteredCorporationName,
      month: enteredMonth,
      Year: enteredYear,
      bill_amount: enteredBillAmount,
      hours: enteredHours,
      issuer: enteredIssuer,
      course_name: enteredCourseName,
      venue: enteredVenue,
      event_time: enteredEventTime,
      event_date: enteredEventDate,
      band_name: enteredBandName,
    };
    onChange && onChange(templateVars);
  }

  return (
    <View style={styles.container}>
      {template === "certificate" && (
        <View>
          <Input
            label="Issuer"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "issuer")}
            value={enteredIssuer}
          />
          <Input
            label="Person Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "personName")}
            value={enteredPersonName}
          />
          <Input
            label="Hours"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "hours")}
            value={enteredHours}
          />
          <Input
            label="Course Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "courseName")}
            value={enteredCourseName}
          />
        </View>
      )}
      {template === "energyBill" && (
        <View>
          <Input
            label="Corporation Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(
              this,
              "corporationName"
            )}
            value={enteredCorporationName}
          />
          <Input
            label="Month"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "month")}
            value={enteredMonth}
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
      )}
      {template === "musicEvent" && (
        <View>
          <Input
            label="First Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
            value={enteredFirstName}
          />
          <Input
            label="Last Name"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
            value={enteredLastName}
          />
          <Input
            label="Venue"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "venue")}
            value={enteredVenue}
          />
          <Input
            label="Event Time"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "eventTime")}
            value={enteredEventTime}
          />
          <Input
            label="Event Date"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "eventDate")}
            value={enteredEventDate}
          />
          <Input
            label="Organizer"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "bandName")}
            value={enteredBandName}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
