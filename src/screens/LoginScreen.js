import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UserForm from "../components/form/UserForm";
import FormContainer from "../components/form/FormContainer";
import FormInput from "../components/form/FormInput";
import PasswordInput from "../components/form/PasswordInput";
import SubmitButton from "../components/form/SubmitButton";
import SignInUpButton from "../components/form/SignInUpButton";
import FormTitle from "../components/posts/Title";
import NavigateLink from "../components/ui/NavigateLink";
import MainLayout from "../layout/MainLayout";

const styles = StyleSheet.create({
  form: {
    gap: 16,
    marginBottom: 43,
  },
});

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onPress = () => {
    if (!email || !password) {
      return;
    }
    console.log(`Пошта: ${email}\nПароль: ${password}`);
  };
  return (
    <MainLayout>
      <FormContainer>
        <UserForm>
          <View style={styles.form}>
            <FormTitle style={{ marginTop: 32 }}>Увійти</FormTitle>
            <FormInput
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput value={password} onChangeText={setPassword} />
          </View>
          <SubmitButton onPress={onPress}>Увійти</SubmitButton>
          <SignInUpButton>
            <Text style={{ textAlign: "center", justifyContent: "center" }}>
              Немає акаунту?{" "}
              <NavigateLink to={{ screen: "Registration" }}>
                Зареєструватися
              </NavigateLink>
            </Text>
          </SignInUpButton>
        </UserForm>
      </FormContainer>
    </MainLayout>
  );
};

export default LoginScreen;
