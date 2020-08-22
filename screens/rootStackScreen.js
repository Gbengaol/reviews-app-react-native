import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./signInScreen";
import SignUpScreen from "./signUpScreen";
import SplashScreen from "./splashScreen";

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  );
}
