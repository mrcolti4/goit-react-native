import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Feather";

import { logout } from "../../redux/auth/thunk";
import { selectError } from "../../redux/root/selectors";

const Logout = ({ style }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = async () => {
    await dispatch(logout()).unwrap();

    if (!error) {
      navigation.navigate("Login");
    }
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
