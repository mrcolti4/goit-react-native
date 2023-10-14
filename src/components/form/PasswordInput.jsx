import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormInput from "./FormInput";

const styles = StyleSheet.create({
  passwordWrapp: { position: "relative" },
  showBtn: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: 25 / -2 }],
    color: "#1B4371",
    fontSize: 16,
    zIndex: 5,
  },
});

const PasswordInput = ({ ...fields }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.passwordWrapp}>
      <FormInput
        {...fields}
        placeholder="Пароль"
        secureTextEntry={!showPassword}
      />
      <Text style={styles.showBtn} onPress={togglePassword}>
        {showPassword ? "Сховати" : "Показати"}
      </Text>
    </View>
  );
};

export default PasswordInput;
