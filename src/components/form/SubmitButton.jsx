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
  buttonInvalid: {
    backgroundColor: "gray",
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  textInvalid: {
    color: "#000",
  },
});

const SubmitButton = ({ children, disabled, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.buttonInvalid : ""]}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.text, disabled ? styles.textInvalid : ""]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
