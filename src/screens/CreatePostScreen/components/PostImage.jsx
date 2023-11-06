import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
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

const PostImage = ({ image, setImage }) => {
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} />}
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="camera" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

export default PostImage;
