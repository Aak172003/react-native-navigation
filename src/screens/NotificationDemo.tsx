import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { Notification } from "./HomeScreen";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../RootNavigator";

type NotificationDemoRouteProp = RouteProp<RootStackParamList, "NotificationDemo">;

const NotificationDemo: FC = () => {
  const route = useRoute<NotificationDemoRouteProp>();
  const [notificationList, setNotificationList] = useState<Notification[]>(route.params.notifications || []);
  
  // Request permission for notifications
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
      getFCMToken();
    } else {
      Alert.alert(
        "Permission Denied",
        "You won't receive notifications because permission was denied."
      );
    }
  };

  // Get FCM token for this device
  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log("FCM Token:", token);
      // You should send this token to your server to target this device
    } catch (error) {
      console.error("Failed to get FCM token:", error);
    }
  };

  const addNotification = (remoteMessage: any) => {
    const newNotification = {
      id: Date.now().toString(),
      title: remoteMessage.notification?.title || "New Message",
      body: remoteMessage.notification?.body || "You have a new message",
      timestamp: Date.now(),
      data: remoteMessage.data,
    };

    setNotificationList((prev) => [newNotification, ...prev]);
  };

  useEffect(() => {
    // Request permission when component mounts
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("Foreground message received:", remoteMessage);
      addNotification(remoteMessage);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // Handle background messages
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
      addNotification(remoteMessage);
    });

    // Handle notification opened app from background state
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage
      );
      addNotification(remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage
          );
          addNotification(remoteMessage);
        }
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {notificationList.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No notifications yet</Text>
          </View>
        ) : (
          <FlatList
            data={notificationList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.notificationItem}
                // onPress={() => onNotificationPress(item)}
              >
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationBody}>{item.body}</Text>
                <Text style={styles.notificationTime}>
                  {new Date(item.timestamp).toLocaleTimeString()}
                </Text>
              </TouchableOpacity>
            )}
            style={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  notificationItem: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notificationBody: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 10,
    color: "#999",
  },
});
export default NotificationDemo;
