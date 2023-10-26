import { Text, StyleSheet, View } from "react-native";
import UserForm from "../components/form/UserForm";
import SubmitButton from "../components/form/SubmitButton";
import FormInput from "../components/form/FormInput";
import { useState } from "react";
import PasswordInput from "../components/form/PasswordInput";
import SignInUpButton from "../components/form/SignInUpButton";
import FormContainer from "../components/form/FormContainer";
import UploadImage from "../components/form/UploadImage";
import FormTitle from "../components/form/FormTitle";

const styles = StyleSheet.create({
  form: { gap: 16, marginBottom: 43 },
});

const RegistrationScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onPress = () => {
    if (!email || !password || !userName) {
      return;
    }
    console.log(`Логін: ${userName}\nПошта: ${email}\nПароль: ${password}`);
  };
  return (
    <FormContainer>
      <UserForm>
        <UploadImage />
        <FormTitle marginTop={{ marginTop: 93 }}>Реєстрація</FormTitle>
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
        <SubmitButton onPress={onPress}>Зареєстуватися</SubmitButton>
        <SignInUpButton>Вже є акаунт? Увійти</SignInUpButton>
      </UserForm>
    </FormContainer>
  );
};

export default RegistrationScreen;
