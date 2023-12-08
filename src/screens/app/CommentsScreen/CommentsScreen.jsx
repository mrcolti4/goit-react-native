import { View, StyleSheet, Text, Image } from "react-native";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";
import { useRoute } from "@react-navigation/native";

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
  noComment: {
    textAlign: "center",
    color: "gray",
  },
});

const CommentsScreen = () => {
  const {
    params: { comments },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/images/posts/img-01.png")}
      />
      <View style={styles.commentsBlock}>
        {comments ? (
          comments.map((comment) => <Comment data={comment} />)
        ) : (
          <Text style={styles.noComment}>No comments yet</Text>
        )}
      </View>
      <CommentInput style={styles.input} />
    </View>
  );
};

export default CommentsScreen;
