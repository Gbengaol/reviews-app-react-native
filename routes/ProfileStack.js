import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../shared/header";
import Profile from "../screens/profile";

const ProfileStackNavigator = createStackNavigator();

function ProfileStack({ navigation }) {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <Header title="Profile Page" navigation={navigation} />
          ),
        }}
      />
    </ProfileStackNavigator.Navigator>
  );
}

export default ProfileStack;
