import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Users from "../screens/users";
// import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const UsersStackNavigator = createStackNavigator();

function UsersStack({ navigation }) {
  return (
    <UsersStackNavigator.Navigator>
      <UsersStackNavigator.Screen
        name="Users"
        component={Users}
        options={{
          headerTitle: () => (
            <Header title="All Users" navigation={navigation} />
          ),
        }}
      />
    </UsersStackNavigator.Navigator>
  );
}

export default UsersStack;
