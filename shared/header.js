import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "../assets/heart_logo.png";
import BackgroundImage from "../assets/game_bg.png";

export default function Header({ title, navigation }) {
  const showMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground style={styles.header} source={BackgroundImage}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={showMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={Logo} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  headerText: {
    fontWeight: "bold",
    letterSpacing: 1.5,
    fontSize: 24,
    color: "#000",
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerImage: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
