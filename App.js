import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/screens/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import MapScreen from "./src/screens/MapScreen";
import CommentsScreen from "./src/screens/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
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
        ></MainStack.Screen>
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerTitle: "Коментарі",
            headerShown: true,
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "rgba(33, 33, 33, 0.8)",
            },
            headerTitleAlign: "center",
          }}
        ></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
