import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
interface InputProps {
  label: string;
  value: string;
  onChange: Function;
}

export default function SearchInput({
  label = "",
  value = "",
  onChange,
}: InputProps): JSX.Element {
  return (
    <>
      <View style={styles.view}>
        <AntDesign
          style={styles.antDesign}
          name="search1"
          size={24}
          color="black"
        />
        <Text style={styles.text}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onChange(text)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    backgroundColor: "#f8edeb",
    alignItems: "center",
    borderRadius: 10,
  },
  textInput: {
    padding: 15,
    marginLeft: 5,
    width: "100%",
  },
  text: {
    alignSelf: "center",
  },
  antDesign: {
    marginRight: 10,
    marginLeft: 10,
  },
});
