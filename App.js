import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import RootNavigator from './src/RootNavigator';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import NotificationBox from './src/components/NotificationBox';

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    requestPermissionsAndroid();
  }, []);

  const addNotification = (remoteMessage) => {
    const newNotification = {
      id: Date.now().toString(),
      title: remoteMessage.notification?.title || 'New Message',
      body: remoteMessage.notification?.body || 'You have a new message',
      timestamp: Date.now(),
      data: remoteMessage.data,
    };

    setNotifications(prev => [newNotification, ...prev]);
  };

  const handleNotificationPress = (notification) => {
    // Handle notification press action here
    console.log('Notification pressed:', notification);
  };

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
      console.log("remoteMessage", remoteMessage);
      addNotification(remoteMessage);
      onDisplayNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Handle background messages
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      addNotification(remoteMessage);
    });

    // Handle notification opened app from background state
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage);
      addNotification(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from quit state:', remoteMessage);
          addNotification(remoteMessage);
        }
      });
  }, []);

  const onDisplayNotification = async (remoteMessage) => {
    const permission = await notifee.requestPermission();
    console.log("permission", permission);

    await notifee.displayNotification({
      title: remoteMessage.notification?.title || 'New Message',
      body: remoteMessage.notification?.body || 'You have a new message',

    });
  };

  // With this function, we can get the token of the device
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("FCM Token:", token);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootNavigator />
        <NotificationBox
          notifications={notifications}
          onNotificationPress={handleNotificationPress}
        />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
