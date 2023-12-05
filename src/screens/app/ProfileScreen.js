import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

import { selectUser } from "../../redux/auth/selectors";

import Logout from "../../components/ui/Logout";
import Title from "../../components/posts/Title";
import UploadImage from "../../components/posts/UploadImage";
import Post from "../../components/posts/Post";
import MainLayout from "../../layout/MainLayout";

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
  const user = useSelector(selectUser);

  return (
    <MainLayout>
      <View style={styles.container}>
        <UploadImage />
        <Logout style={styles.logOut} />
        <Title style={{ marginTop: 92 }}>
          {user?.displayName ?? "Anonymous"}
        </Title>
        <FlatList
          data={data}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(post) => post.id}
          numColumns={1}
        />
      </View>
    </MainLayout>
  );
};

export default PostsScreen;
