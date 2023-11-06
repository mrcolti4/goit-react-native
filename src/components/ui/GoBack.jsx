import Icon from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const GoBack = ({ style }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <Icon
      onPress={onPress}
      name="arrow-left"
      size={22}
      color="#212121"
      style={style}
    />
  );
};

export default GoBack;
