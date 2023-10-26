import { Link } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
  },
});

const NavigateLink = ({ children, ...fields }) => {
  return (
    <Link {...fields} style={styles.text}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

export default NavigateLink;
