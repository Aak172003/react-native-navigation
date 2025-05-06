import { View, Text, StyleSheet, Button } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootNavigator";
import messaging from "@react-native-firebase/messaging";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

export type Notification = {
  id: string;
  title: string;
  body: string;
  timestamp: number;
  data?: any;
};

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (remoteMessage: any) => {
    const newNotification = {
      id: Date.now().toString(),
      title: remoteMessage.notification?.title || "New Message",
      body: remoteMessage.notification?.body || "You have a new message",
      timestamp: Date.now(),
      data: remoteMessage.data,
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  useEffect(() => {
    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("Foreground message received:", remoteMessage);
      addNotification(remoteMessage);
    });

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

    // Check if app was opened from a notification
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

    return unsubscribe;
  }, []);

  console.log("notifications ::::::::::: ", notifications);
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

      {/* Notification Demo */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Notification Demo
        </Text>
        <Button
          title="Notification Demo"
          onPress={() =>
            navigation.navigate("NotificationDemo", {
              notifications: notifications,
            })
          }
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
