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
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
});

const UserForm = ({ children, title }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.form}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserForm;
