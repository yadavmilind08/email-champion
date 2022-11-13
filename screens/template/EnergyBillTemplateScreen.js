import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const EnergyBillTemplateScreen = ({
  firstName,
  lastName,
  month,
  year,
  amount,
  corporationName,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingLabel}>Invoice ID - 112234</Text>
      </View>
      <Text>
        Thank you for partnering with us. Please find the details of bill below.
      </Text>
      <View style={styles.content}>
        <Text style={styles.date}>
          01/08/2022 - 01/09/2022 {"\n"} {"\n"}
        </Text>
        <Text style={styles.signature}>
          Hi {firstName || "{{firstname}}"} {lastName || "{{lastname}}"},
        </Text>
        <Text>
          Thank you for opting for a fixed amount plan. Your energy bill for
          month of {month || "{{month}}"}, {year || "{{year}}"} is Rs.
          {amount || "{{fixed_amount}}"} /- only. Kindly pay in time to avoid
          penalty charges or disconection.
        </Text>
        <Text style={styles.signature}>Regards,</Text>
        <Text style={styles.signature}>
          {corporationName || "{{corporation_name}}"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brown100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: Colors.white,
    padding: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  headingLabel: {
    fontSize: 24,
    fontWeight: "700",
  },
  content: {
    backgroundColor: Colors.white,
    marginTop: 15,
    padding: 20,
    paddingBottom: 50,
  },
  date: {
    fontSize: 18,
    fontWeight: "700",
  },
  signature: {
    fontSize: 16,
    fontWeight: "600",
  },
});
