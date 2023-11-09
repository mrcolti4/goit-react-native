import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 45,
    minHeight: 490,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
});

const UserForm = ({ children }) => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShownKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShownKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={
            isShownKeyboard ? { ...styles.form, paddingBottom: 0 } : styles.form
          }
        >
          {children}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default UserForm;
