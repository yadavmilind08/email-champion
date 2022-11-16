import { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Input } from "../../components/Input";

export const CampaignVarsScreen = ({ template, templateVars, onChange }) => {
  const [enteredCorporationName, setEnteredCorporationName] = useState(
    templateVars?.corporation_name || ""
  );
  const [enteredMonth, setEnteredMonth] = useState(templateVars?.month || "");
  const [enteredYear, setEnteredYear] = useState(templateVars?.Year || "");
  const [enteredBillAmount, setEnteredBillAmount] = useState(
    templateVars?.bill_amount || ""
  );

  const [enteredIssuer, setEnteredIssuer] = useState(
    templateVars?.issuer || ""
  );
  const [enteredHours, setEnteredHours] = useState(templateVars?.hours || "");
  const [enteredCourseName, setEnteredCourseName] = useState(
    templateVars?.course_name || ""
  );

  const [enteredVenue, setEnteredVenue] = useState(templateVars?.venue || "");
  const [enteredEventTime, setEnteredEventTime] = useState(
    templateVars?.event_time || ""
  );
  const [enteredEventDate, setEnteredEventDate] = useState(
    templateVars?.event_date || ""
  );
  const [enteredBandName, setEnteredBandName] = useState(
    templateVars?.band_name || ""
  );

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
      case "hours":
        setEnteredHours(enteredValue);
        break;
      case "courseName":
        setEnteredCourseName(enteredValue);
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
    let templateVars = null;
    switch (template) {
      case "EnergyBillTemplate":
        templateVars = {
          corporation_name: enteredCorporationName,
          month: enteredMonth,
          Year: enteredYear,
          bill_amount: enteredBillAmount,
        };
        break;
      case "CertificateTemplate":
        templateVars = {
          hours: enteredHours,
          issuer: enteredIssuer,
          course_name: enteredCourseName,
        };
        break;
      case "MusicalEventTemplate":
        templateVars = {
          venue: enteredVenue,
          event_time: enteredEventTime,
          event_date: enteredEventDate,
          band_name: enteredBandName,
        };
        break;
    }

    onChange && onChange(templateVars);
  }

  return (
    <View style={styles.container}>
      {template === "CertificateTemplate" && (
        <View>
          <Input
            label="Issuer"
            isWhiteLabel={false}
            onUpdateValue={updateInputValueHandler.bind(this, "issuer")}
            value={enteredIssuer}
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
      {template === "EnergyBillTemplate" && (
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
      {template === "MusicalEventTemplate" && (
        <View>
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
