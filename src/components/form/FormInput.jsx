import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    lineHeight: 1,
    padding: 10,
    borderRadius: 5,
    color: "#212121",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

const FormInput = ({ placeholder, ...fields }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      {...fields}
    />
  );
};

export default FormInput;
