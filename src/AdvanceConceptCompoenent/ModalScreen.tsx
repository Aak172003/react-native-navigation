import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { FC, useState } from "react";

const ModalScreen: FC = () => {
  const [showModal, setShowModal] = useState(false);

  console.log(Dimensions.get("window").width);
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => setShowModal(true)}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Show Modal
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showModal}
        // Simple means if transparent true so we can see the background ui if modal is open
        // But if transparent false so we can't see the background ui if modal is open , it show's white background
        transparent={true}
        // onRequestClose is called when the user presses the hardware back button on Android
        // or when the user swipes down on iOS. It's a way to handle modal dismissal
        // through system gestures, providing a consistent user experience
        onRequestClose={() => setShowModal(false)}
        animationType="none"
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Modal Content
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // give its background color
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: Dimensions.get("window").width,
    // // Maximum width
    maxWidth: 400,
  },
  closeButton: {
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
  },
});
export default ModalScreen;
