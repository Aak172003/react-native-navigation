import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import StackScreen1 from "./StackScreen1";
import StackScreen2 from "./StackScreen2";

import React from "react";

export type StackParamList = {
  StackScreen1: undefined;

  // This is how i pass the data to the next screen
  StackScreen2: {
    itemId: number;
  };
};
const Stack = createStackNavigator<StackParamList>();

const StackNavigaionDemo: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Stack Screen One",
        }}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: `Stack Screen Two ${route.params?.itemId || ""}`,
        })}
        name="StackScreen2"
        component={StackScreen2}
      />
    </Stack.Navigator>
  );
};

export default StackNavigaionDemo;
