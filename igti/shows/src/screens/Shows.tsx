import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowList from "../components/ShowList/ShowList";
import ShowDetail from "../components/ShowDetail/ShowDetail";
import SearchInput from "../components/Form/SearchInput";
import { AppContext } from "../context/AppContext";
import { SET_SEARCH_TERM } from "../types";

const Shows = () => {
  const { state, dispatch } = useContext(AppContext);

  const setSearchTerm = (term: string) => {
    dispatch({ type: SET_SEARCH_TERM, payload: term });
  };

  return (
    <>
      <View style={styles.parent}>
        <View style={styles.search}>
          <SearchInput
            value={state?.searchTerm!}
            label="Nome"
            onChange={setSearchTerm}
          />
        </View>
        <View style={styles.list}>
          <ShowList />
        </View>
        <View style={styles.detail}>
          <ShowDetail />
        </View>
      </View>
    </>
  );
};

export default Shows;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#264653",
  },
  search: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  list: {
    flex: 8,
  },
  detail: {
    flex: 4,
  },
});
