import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useShows } from "../../hooks/useShows";
import { AppContext } from "../../context/AppContext";
import { Shows, SET_SELECTED_ITEM } from "../../types";

const ShowList = () => {
  const { shows } = useShows();
  const { state, dispatch } = useContext(AppContext);

  const setShows = (shows: Shows[]) => {
    if (shows.length === 0) return;

    const orderedShows = shows?.sort((a, b) =>
      ("" + a.name).localeCompare(b.name!)
    );

    if (state && state?.searchTerm.length > 0) {
      return orderedShows?.filter((show) =>
        show.name
          ?.toLocaleLowerCase()
          .includes(state?.searchTerm.toLowerCase().trim())
      );
    }

    return orderedShows;
  };

  const renderItem = ({ item }: { item: Shows }) => (
    <TouchableOpacity
      onPress={() => dispatch({ type: SET_SELECTED_ITEM, payload: item })}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={setShows(shows!)}
          renderItem={renderItem}
          keyExtractor={(item: Shows) => String(item.id)}
        />
      </View>
    </>
  );
};

export default ShowList;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#2A9D8F",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  list: {
    // marginTop: "",
  },
  text: {
    color: "#dcdcdc",
    fontWeight: "bold",
    fontSize: 15,
  },
});
