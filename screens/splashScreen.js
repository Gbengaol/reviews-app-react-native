import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import CustomButton from "../shared/custom-button";
import * as Animatable from "react-native-animatable";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function SplashScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/gbenga.jpg")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={{ ...styles.footer, backgroundColor: colors.background }}
        animation="fadeInUpBig"
        duration={1500}
      >
        <Text style={styles.title}>Welcome to Gbenga's Mobile App</Text>
        <Text style={{ ...styles.text, color: colors.text }}>
          Please sign in to get started!
        </Text>
        <View style={styles.button}>
          <CustomButton
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          >
            <View style={globalStyles.buttonText}>
              <Text
                style={{
                  color: colors.background,
                  fontSize: 16,
                  paddingRight: 20,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Get Started
              </Text>
              <View>
                <FontAwesome
                  name="chevron-right"
                  size={16}
                  color={colors.background}
                />
              </View>
            </View>
          </CustomButton>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f01d71",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  logo: {
    height: heightLogo,
    width: heightLogo,
    borderRadius: 500,
  },
  title: {
    color: "#f01d71",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "#000",
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
