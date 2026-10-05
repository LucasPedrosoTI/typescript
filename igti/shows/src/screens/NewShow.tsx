import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import Input from "../components/Form/Input";
import { AppContext } from "../context/AppContext";
import { ADD_ITEM } from "../types";

const NewShow = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [network, setNetwork] = useState("");
  const [country, setCountry] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const submitForm = () => {
    if (name.length === 0) {
      return Alert.alert("Erro", "Favor adicionar um nome", [
        { text: "Fechar" },
      ]);
    }

    const action = {
      type: ADD_ITEM,
      payload: {
        name,
        network,
        country,
        image_thumbnail_path: thumbnail,
        genre,
        status,
      },
    };

    dispatch(action);

    setName("");
    setNetwork("");
    setCountry("");
    setThumbnail("");
    setGenre("");
    setStatus("");

    Alert.alert("Série adicionada com sucesso", "", [
      { text: "OK", style: "cancel" },
    ]);
  };

  return (
    <View style={styles.background}>
      <View style={styles.view}>
        <Input
          label={"Nome:"}
          value={name}
          onChange={(text: string) => setName(text)}
        />
        <Input
          label={"Network:"}
          value={network}
          onChange={(text: string) => setNetwork(text)}
        />
        <Input
          label={"Country:"}
          value={country}
          onChange={(text: string) => setCountry(text)}
        />
        <Input
          label={"Thumbnail:"}
          value={thumbnail}
          onChange={(text: string) => setThumbnail(text)}
        />
        <Input
          label={"Genre:"}
          value={genre}
          onChange={(text: string) => setGenre(text)}
        />
        <Input
          label={"Status:"}
          value={status}
          onChange={(text: string) => setStatus(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => submitForm()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewShow;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#264653",
    flex: 1,
    justifyContent: "center",
  },
  view: {
    padding: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#dcdcdc",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
