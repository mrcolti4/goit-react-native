import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title has to have 2 characters at least")
    .max(30, "Title cannot be longer than 30 symbols")
    .required("Title is required"),
  location: yup
    .string()
    .min(2, "Location has to have 2 characters at least")
    .max(15, "Location cannot be longer than 15 symbols")
    .required("Location is required"),
  img: yup
    .mixed()
    .test("name", "Image is required", (value) => {
      return value != undefined && value[0] && value[0].name !== "";
    })
    .test("type", "Only images are supported", (value) => {
      return value != undefined && value[0] && value[0].type.includes("image");
    }),
});
