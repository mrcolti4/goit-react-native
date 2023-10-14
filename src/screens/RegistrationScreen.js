import { Text, StyleSheet, View, Image } from "react-native";
import UserForm from "../components/form/UserForm";
import SubmitButton from "../components/form/SubmitButton";
import FormInput from "../components/form/FormInput";
import { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import SignInUpButton from "../components/form/SignInUpButton";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  form: { gap: 16, marginBottom: 43 },
});

const RegistrationScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <UserForm title="Реєстрація">
        <Image />
        <View style={styles.form}>
          <FormInput
            placeholder="Логін"
            value={userName}
            onChangeText={setUsername}
          />
          <FormInput
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <PasswordInput value={password} onChangeText={setPassword} />
        </View>
        <SubmitButton
          text="Зареєстуватися"
          onPress={() =>
            alert(`Логін: ${userName}\nПошта: ${email}\nПароль: ${password}`)
          }
        />
        <SignInUpButton value="Вже є акаунт? Увійти" />
      </UserForm>
    </View>
  );
};

export default RegistrationScreen;
