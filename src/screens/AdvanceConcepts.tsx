import { View, Text } from "react-native";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AdvanceConceptDemo from "../AdvanceConceptCompoenent/AdvanceConceptDemo";
import FlatListDemo from "../AdvanceConceptCompoenent/FlatListDemo";
import SectionListDemo from "../AdvanceConceptCompoenent/SectionListDemo";
import TouchableScreen from "../AdvanceConceptCompoenent/TouchableScreen";
import ModalScreen from "../AdvanceConceptCompoenent/ModalScreen";
import PullToRefreshDemo from "../AdvanceConceptCompoenent/PullToRefreshDemo";
import DataFetchingDemo from "../AdvanceConceptCompoenent/DataFetchingDemo";
import AxiosDemo from "../AdvanceConceptCompoenent/AxiosDemo";
import ThemeScreenDemo from "../AdvanceConceptCompoenent/ThemeScreenDemo";

export type AdvanceConceptsParamsList = {
  AdvanceConceptDemo: undefined;
  FlatListDemo: undefined;
  SectionListDemo: undefined;
  TouchableScreen: undefined;
  ModalScreen: undefined;
  PullToRefreshDemo: undefined;
  DataFetchingDemo: undefined;
  AxiosDemo: undefined;
  ThemeScreenDemo: undefined;
  
};

const Stack = createStackNavigator<AdvanceConceptsParamsList>();

const AdvanceConcepts: FC<AdvanceConceptsParamsList> = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="AdvanceConceptDemo" component={AdvanceConceptDemo} />
      <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
      <Stack.Screen name="SectionListDemo" component={SectionListDemo} />
      <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="PullToRefreshDemo" component={PullToRefreshDemo} />
      <Stack.Screen name="DataFetchingDemo" component={DataFetchingDemo} />
      <Stack.Screen name="AxiosDemo" component={AxiosDemo} />
      <Stack.Screen name="ThemeScreenDemo" component={ThemeScreenDemo} />
    </Stack.Navigator>
  );
};

export default AdvanceConcepts;
