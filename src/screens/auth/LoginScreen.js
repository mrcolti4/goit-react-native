import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { login } from "../../redux/auth/thunk";

import UserForm from "../../components/form/UserForm";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import PasswordInput from "../../components/form/PasswordInput";
import SubmitButton from "../../components/form/SubmitButton";
import SignInUpButton from "../../components/form/SignInUpButton";
import FormTitle from "../../components/posts/Title";
import NavigateLink from "../../components/ui/NavigateLink";
import MainLayout from "../../layout/MainLayout";
import { loginSchema } from "../../js/validationSchemas";

const styles = StyleSheet.create({
  form: {
    gap: 16,
    marginBottom: 43,
  },
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    setSubmitting(true);
    dispatch(login(values))
      .unwrap()
      .then(() => navigation.navigate("Home"))
      .finally(() => setSubmitting(false));
  };

  const {
    handleChange,
    handleSubmit,
    setFieldTouched,
    setSubmitting,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <MainLayout>
      <FormContainer>
        <UserForm>
          <View style={styles.form}>
            <FormTitle style={{ marginTop: 32 }}>Увійти</FormTitle>
            <FormInput
              error={errors.email}
              touched={touched.email}
              value={values.email}
              placeholder="Адреса електронної пошти"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            <PasswordInput
              error={errors.password}
              touched={touched.password}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
          </View>
          <SubmitButton
            disabled={!isValid || !dirty || isSubmitting}
            onPress={handleSubmit}
          >
            Увійти
          </SubmitButton>
          <SignInUpButton>
            Немає акаунту?{" "}
            <NavigateLink to={{ screen: "Registration" }}>
              Зареєструватися
            </NavigateLink>
          </SignInUpButton>
        </UserForm>
      </FormContainer>
    </MainLayout>
  );
};

export default LoginScreen;
