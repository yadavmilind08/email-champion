import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { IconButton } from "./IconButton";
import { Colors } from "../constants/styles";

export const Table = ({ columns, keys, data, onRun, onEdit, onDelete }) => {
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity key={index} style={styles.columnHeader}>
              <Text style={styles.columnHeaderTxt}>{column}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );

  const onEditHandler = (item) => {
    onEdit && onEdit(item);
  };

  const onDeleteHandler = (item) => {
    onDelete && onDelete(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                ...styles.tableRow,
                backgroundColor:
                  index % 2 == 1 ? Colors.primary100 : Colors.white,
              }}
            >
              {keys.map((key, index) => {
                return (
                  <Text key={key + index} style={styles.columnRowTxt}>
                    {item[key]}
                  </Text>
                );
              })}
              <Text style={styles.columnRowTxt}>
                <View style={styles.icons}>
                  {onRun && (
                    <IconButton
                      icon="play-outline"
                      size={18}
                      onPress={() => onRun(item)}
                    />
                  )}
                  <IconButton
                    icon="create-outline"
                    size={18}
                    onPress={() => onEditHandler(item)}
                  />
                  <IconButton
                    icon="trash-outline"
                    size={18}
                    onPress={() => onDeleteHandler(item)}
                  />
                </View>
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHeaderTxt: {
    color: Colors.white,
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "20%",
    textAlign: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
  },
});
