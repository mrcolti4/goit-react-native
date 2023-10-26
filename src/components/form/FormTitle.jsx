import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
});

const FormTitle = ({ children, marginTop }) => {
  return <Text style={[styles.title, marginTop]}>{children}</Text>;
};

export default FormTitle;
