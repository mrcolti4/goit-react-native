import React from "react";
import { Text, StyleSheet, View } from "react-native";

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
    <View style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SignInUpButton;
