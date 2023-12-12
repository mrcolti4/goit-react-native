import { Modal, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centered_modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000090",
  },
  modal_body: {
    backgroundColor: "white",
    width: 250,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  progress_bar: {
    height: 5,
    width: "80%",
    backgroundColor: "#EBE2E0",
  },
  filled_bar: {
    height: "100%",
    backgroundColor: "#0083FF",
  },
});

const UploadProgressAlert = ({
  modalVisible,
  setModalVisible,
  progress = 50,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centered_modal}>
        <View style={styles.modal_body}>
          <Text>Post upload progress: {progress}%</Text>
          <View style={styles.progress_bar}>
            <View style={[styles.filled_bar, { width: `${progress}%` }]}></View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UploadProgressAlert;
