import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
// import Streaming from "../pages/Streaming";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Live Camarote" component={Home} />
        {/** <Stack.Screen name="Live Streaming" component={Streaming} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
