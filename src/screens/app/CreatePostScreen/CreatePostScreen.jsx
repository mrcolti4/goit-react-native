import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Feather";

import PostInput from "./components/PostInput";
import PostImage from "./components/PostImage";
import PostBtn from "./components/PostBtn";
import DeletePost from "./components/DeletePost";
import UploadProgressAlert from "./components/UploadProgressAlert";

import { createPostSchema } from "../../../js/validationSchemas";
import { writeDataToFirestore } from "../../../api/dbApi";
import {
  uploadImageAndGetCoords,
  useAsync,
} from "../../../hooks/useUploadImage";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  form: {
    gap: 32,
  },
  location: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    left: 0,
    top: 20,
    zIndex: 10,
  },
});

const CreatePostScreen = () => {
  const { handleChange, handleSubmit, resetForm, values, isValid, dirty } =
    useFormik({
      initialValues: {
        title: "",
        location: "",
        imgUrl: "",
        coords: {},
      },
      validationSchema: createPostSchema,
      onSubmit: () => {
        setIsSubmitting(true);
        setModal(true);
        uploadPost();
      },
    });
  const navigation = useNavigation();
  const [callFunc, useCallFunc] = useState(false);
  const { progress, img, coords } = useAsync(
    uploadImageAndGetCoords,
    callFunc,
    values.imgUrl
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(false);

  const uploadPost = async () => {
    useCallFunc(true);
  };

  useEffect(() => {
    if (callFunc && img) {
      writeDataToFirestore({ ...values, imgUrl: img, coords })
        .then(() => {
          resetForm();
          navigation.navigate("Posts");
        })
        .finally(() => {
          setIsSubmitting(false);
          setModal(false);
        });
    }
  }, [callFunc, img]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <PostImage image={values.imgUrl} setImage={handleChange("imgUrl")} />
        <View style={{ gap: 16 }}>
          <PostInput
            placeholder="Назва..."
            value={values.title}
            onChangeText={handleChange("title")}
          />
          <View style={styles.location}>
            <Icon
              name="map-pin"
              size={20}
              color="#BDBDBD"
              style={styles.icon}
            />
            <PostInput
              style={{
                flex: 1,
                paddingLeft: 28,
              }}
              placeholder="Місцевість..."
              value={values.location}
              onChangeText={handleChange("location")}
            />
          </View>
        </View>
        <PostBtn
          onPress={handleSubmit}
          disabled={!isValid || !dirty || isSubmitting}
        >
          Опубліковати
        </PostBtn>
      </View>
      <DeletePost resetForm={resetForm} />
      <UploadProgressAlert
        setModalVisible={setModal}
        modalVisible={modal}
        progress={progress?.toFixed(2)}
      />
    </View>
  );
};

export default CreatePostScreen;
