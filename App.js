import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/RootNavigator';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';


export default function App() {


  useEffect(() => {
    requestPermissionsAndroid();
  }, []);


  const requestPermissionsAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );


    console.log("PermissionsAndroid.RESULTS.granted :::::::::::::: ", PermissionsAndroid.RESULTS.granted)


    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      console.log("if :::::::::::::: ", granted)
      Alert.alert('Permission granted');
      getToken();
    } else {
      console.log("else :::::::::::::: ", granted)
      Alert.alert('Permission denied');
    }
  };


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("remoteMessage :::::::::::::: ", remoteMessage)
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  const getToken = async () => {
    const token = await messaging().getToken();

    // This is the token that we need to send to the server
    // or we can called it as a FCM token
    console.log("token :::::::::::::: ", token)
  }

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
