import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./StackNavigaionDemo";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../RootNavigator";

type StackScreen1NavigationProp = StackNavigationProp<
  StackParamList,
  "StackScreen1"
>;

type RootNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const StackScreen1: FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();

  return (
    <View>
      <Text>StackScreen1</Text>

      <Button
        title="Go to StackScreen2"
        onPress={() =>
          navigation.navigate("StackScreen2", {
            itemId: 86,
          })
        }
      />

      <Button
        title="Go to Home"
        onPress={() =>
          rootNavigation.navigate("Home", {
            homeId: "Welcome To Home from Stack Screen 1",
          })
        }
      />
    </View>
  );
};

export default StackScreen1;
