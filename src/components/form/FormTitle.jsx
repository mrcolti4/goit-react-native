import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
    paddingTop: 93,
  },
});

const FormTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default FormTitle;
