import { StyleSheet, View, Text } from "react-native";
import { Card } from "./Card";
import { IconButton } from "./IconButton";

export const SummaryCard = ({ count, label, onPress }) => {
  return (
    <View style={styles.rootContainer}>
      <Card onPress={onPress}>
        <View style={styles.cardSection}>
          <View style={styles.firstSection}>
            <Text style={[styles.label, styles.count]}>{count}</Text>
          </View>
          <View style={[styles.secondSection]}>
            <Text style={[styles.label, styles.contact]}>{label}</Text>
            <View style={styles.view}>
              <Text style={[styles.label, styles.viewLabel]}>View</Text>
              <IconButton icon="caret-forward" color="white" size={24} />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  cardSection: {
    flexDirection: "row",
  },
  label: {
    color: "white",
  },
  halfSection: {
    flex: 1,
  },
  secondSection: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  count: {
    fontSize: 100,
    fontWeight: "bold",
  },
  contact: {
    fontSize: 32,
    fontWeight: "bold",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewLabel: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
