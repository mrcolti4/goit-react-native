import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/Feather";

import Logout from "../../components/ui/Logout";
import GoBack from "../../components/ui/GoBack";

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen/CreatePostScreen";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CreatePostTabs() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarHidden: false }}
    >
      <Stack.Screen name="CreatePostHome" component={CreatePostScreen} />
      <Stack.Screen name="DeletePost" component={Home} />
    </Stack.Navigator>
  );
}

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CreatePost") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Posts") {
            iconName = "grid";
          }
          return (
            <View
              style={
                focused
                  ? {
                      width: 70,
                      height: 40,
                      backgroundColor: "#FF6C00",
                      borderRadius: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : null
              }
            >
              <Icon
                name={iconName}
                size={20}
                color={focused ? "#fff" : color}
              />
            </View>
          );
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#212121",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "Roboto-Medium",
          lineHeight: 22,
          color: "#212121",
        },
        headerRight: () => {
          return <Logout style={{ marginRight: 16 }} />;
        },
        tabBarShowLabel: false,
        tabBarOptions: {
          activeTintColor: "#FF6C00",
          inactiveTintColor: "gray",
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerTitle: "Публікації" }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostTabs}
        options={({ route }) => ({
          tabBarStyle: { display: "none" },
          headerLeft: () => {
            return <GoBack style={{ marginLeft: 16 }} />;
          },
          headerRight: null,
          headerTitle: "Створити публікацію",
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
