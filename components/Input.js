import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../constants/styles";

export const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  isWhiteLabel = true,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text
        style={[
          styles.label,
          isWhiteLabel ? styles.whiteLabelColor : styles.blackLabelColor,
          isInvalid && styles.labelInvalid,
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
  },
  blackLabelColor: {
    color: Colors.black,
  },
  whiteLabelColor: {
    color: Colors.white,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
