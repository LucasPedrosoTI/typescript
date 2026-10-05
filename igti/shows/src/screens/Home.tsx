import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import horror_movie from "../../assets/horror_movie.png";

import SearchInput from "../components/Form/SearchInput";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.viewStyle}>
      <View style={styles.inputContainer}>
        <SearchInput
          label="Nome"
          value={name}
          onChange={(text: string) => setName(text)}
        />
        <Text>{name}</Text>
      </View>
      <Image style={styles.image} source={horror_movie} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  inputContainer: {
    padding: 10,
  },
  image: {
    position: "absolute",
    width: 300,
    height: 300,
    bottom: 0,
    right: 50,
  },
});
