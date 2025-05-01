import { View, Text } from "react-native";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdvanceConceptDemo from "../AdvanceConceptCompoenent/AdvanceConceptDemo";
import FlatListDemo from "../AdvanceConceptCompoenent/FlatListDemo";
import SectionListDemo from "../AdvanceConceptCompoenent/SectionListDemo";
import TouchableScreen from "../AdvanceConceptCompoenent/TouchableScreen";

export type AdvanceConceptsParamsList = {
  AdvanceConceptDemo: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableScreen: undefined;
};

const Stack = createStackNavigator<AdvanceConceptsParamsList>();

const AdvanceConcepts: FC<AdvanceConceptsParamsList> = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="AdvanceConceptDemo" component={AdvanceConceptDemo} />
      <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
      <Stack.Screen name="SectionListDemo" component={SectionListDemo} />
      <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
    </Stack.Navigator>
  );
};

export default AdvanceConcepts;
