import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Shows from "./src/screens/Shows";
import NewShow from "./src/screens/NewShow";
import TabBar from "./src/components/TabBar/TabBar";
import { AppContext, INITIAL_STATE, reducer } from "./src/context/AppContext";

const BottomTab = createBottomTabNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <BottomTab.Navigator tabBar={(props) => <TabBar {...props} />}>
          <BottomTab.Screen name="Home" component={Home} />
          <BottomTab.Screen name="Shows" component={Shows} />
          <BottomTab.Screen name="NewShow" component={NewShow} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
