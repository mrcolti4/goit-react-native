import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import Title from "../components/Title";
import UploadImage from "../components/UploadImage";
import MainLayout from "../layout/MainLayout";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

const Home = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <UploadImage />
        <Title style={{ marginTop: 92 }}>Natali Romanova</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
          accusamus.
        </Text>
      </View>
    </MainLayout>
  );
};

export default Home;
