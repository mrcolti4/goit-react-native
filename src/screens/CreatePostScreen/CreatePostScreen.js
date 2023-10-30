import { View, StyleSheet } from "react-native";
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
});

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <PostImage />
        <View style={{ gap: 16 }}>
          <PostInput placeholder="Назва..." />
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
            />
          </View>
        </View>
        <PostBtn isFilled={false}>Опубліковати</PostBtn>
      </View>
    </View>
  );
};

export default CreatePostScreen;
