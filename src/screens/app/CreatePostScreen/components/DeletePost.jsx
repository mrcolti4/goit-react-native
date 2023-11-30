import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const styles = StyleSheet.create({
  deleteIconBtn: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    position: "absolute",
    bottom: 12,
  },
  deleteIcon: {
    paddingHorizontal: 23,
    paddingVertical: 8,
  },
});

const DeletePost = ({ resetForm }) => {
  const onPress = () => {
    Alert.alert("Are you sure?", "If you leave all changes won't save", [
      {
        text: "Yes",
        onPress: () => {
          resetForm();
          navigation.navigate("Posts");
          return;
        },
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.deleteIconBtn}>
      <Icon
        name="trash-2"
        size={24}
        color="#BDBDBD"
        style={styles.deleteIcon}
      />
    </TouchableOpacity>
  );
};

export default DeletePost;
