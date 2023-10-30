import * as ImagePicker from "expo-image-picker";

import { useState } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -Dimensions.get("window").width * 0.14 }],
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  uploadBtnContainer: {
    position: "absolute",
    bottom: 14,
    right: -13,
    zIndex: 5,
  },
  uploadBtn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnAdd: {
    borderColor: "#FF6C00",
  },
  btnRemove: {
    borderColor: "#E8E8E8",
    backgroundColor: "#fff",
  },
  iconAdd: {
    color: "#FF6C00",
  },
  iconRemove: {
    color: "#E8E8E8",
  },
});

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.canceled) {
      setImage(null);
      return;
    }
    setImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={[styles.uploadBtn, image ? styles.btnRemove : styles.btnAdd]}
        >
          <Icon
            name={image ? "remove" : "add"}
            size={22}
            style={image ? styles.iconRemove : styles.iconAdd}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;
