import { View, Text, StyleSheet, Button } from "react-native";
import React, { FC } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
        title="Stack Navigation Demo"
        onPress={() => navigation.navigate("StackNavigaionDemo")}
      />

      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Home Id : {route.params.homeId}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
