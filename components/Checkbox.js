import React, { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../constants/styles";
import { IconButton } from "./IconButton";

export const Checkbox = ({
  data = [],
  label,
  isInvalid,
  values = [],
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState([...values]);

  function onCheckmarkPress(item) {
    if (selectedValues.includes(item.value)) {
      const newValues = selectedValues.filter((x) => x !== item.value);
      setSelectedValues(newValues);
      onChange && onChange(newValues);
    } else {
      const newValues = [...selectedValues, item.value];
      setSelectedValues(newValues);
      onChange && onChange(newValues);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      {data.map((item) => {
        return (
          <View key={item.value} style={styles.checkbox}>
            <Pressable
              style={[
                styles.checkboxBase,
                selectedValues.includes(item.value) && styles.checkboxChecked,
              ]}
              onPress={() => onCheckmarkPress(item)}
            >
              {selectedValues.includes(item.value) && (
                <IconButton icon="checkmark" size={24} color="white" />
              )}
            </Pressable>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        );
      })}
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
  checkbox: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary500,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: Colors.pink100,
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  name: {
    marginLeft: 10,
  },
});
