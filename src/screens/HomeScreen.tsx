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

      {/* Stack Navigation */}
      <Button
        title="Stack Navigation Demo"
        onPress={() => navigation.navigate("StackNavigaionDemo")}
      />

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        Home: {route.params.homeId}
      </Text>

      {/* Bottom Tab Navigation */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Tab Navigation Demo
        </Text>
        <Button
          title="Tab Navigation Demo"
          onPress={() => navigation.navigate("TabDemo")}
        />
      </View>

      {/* Drawer Navigation */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Drawer Navigation Demo
        </Text>
        <Button
          title="Drawer Navigation Demo"
          onPress={() =>
            navigation.navigate("DrawerDemo", {
              drawerId: "Drawer ID from Home Screen",
            })
          }
        />
      </View>

      {/* Advance Concepts */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Advance Concepts
        </Text>
        <Button
          title="Advance Concepts"
          onPress={() => navigation.navigate("AdvanceConcepts")}
        />
      </View>
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
