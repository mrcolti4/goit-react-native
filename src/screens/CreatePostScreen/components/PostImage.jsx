import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  iconWrapper: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  deletePhotoBtn: {
    position: "absolute",
    top: 10,
    right: 5,
    zIndex: 15,
    elevation: Platform.OS === "android" ? 50 : 0,
  },
});

const PostImage = () => {
  //Camera state
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const makePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setImage(uri);
    }
  };

  return (
    <Camera type={type} ref={setCameraRef}>
      <View
        style={[
          styles.container,
          !hasPermission && { backgroundColor: "#F6F6F6" },
        ]}
      >
        {image && (
          <>
            <Image
              style={{ width: 343, height: 240 }}
              source={{ uri: image }}
            />
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={styles.deletePhotoBtn}
            >
              <Icon name="x" size={24} />
            </TouchableOpacity>
          </>
        )}
        {hasPermission ? (
          <TouchableOpacity style={styles.iconWrapper} onPress={makePhoto}>
            <Icon name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        ) : (
          <Icon name="camera-off" size={24} color="#000" />
        )}
      </View>
    </Camera>
  );
};

export default PostImage;
