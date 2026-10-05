import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IState } from "../../types";

interface Props {
  selectedItem: IState;
}

const Detail = ({ selectedItem }: Props) => {
  const { selected } = selectedItem;

  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selected?.image_thumbnail_path }}
          resizeMode={"cover"}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textInline}>
          <Text style={styles.textNormal}>Nome: </Text>
          <Text style={styles.textBold}>{selected?.name}</Text>
        </View>
        <View style={styles.textInline}>
          <Text style={styles.textNormal}>País: </Text>
          <Text style={styles.textBold}>{selected?.country}</Text>
        </View>
        <View style={styles.textInline}>
          <Text style={styles.textNormal}>Gênero: </Text>
          <Text style={styles.textBold}>{selected?.genre}</Text>
        </View>
        <View style={styles.textInline}>
          <Text style={styles.textNormal}>Network: </Text>
          <Text style={styles.textBold}>{selected?.network}</Text>
        </View>
        <View style={styles.textInline}>
          <Text style={styles.textNormal}>Status: </Text>
          <Text style={styles.textBold}>{selected?.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#2A9D8F",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderColor: "transparent",
  },
  imageContainer: {
    padding: 10,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInline: {
    flexDirection: "row",
  },
  textBold: {
    fontWeight: "bold",
    color: "#dcdcdc",
    fontSize: 15,
  },
  textNormal: {
    color: "#dcdcdc",
    fontSize: 15,
  },
});
