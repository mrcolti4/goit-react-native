import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

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
  const navigation = useNavigation();

  const { id, imgSrc, title, msgCount, likesCount, location, coordinates } =
    post;

  return (
    <View style={styles.post}>
      <Image style={styles.img} source={imgSrc} />
      <View style={styles.descr}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <TouchableOpacity
              style={styles.info}
              onPress={() => navigation.navigate("Comments")}
            >
              <Icon
                name="message-circle"
                size={20}
                color="#FF6C00"
                style={{ transform: [{ rotateY: "180deg" }] }}
              />
              <Text style={styles.stat}>{msgCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Icon name="thumbs-up" size={20} color="#FF6C00" />
            <Text style={styles.stat}>{likesCount}</Text>
          </View>
          <View style={[styles.info, { marginLeft: "auto" }]}>
            <TouchableOpacity
              style={styles.info}
              onPress={() => navigation.navigate("MapScreen", { coordinates })}
            >
              <Icon name="map-pin" size={20} color="#BDBDBD" />
              <Text style={[styles.stat, { textDecorationLine: "underline" }]}>
                {location}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
