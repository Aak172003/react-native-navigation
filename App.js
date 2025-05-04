import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/RootNavigator';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

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

    console.log("1111111111111111111111111111111111111")
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("2222222222222222222222222222222222222")
      console.log("remoteMessage :::::::::::::: ", remoteMessage)
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);



  // Display a notification when the app is opened from the notification bar 

  const onDisplayNotification = async (remoteMessage) => {


    // this is remote message data
    console.log("remoteMessage :::::::::::::: ", remoteMessage)

    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });


    console.log("3333333333333333333333333333333333333", remoteMessage.notification)

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

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
