import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
  },
  btnActive: {
    backgroundColor: "#FF6C00",
  },
  textActive: {
    color: "#fff",
  },
});

const PostBtn = ({ children, isFilled }) => {
  return (
    <TouchableOpacity
      disabled={!isFilled}
      style={[styles.btn, isFilled ? styles.btnActive : null]}
    >
      <Text style={[styles.text, isFilled ? styles.textActive : null]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PostBtn;
