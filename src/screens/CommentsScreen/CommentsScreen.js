import { View, StyleSheet, Text, Image } from "react-native";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 32,
    position: "relative",
  },
  img: {
    maxWidth: "100%",
    borderRadius: 8,
  },
  commentsBlock: {
    gap: 24,
  },
  input: {
    position: "absolute",
    bottom: 16,
    left: 16,
    width: "100%",
  },
});

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/posts/img-01.png")}
      />
      <View style={styles.commentsBlock}>
        <Comment />
      </View>
      <CommentInput style={styles.input} />
    </View>
  );
};

export default CommentsScreen;
