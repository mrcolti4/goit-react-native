import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

const PostImage = () => {
  const [image, setImage] = useState(null);
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} />}
      <View style={styles.iconWrapper}>
        <Icon name="camera" size={24} color="#BDBDBD" />
      </View>
    </View>
  );
};

export default PostImage;
