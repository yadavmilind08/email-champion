import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const MusicEventTemplateScreen = ({
  firstName,
  lastName,
  venue,
  eventDate,
  eventTime,
  bandName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.event}>
        Musical {"\n"} Night {"\n"}
      </Text>
      <Text style={styles.name}>
        Hi {firstName || "{{firstname}}"} {lastName || "{{lastname}}"} {"\n"}
      </Text>
      <Text>
        We cordially invite you to our annual music night program whose schedule
        and venue is mentioned below {"\n"}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.name}>Venue: {venue || "{{venue}}"}</Text>
        <Text style={styles.name}>Date: {eventDate || "{{event_date}}"}</Text>
        <Text style={styles.name}>Time: {eventTime || "{{event_time}}"}</Text>
        <Text style={styles.name}>
          Organizer: {bandName || "{{band_name}}"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pink100,
    borderWidth: 10,
    borderColor: Colors.black,
    paddingHorizontal: 10,
    paddingVertical: 30,
    alignItems: "center",
  },
  event: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: "600",
    fontStyle: "italic",
  },
  name: {
    fontWeight: "700",
  },
  footer: {
    display: "flex",
  },
});
