import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

const SignInUpButton = ({ value }) => {
  return <Text style={styles.text}>{value}</Text>;
};

export default SignInUpButton;
