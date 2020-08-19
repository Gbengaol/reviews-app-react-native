import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "alata-regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // Load fonts into the application
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
