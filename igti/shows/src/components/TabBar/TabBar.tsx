import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
// import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
// import { RouteProp } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const toggleTabBar = (stateIndex: number, tabIndex: number): string =>
  tabIndex === stateIndex ? "#2A9D8F" : "#dcdcdc";

const TabBar = ({ navigation, state }: any) => {
  return (
    <View style={styles.view}>
      <>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign
            name="home"
            size={30}
            color={toggleTabBar(state.index, 0)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Shows")}>
          <Feather name="list" size={30} color={toggleTabBar(state.index, 1)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NewShow")}>
          <MaterialIcons
            name="playlist-add"
            size={30}
            color={toggleTabBar(state.index, 2)}
          />
        </TouchableOpacity>
      </>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#264653",
  },
});
