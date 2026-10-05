import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../../context/AppContext";
import Detail from "../Detail/Detail";

const ShowDetail = () => {
  const { state } = useContext(AppContext);

  return (
    <View>
      {state?.selected !== null && state ? (
        <Detail selectedItem={state} />
      ) : null}
    </View>
  );
};

export default ShowDetail;

const styles = StyleSheet.create({});
