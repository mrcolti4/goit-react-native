import { View, Image, Text } from "react-native";

const Post = ({ post }) => {
  return (
    <View>
      <Image source={post.src} />
      <Text>{post.title}</Text>
      <View></View>
    </View>
  );
};

export default Post;
