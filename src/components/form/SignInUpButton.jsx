import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

const SignInUpButton = ({ children }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SignInUpButton;
