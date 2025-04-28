import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "./StackNavigaionDemo";
import { useNavigation } from "@react-navigation/native";

type StackScreen1NavigationProp = StackNavigationProp<
  StackParamList,
  "StackScreen1"
>;

const StackScreen1: FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProp>();
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
    </View>
  );
};

export default StackScreen1;
