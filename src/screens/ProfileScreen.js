import { View, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import Icon from "@expo/vector-icons/Feather";

import Title from "../components/posts/Title";
import UploadImage from "../components/posts/UploadImage";
import Post from "../components/posts/Post";
import MainLayout from "../layout/MainLayout";

import { data } from "../data.js";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  logOut: { position: "absolute", top: 22, right: 16 },
});

const PostsScreen = () => {
  return (
    <>
      <MainLayout>
        <View style={styles.container}>
          <UploadImage />
          <Icon
            name="log-out"
            color="#BDBDBD"
            size={24}
            style={styles.logOut}
          />
          <Title style={{ marginTop: 92 }}>Natali Romanova</Title>
          <FlatList
            data={data}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={(post) => post.id}
            numColumns={1}
          />
        </View>
      </MainLayout>
    </>
  );
};

export default PostsScreen;
