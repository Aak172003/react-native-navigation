import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";

type DrawerParamList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
  DrawerScreen3: undefined;
};

type DrawerNavigationDemoRouteProp = RouteProp<
  RootStackParamList,
  "DrawerDemo"
>;

type RootNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Drawer = createDrawerNavigator<DrawerParamList>();

type DrawerScreen1Props = {
  // paramslist, route name
  navigation: DrawerNavigationProp<DrawerParamList, "DrawerScreen1">;
};
type DrawerScreen2Props = {
  // paramslist, route name
  navigation: DrawerNavigationProp<DrawerParamList, "DrawerScreen2">;
};
type DrawerScreen3Props = {
  // paramslist, route name
  navigation: DrawerNavigationProp<DrawerParamList, "DrawerScreen3">;
};

const DrawerScreen1: FC<DrawerScreen1Props> = ({ navigation }) => {
  const rootNavigation = useNavigation<RootNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drawer Screen 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />

      <Button
        title="Go to Home from Drawer Screen 1"
        onPress={() =>
          rootNavigation.navigate("Home", {
            homeId: "Welcome To Home from Drawer Screen 1",
          })
        }
      />
    </View>
  );
};

const DrawerScreen2: FC<DrawerScreen2Props> = ({ navigation }) => {
  const rootNavigation = useNavigation<RootNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drawer Screen 2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />

      <Button
        title="Go to Home from Drawer Screen 2"
        onPress={() =>
          rootNavigation.navigate("Home", {
            homeId: "Welcome To Home from Drawer Screen 2",
          })
        }
      />
    </View>
  );
};

const DrawerScreen3: FC<DrawerScreen3Props> = ({ navigation }) => {
  const rootNavigation = useNavigation<RootNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Drawer Screen 3</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />

      <Button
        title="Go to Home from Drawer Screen 3"
        onPress={() =>
          rootNavigation.navigate("Home", {
            homeId: "Welcome To Home from Drawer Screen 3",
          })
        }
      />
    </View>
  );
};

const DrawerNavigationDemo: FC = () => {
  const route = useRoute<DrawerNavigationDemoRouteProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text style={{ fontSize: 20, fontWeight: "bold" }}>
    //     Drawer ID: {route.params.drawerId}
    //   </Text>

    //   <Button
    //     title="Go to Home"
    //     onPress={() =>
    //       rootNavigation.navigate("Home", {
    //         homeId: "Welcome To Home from Drawer Demo",
    //       })
    //     }
    //   />
    // </View>

    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
      <Drawer.Screen name="DrawerScreen3" component={DrawerScreen3} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
