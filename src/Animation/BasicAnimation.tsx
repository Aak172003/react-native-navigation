import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  Animated,
  Easing,
} from "react-native";
import React, { FC, useRef } from "react";

const BasicAnimation: FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnimX = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleLeftTranslate = () => {
    Animated.timing(translateAnimX, {
      toValue: -110,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
      useNativeDriver: true,
    }).start();
  };

  const handleRightTranslate = () => {
    Animated.timing(translateAnimX, {
      toValue: 110,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
      useNativeDriver: true,
    }).start();
  };

  const handleScaleIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 1.2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleScaleOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      // showsVerticalScrollIndicator={true}
    >
      {/* Fade Animation Demo */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Fade Animation</Text>
      <View style={styles.fadeAnimationContainer}>
        <Animated.View
          // Its opacity animation
          style={[styles.box, styles.fadeBox, { opacity: fadeAnim }]}
        ></Animated.View>

        <View style={styles.buttonContainer}>
          <Button title="Fade In" onPress={handleFadeIn} />
          <Button title="Fade Out" onPress={handleFadeOut} />
        </View>
      </View>

      {/* Translate Animation Demo */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Translate Animation
      </Text>
      <View style={styles.translateAnimationContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {
              transform: [{ translateX: translateAnimX }],
            },
          ]}
        ></Animated.View>

        <View style={styles.buttonContainer}>
          <Button title="Left Translate" onPress={handleLeftTranslate} />
          <Button title="Right Translate" onPress={handleRightTranslate} />
        </View>
      </View>

      {/* Scale Animation Demo */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Scale Animation</Text>
      <View style={styles.scaleAnimationContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.scaleBox,
            { transform: [{ scale: scaleAnim }] },
          ]}
        ></Animated.View>

        <View style={styles.buttonContainer}>
          <Button title="Scale In" onPress={handleScaleIn} />
          <Button title="Scale Out" onPress={handleScaleOut} />
        </View>
      </View>

      {/* Removed duplicate Scale Animation Demo */}
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Scale Animation</Text>
      <View style={styles.scaleAnimationContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.scaleBox,
            { transform: [{ scale: scaleAnim }] },
          ]}
        ></Animated.View>

        <View style={styles.buttonContainer}>
          <Button title="Scale In" onPress={handleScaleIn} />
          <Button title="Scale Out" onPress={handleScaleOut} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fadeAnimationContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fadeBox: {
    backgroundColor: "red",
  },
  translateAnimationContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  translateBox: {
    backgroundColor: "blue",
  },
  scaleAnimationContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  scaleBox: {
    backgroundColor: "green",
  },
});

export default BasicAnimation;
