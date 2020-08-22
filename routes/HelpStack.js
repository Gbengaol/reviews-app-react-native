import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../shared/header";
import Help from "../screens/help";

const HelpStackNavigator = createStackNavigator();

function HelpStack({ navigation }) {
  return (
    <HelpStackNavigator.Navigator>
      <HelpStackNavigator.Screen
        name="Help"
        component={Help}
        options={{
          headerTitle: () => (
            <Header title="Help Page" navigation={navigation} />
          ),
        }}
      />
    </HelpStackNavigator.Navigator>
  );
}

export default HelpStack;
