import React, { useState, createContext, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./shared/custom-drawer-content";
import BottomTabs from "./shared/bottom-tabs";
import RootStackScreen from "./screens/rootStackScreen";
import AsyncStorage from "@react-native-community/async-storage";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export const AuthContext = createContext();

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#fff",
    text: "#000",
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#000",
    text: "#fff",
  },
};

const getFonts = () =>
  Font.loadAsync({
    "alata-regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? CustomDarkTheme : CustomDefaultTheme;
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [token, setToken] = useState(null);
  const setUserToken = async (token) => {
    await AsyncStorage.setItem("token", token);
    setToken(token);
  };

  const clearUserInfo = async () => {
    setToken(null);
    await AsyncStorage.removeItem("token");
  };

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  };

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
    <PaperProvider theme={theme}>
      <AuthContext.Provider
        value={{
          token,
          clearUserInfo,
          setUserToken,
          isDarkMode,
          toggleTheme,
        }}
      >
        {!token ? (
          <NavigationContainer theme={theme}>
            <RootStackScreen />
          </NavigationContainer>
        ) : (
          <NavigationContainer theme={theme}>
            <Drawer.Navigator
              drawerType="slide"
              drawerStyle={{
                backgroundColor: theme.colors.background,
                paddingTop: 50,
                borderColor: "white",
                borderRightWidth: 1,
              }}
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={BottomTabs} />
            </Drawer.Navigator>
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </PaperProvider>
  );
}
