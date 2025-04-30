import { View, Text, Button } from "react-native";
import React, { FC } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AdvanceConceptsParamsList } from "../screens/AdvanceConcepts";
import { useNavigation } from "@react-navigation/native";

// It contains params list and current page name
type AdvanceConceptDemoProps = StackNavigationProp<
  AdvanceConceptsParamsList,
  "AdvanceConceptDemo"
>;

const AdvanceConceptDemo: FC = () => {
  const navigation = useNavigation<AdvanceConceptDemoProps>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        AdvanceConceptDemo
      </Text>
      <Button
        title="FlatListDemo"
        onPress={() => navigation.navigate("FlatListDemo")}
      />
    </View>
  );
};

export default AdvanceConceptDemo;
