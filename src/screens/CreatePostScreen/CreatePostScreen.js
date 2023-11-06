import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Icon from "@expo/vector-icons/Feather";

import PostInput from "./components/PostInput";
import PostImage from "./components/PostImage";
import PostBtn from "./components/PostBtn";

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
  deleteIconBtn: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    position: "absolute",
    bottom: 12,
  },
  deleteIcon: {
    paddingHorizontal: 23,
    paddingVertical: 8,
  },
});

const CreatePostScreen = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [postImg, setPostImg] = useState(null);

  const clearFields = () => {
    setPostTitle("");
    setPostLocation("");
    setPostImg(null);
  };

  const navigation = useNavigation();
  const onPress = () => {
    if (!postTitle || !postLocation) {
      alert(postTitle);
      navigation.navigate("Posts");
      return;
    }
    Alert.alert("Are you sure?", "If you leave all changes won't save", [
      {
        text: "Yes",
        onPress: () => {
          clearFields();
          navigation.navigate("Posts");
          return;
        },
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ]);
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
        <PostBtn isFilled={false}>Опубліковати</PostBtn>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.deleteIconBtn}>
        <Icon
          name="trash-2"
          size={24}
          color="#BDBDBD"
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostScreen;
