import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconWrapper: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 11,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

const PostImage = () => {
  //Camera state
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const makePhoto = async () => {
    if (cameraRef) {
      const data = await ImagePicker.launchCameraAsync();

      if (!data.assets) {
        return;
      }

      const uri = data.assets[0].uri;
      await MediaLibrary.createAssetAsync(uri);
      setImage(uri);
    }
  };

  return (
    <Camera type={type} ref={setCameraRef}>
      <View style={styles.container}>
        {image && (
          <Image style={{ width: 343, height: 240 }} source={{ uri: image }} />
        )}
        <TouchableOpacity style={styles.iconWrapper} onPress={makePhoto}>
          <Icon name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

export default PostImage;
