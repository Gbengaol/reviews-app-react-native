import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Homepage from "../screens/homepage";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

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
    </HomeStackNavigator.Navigator>
  );
}

export default HomeStack;
