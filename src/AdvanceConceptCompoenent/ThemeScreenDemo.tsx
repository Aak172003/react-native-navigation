import { View, Text, Button, StyleSheet, Switch } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeScreenDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? "#000" : "#fff",
        },
      ]}
    >
      <Text
        style={[
          styles.header,
          {
            color: isDarkMode ? "#fff" : "#000",
          },
        ]}
      >
        Toggle Theme
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{
          true: "#fff",
          false: "#000",
        }}
        thumbColor={isDarkMode ? "#fff" : "#000"}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ThemeScreenDemo;
