import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Feather";

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "create-post") {
            // iconName = focused ? "add" : "ios-information-circle-outline";
            iconName = "plus";
          } else if (route.name === "profile") {
            // iconName = focused ? "user" : "ios-list";
            iconName = "user";
          } else if (route.name === "posts") {
            iconName = "grid";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="posts" component={PostsScreen} />
      <Tabs.Screen name="create-post" component={CreatePostScreen} />
      <Tabs.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
