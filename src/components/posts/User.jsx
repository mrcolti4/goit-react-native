import { Text, Image, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  descr: {},
  title: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",
    color: "#212121",
  },
  subtitle: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: "rgba(33, 33, 33, 0.80)",
  },
});

const User = ({ user, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.img} source={user.img} />
      <View style={styles.descr}>
        <Text style={styles.title}>{user.username}</Text>
        <Text style={styles.subtitle}>{user.email}</Text>
      </View>
    </View>
  );
};

export default User;
