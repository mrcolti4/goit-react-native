import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
});

const FormContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FormContainer;
