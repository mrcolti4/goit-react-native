import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    maxWidth: "100%",
  },
  comment: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    padding: 16,
    gap: 8,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    flex: 1,
  },
  text: {
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
  },
  postedAt: {
    color: "#BDBDBD",
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
  },
});

const Comment = ({ data }) => {
  const formatter = Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    month: "long",
  });
  const date = new Date(data.postedAt);

  const formattedDate = `${formatter.format(
    date
  )}, ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;

  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/images/avt/avatar-01.png")} />
      <View style={styles.comment}>
        <Text style={styles.text}>{data.text}</Text>
        <Text style={styles.postedAt}>{formattedDate}</Text>
      </View>
    </View>
  );
};

export default Comment;
