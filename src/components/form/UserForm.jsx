import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    minHeight: 490,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
});

const UserForm = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.form}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default UserForm;
