import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import HomeScreen, { Notification } from "./screens/HomeScreen";
import StackNavigaionDemo from "./components/stack/StackNavigaionDemo";
import TabNavigationDemo from "./components/bottomTab/TabNavigationDemo";
import DrawerNavigationDemo from "./components/drawer/DrawerNavigationDemo";
import AdvanceConcepts from "./screens/AdvanceConcepts";
import NotificationDemo from "./screens/NotificationDemo";
import SingleNotification from "./screens/SingleNotification";
import AnimationsConcepts from "./screens/AnimationsConcepts";

export type RootStackParamList = {
  Home: {
    homeId: string;
  };
  StackNavigaionDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: {
    drawerId: string;
  };
  AdvanceConcepts: undefined;
  NotificationDemo: {
    notifications: Notification[];
  };
  SingleNotification: {
    notification: Notification;
  };
  AnimationsConcepts: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const RootNavigator: FC = () => {
  console.log("Root Navigator Page");
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
      <Stack.Screen name="AdvanceConcepts" component={AdvanceConcepts} />
      <Stack.Screen
        name="NotificationDemo"
        options={{
          title: "Notification Demo",
          headerShown: true,
          headerTitle: "Notification Demo",
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerTitleStyle: {
            color: "#000",
            textAlign: "center",
            alignSelf: "center",
          },
          headerTitleAlign: "center",
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            color: "#000",
          },
        }}
        component={NotificationDemo}
      />
      <Stack.Screen
        name="SingleNotification"
        component={SingleNotification}
        options={{
          headerShown: true,
          headerTitle: "Single Notification",
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
        }}
      />
      <Stack.Screen name="AnimationsConcepts" component={AnimationsConcepts} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
