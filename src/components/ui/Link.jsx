import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
  },
});

const Link = ({ children }) => {
  return (
    <TouchableOpacity style={styles.text}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Link;
