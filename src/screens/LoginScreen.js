import { useState } from "react";
import { StyleSheet, View } from "react-native";
import UserForm from "../components/form/UserForm";
import FormContainer from "../components/form/FormContainer";
import FormInput from "../components/form/FormInput";
import PasswordInput from "../components/form/PasswordInput";
import SubmitButton from "../components/form/SubmitButton";
import SignInUpButton from "../components/form/SignInUpButton";

const styles = StyleSheet.create({
  form: {
    gap: 16,
    marginBottom: 43,
  },
});

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <FormContainer>
      <UserForm title="Увійти">
        <View style={styles.form}>
          <FormInput
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
          />
          <PasswordInput value={password} onChangeText={setPassword} />
        </View>
        <SubmitButton text="Увійти" />
        <SignInUpButton value="Немає акаунту? Зареєструватися" />
      </UserForm>
    </FormContainer>
  );
};

export default LoginScreen;
