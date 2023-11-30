import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";

import User from "../../components/posts/User";
import Post from "../../components/posts/Post";

import { data } from "../../data";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
});

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <User user={user} />
      <FlatList
        data={data}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(post) => post.id}
      />
    </View>
  );
};

export default ProfileScreen;
