import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Feather";

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen/CreatePostScreen";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Створити публікацію") {
            iconName = "plus";
          } else if (route.name === "profile") {
            iconName = "user";
          } else if (route.name === "Публікації") {
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
          return (
            <Icon
              name="log-out"
              size={22}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarOptions: {
          activeTintColor: "#FF6C00",
          inactiveTintColor: "gray",
        },
      })}
    >
      <Tabs.Screen name="Публікації" component={PostsScreen} />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostScreen}
        options={{
          headerLeft: () => {
            return (
              <Icon
                name="arrow-left"
                size={22}
                color="#212121"
                style={{ marginLeft: 16 }}
              />
            );
          },
          headerRight: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
