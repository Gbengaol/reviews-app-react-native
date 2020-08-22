import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Homepage from "../screens/homepage";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import HelpStack from "./HelpStack";
import ProfileStack from "./ProfileStack";
import UsersStack from "./UsersStack";

const HomeStackNavigator = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={Homepage}
        options={{
          headerTitle: () => (
            <Header title="GameZone" navigation={navigation} />
          ),
        }}
      />
      <HomeStackNavigator.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
      <HomeStackNavigator.Screen
        name="Help"
        component={HelpStack}
        options={{ title: "Help" }}
      />
      <HomeStackNavigator.Screen
        name="Profile"
        component={ProfileStack}
        options={{ title: "Profile" }}
      />
      <HomeStackNavigator.Screen
        name="Users"
        component={UsersStack}
        options={{ title: "Users" }}
      />
    </HomeStackNavigator.Navigator>
  );
}

export default HomeStack;
