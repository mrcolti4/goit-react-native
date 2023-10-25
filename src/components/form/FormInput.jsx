import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const styles = StyleSheet.create({
  input: {
    fontFamily: "Roboto-Regular",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    height: 50,
    borderRadius: 5,
    color: "#212121",
    fontSize: 16,
  },
});

const FormInput = ({ placeholder, ...fields }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        {...fields}
      />
    </KeyboardAvoidingView>
  );
};

export default FormInput;
