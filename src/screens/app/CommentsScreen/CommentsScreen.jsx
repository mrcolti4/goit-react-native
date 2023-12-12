import { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";

import { useModifiedPost } from "../../../hooks/useModifiedPost";

import { db } from "../../../config";

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
    height: 240,
  },
  commentsBlock: {
    height: "50%",
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
  const { post } = useModifiedPost();
  const { imgUrl } = post;
  const [comment, setComment] = useState("");
  const postRef = doc(db, "posts", post.id);

  const onClick = () => {
    if (!comment) {
      return;
    }

    try {
      updateDoc(postRef, {
        comments: arrayUnion({
          id: uuidv4(),
          text: comment,
          postedAt: new Date().toString(),
        }),
      });
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: imgUrl }} />
      <View style={styles.commentsBlock}>
        {post?.comments ? (
          <CommentList data={post?.comments} />
        ) : (
          <Text style={styles.noComment}>No comments yet</Text>
        )}
      </View>
      <CommentInput
        style={styles.input}
        onClick={onClick}
        onChangeText={setComment}
        value={comment}
      />
    </View>
  );
};

export default CommentsScreen;
