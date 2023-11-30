import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import background from "../assets/images/main-bg.jpg";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainLayout = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {children}
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainLayout;
