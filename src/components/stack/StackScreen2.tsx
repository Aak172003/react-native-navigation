import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./StackNavigaionDemo";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

type StackScreen2NavigationProp = StackNavigationProp<
  StackParamList,
  "StackScreen2"
>;

type StackScreen2RouteProps = RouteProp<StackParamList, "StackScreen2">;

const StackScreen2: FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<StackScreen2RouteProps>();

  // Safely access itemId with optional chaining
  const itemId = route.params?.itemId;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>StackScreen2</Text>
      <Button
        title="Go to StackScreen1"
        onPress={() => navigation.navigate("StackScreen1")}
      />

      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {itemId || "No item ID provided"}
      </Text>
    </View>
  );
};

export default StackScreen2;
