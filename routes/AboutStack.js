import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../screens/about";
import Header from "../shared/header";

const AboutStackNavigator = createStackNavigator();

function AboutStack({ navigation }) {
  return (
    <AboutStackNavigator.Navigator>
      <AboutStackNavigator.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header title="About GameZone" navigation={navigation} />
          ),
        }}
      />
    </AboutStackNavigator.Navigator>
  );
}

export default AboutStack;
