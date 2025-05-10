import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BasicAnimation from "../Animation/BasicAnimation";
import AnimationDemo from "../Animation/AnimationDemo";

export type AnimationsConceptsParamsList = {
  AnimationDemo: undefined;
  BasicAnimation: undefined;
};

const Stack = createStackNavigator<AnimationsConceptsParamsList>();

const AnimationsConcepts: FC<AnimationsConceptsParamsList> = () => {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen name="AnimationDemo" component={AnimationDemo} />
      <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
    </Stack.Navigator>
  );
};

export default AnimationsConcepts;
