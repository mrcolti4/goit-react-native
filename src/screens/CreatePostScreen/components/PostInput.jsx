import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    paddingVertical: 15,
  },
});

const PostInput = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

export default PostInput;
