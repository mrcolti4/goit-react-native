import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const styles = StyleSheet.create({
  post: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  img: {
    width: "100%",
    borderRadius: 5,
  },
  descr: {},
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginVertical: 8,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  stat: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 24,
  },
});

const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <Image style={styles.img} source={post.imgSrc} />
      <View style={styles.descr}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Icon
              name="message-circle"
              size={20}
              color="#FF6C00"
              style={{ transform: [{ rotateY: "180deg" }] }}
            />
            <Text style={styles.stat}>{post.msgCount}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="thumbs-up" size={20} color="#FF6C00" />
            <Text style={styles.stat}>{post.likesCount}</Text>
          </View>
          <View style={[styles.info, { marginLeft: "auto" }]}>
            <Icon name="map-pin" size={20} color="#BDBDBD" />
            <Text style={[styles.stat, { textDecorationLine: "underline" }]}>
              {post.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
