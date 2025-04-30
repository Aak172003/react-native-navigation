import { View, Text } from "react-native";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdvanceConceptDemo from "../AdvanceConceptCompoenent/AdvanceConceptDemo";
import FlatListDemo from "../AdvanceConceptCompoenent/FlatListDemo";

export type AdvanceConceptsParamsList = {
  AdvanceConceptDemo: undefined;
  FlatListDemo: undefined;
};

const Stack = createStackNavigator<AdvanceConceptsParamsList>();

const AdvanceConcepts: FC<AdvanceConceptsParamsList> = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="AdvanceConceptDemo" component={AdvanceConceptDemo} />
      <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
    </Stack.Navigator>
  );
};

export default AdvanceConcepts;
