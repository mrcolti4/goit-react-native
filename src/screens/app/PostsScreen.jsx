import { View, StyleSheet, FlatList } from "react-native";

import User from "../../components/posts/User";
import Post from "../../components/posts/Post";

import { usePosts } from "../../hooks/usePosts";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
});

const ProfileScreen = () => {
  const { user, posts } = usePosts();

  return (
    <View style={styles.container}>
      <User user={user} />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} key={item.id} />}
        keyExtractor={(post) => post.id}
      />
    </View>
  );
};

export default ProfileScreen;
