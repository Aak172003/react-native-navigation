import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { FC } from "react";

const TouchableScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TouchableScreen</Text>

      <View style={{ flex: 1, gap: 10, justifyContent: "center" }}>
        <TouchableWithoutFeedback
          onPress={() => console.log("TouchableWithoutFeedback")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* The underlayColor in TouchableHighlight only appears when you press the component.
            It replaces the background color of the component when pressed.
            The View inside is blocking it from being visible because it has its own background color.
            To fix this, we can apply the style directly to the TouchableHighlight instead of a nested View */}
        <TouchableHighlight
          underlayColor="red"
          style={styles.button}
          onPress={() => console.log("TouchableHighlight")}
        >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={() => console.log("TouchableOpacity")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? "red" : "blue",
            },
          ]}
          //   this console log show when i pressed the component from in to out state
          onPress={() => console.log("Pressable")}
          //   this console log show when i just press in the component
          onPressIn={() => console.log("Pressed state: true")}
          //   this console log show when i just press out the component
          onPressOut={() => console.log("Pressed state: false")}
        >
          {({ pressed }) => (
            <Text style={styles.buttonText}>
              {pressed ? "Pressable" : "Pressed Now"}
            </Text>
          )}
        </Pressable>
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
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default TouchableScreen;
