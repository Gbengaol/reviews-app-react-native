import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerType="slide">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
