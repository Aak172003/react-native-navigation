import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AdvanceConceptsParamsList } from "../screens/AdvanceConcepts";
import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";

const topics = [
  {
    id: 1,
    title: "FlatListDemo",
    route: "FlatListDemo",
  },
  {
    id: 2,
    title: "FlatListDemo",
    route: "FlatListDemo",
  },
];

// It contains params list and current page name
type AdvanceConceptDemoProps = StackNavigationProp<
  AdvanceConceptsParamsList,
  "AdvanceConceptDemo"
>;

type props = {
  navigation: AdvanceConceptDemoProps;
};

const AdvanceConceptDemo: FC<props> = ({ navigation }) => {
  const stackNavigation = useNavigation<AdvanceConceptDemoProps>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        AdvanceConceptDemo
      </Text>
{/* 
      <Button
        title="FlatListDemo"
        onPress={() => stackNavigation.navigate("FlatListDemo")}
      /> */}

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
            onPress={() => navigation.navigate(item.route as never)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AdvanceConceptDemo;
