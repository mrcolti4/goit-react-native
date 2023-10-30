import Icon from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Login");
  };

  return (
    <Icon
      onPress={onPress}
      name="log-out"
      color="#BDBDBD"
      size={24}
      style={style}
    />
  );
};

export default Logout;
