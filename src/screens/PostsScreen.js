import { View, StyleSheet, FlatList } from "react-native";

import { data } from "../data";

import User from "../components/posts/User";
import Post from "../components/posts/Post";

const user = {
  img: require("../assets/images/user.png"),
  username: "Natali Romanova",
  email: "e-mail@example.com",
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  user: {
    marginBottom: 32,
  },
});

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <User user={user} style={styles.user} />
      <FlatList
        data={data}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(post) => post.id}
      />
    </View>
  );
};

export default ProfileScreen;
