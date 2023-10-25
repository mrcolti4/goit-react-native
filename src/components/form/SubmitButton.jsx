import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

const SubmitButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
