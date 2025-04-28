import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import HomeScreen from "./screens/HomeScreen";
import StackNavigaionDemo from "./components/stack/StackNavigaionDemo";

export type RootStackParamList = {
  Home: undefined;
  StackNavigaionDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const RootNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackNavigaionDemo" component={StackNavigaionDemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
