import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import HomeScreen from "./screens/HomeScreen";
import StackNavigaionDemo from "./components/stack/StackNavigaionDemo";

export type RootStackParamList = {
  Home: {
    homeId: string;
  };
  StackNavigaionDemo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const RootNavigator: FC = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ homeId: "Welcome" }}
        options={({ route }) => ({
          title: `Home ${route.params.homeId}`,
        })}
      />
      <Stack.Screen name="StackNavigaionDemo" component={StackNavigaionDemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
