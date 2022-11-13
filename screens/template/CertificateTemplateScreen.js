import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const CertificateTemplateScreen = ({
  issuer,
  personName,
  hours,
  courseName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.issuer}>
        {issuer || "{{issuer}}"} {"\n"}
      </Text>
      <Text style={styles.header}>Certificate of Completion {"\n"}</Text>
      <Text>This is to certify that {"\n"}</Text>
      <Text style={styles.name}>
        {personName || "{{personName}}"} {"\n"}
      </Text>
      <Text>
        has successfully completed the {hours || "{{hours}}"} hours
        certification course in {courseName || "{{courseName}}"}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 10,
    borderColor: Colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 50,
    alignItems: "center",
  },
  issuer: {
    color: Colors.red100,
  },
  header: {
    color: Colors.red100,
    fontSize: 24,
    fontWeight: "600",
  },
  name: {
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
