import { useFormik } from "formik";
import { View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/Feather";

import PostInput from "./components/PostInput";
import PostImage from "./components/PostImage";
import PostBtn from "./components/PostBtn";

import { createPostSchema } from "../../../js/validationSchemas";
import DeletePost from "./components/DeletePost";

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

  const { handleChange, values, resetForm, isValid } = useFormik({
    initialValues: {
      title: "",
      location: "",
      img: "",
      coords: "",
    },
    validationSchema: createPostSchema,
  });

  const handleSubmit = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert("Error", "Dont have permission for geolocation");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setPostCoords(coords);
    navigation.navigate("Posts");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <PostImage image={postImg} setImage={setPostImg} />
        <View style={{ gap: 16 }}>
          <PostInput
            placeholder="Назва..."
            value={postTitle}
            onChangeText={setPostTitle}
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
              value={postLocation}
              onChangeText={setPostLocation}
            />
          </View>
        </View>
        <PostBtn onPress={handleSubmit} disabled={!isValid}>
          Опубліковати
        </PostBtn>
      </View>
      <DeletePost resetForm={resetForm} />
    </View>
  );
};

export default CreatePostScreen;
