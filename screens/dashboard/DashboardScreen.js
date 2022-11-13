import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SummaryCard } from "../../components/SummaryCard";

export const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <SummaryCard
          count={5}
          label="Contacts"
          onPress={() => navigation.navigate("Contacts")}
        ></SummaryCard>
        <SummaryCard
          count={9}
          label="Campaigns"
          onPress={() => navigation.navigate("Campaigns")}
        ></SummaryCard>
        <SummaryCard
          count={3}
          label="Templates"
          onPress={() => navigation.navigate("Templates")}
        ></SummaryCard>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
  },
});
