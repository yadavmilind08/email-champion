import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

export const RadioButton = ({
  data,
  value,
  label,
  isInvalid,
  isRow = true,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const onChangeHandler = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={[styles.radioGroupContainer, !isRow && styles.column]}>
        {data.map((res) => {
          return (
            <View key={res.value} style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  onChangeHandler(res.value);
                }}
              >
                {selectedValue === res.value && (
                  <View style={styles.selectedRadio} />
                )}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  label: {
    color: Colors.black,
    marginBottom: 10,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  radioGroupContainer: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  radioContainer: {
    marginRight: 35,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  radioText: {
    marginLeft: 10,
    color: Colors.black,
  },
  radioCircle: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Colors.primary500,
  },
});
