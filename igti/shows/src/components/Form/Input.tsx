import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChange: Function;
}

export default function Input({
  label = "",
  value = "",
  onChange,
}: InputProps): JSX.Element {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f8edeb",
    padding: 10,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    color: "#dcdcdc",
    marginBottom: 5,
  },
});
