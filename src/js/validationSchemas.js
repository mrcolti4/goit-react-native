import * as yup from "yup";

const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "The title must contain at least 2 characters.")
    .max(30, "The title cannot exceed 15 characters.")
    .required("Title is required."),
  location: yup
    .string()
    .min(2, "The location must contain at least 2 characters.")
    .max(15, "The location cannot exceed 15 characters.")
    .required("Location is required."),
  img: yup
    .mixed()
    .test("name", "Image is required", (value) => {
      return value != undefined && value[0] && value[0].name !== "";
    })
    .test("type", "Only images are supported", (value) => {
      return value != undefined && value[0] && value[0].type.includes("image");
    }),
});

export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "The username must contain at least 2 characters.")
    .max(32, "The username cannot exceed 32 characters.")
    .required("User name is required field"),
  email: yup
    .string()
    .matches(emailPattern, "Email is not valid")
    .required("Email is required field"),
  password: yup
    .string()
    .min(6, "Password min length 6")
    .max(64, "Password max length 64")
    .required(),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailPattern, "Email is not valid")
    .required("Email is required field"),
  password: yup
    .string()
    .min(6, "Password min length 6")
    .max(64, "Password max length 64")
    .required(),
});
