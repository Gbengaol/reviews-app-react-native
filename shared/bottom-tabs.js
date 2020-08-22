import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "../routes/HomeStack";
import UsersStack from "../routes/UsersStack";
import ProfileStack from "../routes/ProfileStack";
import HelpStack from "../routes/HelpStack";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#f01d71" }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersStack}
        options={{
          tabBarLabel: "Users",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpStack}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="help" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
