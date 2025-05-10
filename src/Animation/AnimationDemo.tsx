import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AnimationsConceptsParamsList } from "../screens/AnimationsConcepts";
import { topics } from "../constants/animationTopics";

type AnimationDemoProps = StackNavigationProp<
  AnimationsConceptsParamsList,
  "AnimationDemo"
>;

type props = {
  navigation: AnimationDemoProps;
};

const AnimationDemo: FC<props> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <FlatList
        data={topics}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "black",
              margin: 10,
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate(
                item.route as keyof AnimationsConceptsParamsList
              )
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AnimationDemo;
