import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/Feather";

import PostInput from "./components/PostInput";
import PostImage from "./components/PostImage";
import PostBtn from "./components/PostBtn";
import DeletePost from "./components/DeletePost";
import UploadProgressAlert from "./components/UploadProgressAlert";

import { createPostSchema } from "../../../js/validationSchemas";
import { writeDataToFirestore } from "../../../api/dbApi";
import { storage } from "../../../config";

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
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(false);

  const uploadPost = async () => {
    const response = await fetch(values.imgUrl);
    const blob = await response.blob();
    const storageRef = ref(storage, "post-img/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);
    uploadTask.on(
      "state_changed",
      (snap) => {
        setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);

        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          return Alert.alert("Error", "Dont have permission for geolocation");
        }

        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };

        writeDataToFirestore({ ...values, imgUrl, coords })
          .then(() => {
            resetForm();
            navigation.navigate("Posts");
          })
          .finally(() => {
            setIsSubmitting(false);
            setModal(false);
          });
      }
    );
  };

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
        progress={progress.toFixed(2)}
      />
    </View>
  );
};

export default CreatePostScreen;
