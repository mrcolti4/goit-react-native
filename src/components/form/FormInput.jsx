import { TextInput, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    gap: 5,
  },
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
  errorText: {
    color: "#c50808",
    fontSize: 13,
  },
});

const FormInput = ({ error, touched, ...fields }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#BDBDBD"
        {...fields}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;
