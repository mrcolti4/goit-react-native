import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { logout } from "../redux/auth/thunk";
import { selectUser } from "../redux/auth/selectors";
import { auth } from "../config";

import RegistrationScreen from "../screens/auth/RegistrationScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import Home from "../screens/Home";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       // console.log(userAuth);
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={user ? "Home" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
