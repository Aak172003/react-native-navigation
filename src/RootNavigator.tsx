import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
const RootNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
