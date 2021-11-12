import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Logo from "../../assets/logo.png";
const SplashScreen = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("mainloginscreen");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Image source={Logo} style={{ height: 100, width: 40 }} />
      </View>
      <View style={{ justifyContent: "center", height: 50 }}>
        <Text style={{ color: "#777", fontSize: 18, fontWeight: "bold" }}>
          Lunch Box
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
