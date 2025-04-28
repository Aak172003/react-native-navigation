import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/RootNavigator';

export default function App() {
  return (

    // It means that wrap the whole app in the NavigationContainer
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text style={styles.headerText}>Hello World</Text>
        <StatusBar style="auto" />
      </View> */}


      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
