import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import UserForm from "../components/form/UserForm";
import SubmitButton from "../components/form/SubmitButton";
import FormInput from "../components/form/FormInput";
import PasswordInput from "../components/form/PasswordInput";
import SignInUpButton from "../components/form/SignInUpButton";
import FormContainer from "../components/form/FormContainer";
import UploadImage from "../components/posts/UploadImage";
import FormTitle from "../components/posts/Title";
import NavigateLink from "../components/ui/NavigateLink";
import MainLayout from "../layout/MainLayout";

const styles = StyleSheet.create({
  form: { gap: 16, marginBottom: 43 },
});

const RegistrationScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const onPress = () => {
    if (!email || !password || !userName) {
      return;
    }
    navigation.navigate("Home");
  };
  return (
    <MainLayout>
      <FormContainer>
        <UserForm>
          <UploadImage />
          <FormTitle style={{ marginTop: 93 }}>Реєстрація</FormTitle>
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
          <SignInUpButton>
            Вже є акаунт?{" "}
            <NavigateLink to={{ screen: "Login" }}>Увійти</NavigateLink>
          </SignInUpButton>
        </UserForm>
      </FormContainer>
    </MainLayout>
  );
};

export default RegistrationScreen;
