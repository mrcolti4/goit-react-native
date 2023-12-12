import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { register } from "../../redux/auth/thunk";

import { registerSchema } from "../../js/validationSchemas";

import UserForm from "../../components/form/UserForm";
import SubmitButton from "../../components/form/SubmitButton";
import FormInput from "../../components/form/FormInput";
import PasswordInput from "../../components/form/PasswordInput";
import SignInUpButton from "../../components/form/SignInUpButton";
import FormContainer from "../../components/form/FormContainer";
import UploadImage from "../../components/posts/UploadImage";
import FormTitle from "../../components/posts/Title";
import NavigateLink from "../../components/ui/NavigateLink";
import MainLayout from "../../layout/MainLayout";

const styles = StyleSheet.create({
  form: { gap: 16, marginBottom: 43 },
});

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    setSubmitting(true);
    dispatch(register(values))
      .unwrap()
      .then(() => navigation.navigate("Home"))
      .finally(() => setSubmitting(false));
  };

  const {
    handleChange,
    handleSubmit,
    setFieldTouched,
    setSubmitting,
    isSubmitting,
    isValid,
    dirty,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <MainLayout>
      <FormContainer>
        <UserForm>
          <UploadImage />
          <FormTitle style={{ marginTop: 93 }}>Реєстрація</FormTitle>
          <View style={styles.form}>
            <FormInput
              error={errors.userName}
              touched={touched.userName}
              value={values.userName}
              placeholder="Логін"
              onChangeText={handleChange("userName")}
              onBlur={() => setFieldTouched("userName")}
            />
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
            Зареєстуватися
          </SubmitButton>
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
