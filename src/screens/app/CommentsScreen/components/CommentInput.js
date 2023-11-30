import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    paddingLeft: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 34,
    height: 34,
    borderRadius: 16,
    backgroundColor: "#FF6C00",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CommentInput = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} placeholder="Коментувати..." />
      <TouchableOpacity style={styles.button}>
        <Icon name="arrow-up" color="#fff" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;
