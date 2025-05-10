import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../RootNavigator";
import { Notification } from "./HomeScreen";

type SingleNotificationRouteProp = RouteProp<
  RootStackParamList,
  "SingleNotification"
>;

const SingleNotification: FC = () => {
  const route = useRoute<SingleNotificationRouteProp>();
  const { notification } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.notificationCard}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.body}>{notification.body}</Text>
          <Text style={styles.timestamp}>
            {new Date(notification.timestamp).toLocaleString()}
          </Text>
          {notification.data && (
            <View style={styles.dataContainer}>
              <Text style={styles.dataTitle}>Additional Data:</Text>
              <Text style={styles.dataText}>
                {JSON.stringify(notification.data, null, 2)}
              </Text>
            </View>
          )}
        </View>
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
  notificationCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  body: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    lineHeight: 22,
  },
  timestamp: {
    fontSize: 14,
    color: "#999",
    marginBottom: 16,
  },
  dataContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  dataText: {
    fontSize: 14,
    color: "#666",
  },
});

export default SingleNotification;
