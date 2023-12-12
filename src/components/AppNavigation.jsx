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
import Home from "../screens/app/Home";
import MapScreen from "../screens/app/MapScreen";
import CommentsScreen from "../screens/app/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator();

const defaultOptions = {
  headerShown: true,
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(33, 33, 33, 0.8)",
  },
  headerTitleAlign: "center",
};

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
        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ ...defaultOptions, headerTitle: "Локація" }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            ...defaultOptions,
            headerTitle: "Коментарі",
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
