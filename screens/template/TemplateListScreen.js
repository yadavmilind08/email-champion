import { View, StyleSheet, Text, ScrollView } from "react-native";
import { EnergyBillTemplateScreen } from "./EnergyBillTemplateScreen";
import { CertificateTemplateScreen } from "./CertificateTemplateScreen";
import { MusicEventTemplateScreen } from "./MusicEventTemplateScreen";
import { Colors } from "../../constants/styles";

export const TemplateListScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Energy Bill Template</Text>
          <EnergyBillTemplateScreen />
        </View>
        <View style={styles.tempate}>
          <Text style={styles.label}>Certificate Template</Text>
          <CertificateTemplateScreen />
        </View>
        <View style={styles.tempate}>
          <Text style={styles.label}>Musical Event Template</Text>
          <MusicEventTemplateScreen />
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
  label: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  tempate: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.black,
  },
});
