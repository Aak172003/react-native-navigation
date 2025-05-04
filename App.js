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

  useEffect(() => {
    // Handle background messages
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    // Handle notification opened app from background state
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage);
    });

    // Check if app was opened from a notification when app was closed/quit
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
        }
      });
  }, []);


  const requestPermissionsAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      Alert.alert('Permission granted');
      getToken();
    } else {
      Alert.alert('Permission denied');
    }
  };


  useEffect(() => {
    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  // Display a notification when the app is opened from the notification bar 

  const onDisplayNotification = async (remoteMessage) => {
    // this is remote message data

    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });


    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher',
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
