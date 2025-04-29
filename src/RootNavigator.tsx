import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import HomeScreen from "./screens/HomeScreen";
import StackNavigaionDemo from "./components/stack/StackNavigaionDemo";
import TabNavigationDemo from "./components/bottomTab/TabNavigationDemo";
import DrawerNavigationDemo from "./components/drawer/DrawerNavigationDemo";

export type RootStackParamList = {
  Home: {
    homeId: string;
  };
  StackNavigaionDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: {
    drawerId: string;
  };
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
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
