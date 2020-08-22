import React, { useContext } from "react";
const {
  DrawerContentScrollView,
  DrawerItem,
} = require("@react-navigation/drawer");
import { MaterialIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import {
  Drawer,
  Avatar,
  Text,
  Title,
  Caption,
  TouchableRipple,
  Switch,
  useTheme,
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../App";
const { StyleSheet, View, Alert } = require("react-native");

export default function CustomDrawerContent(props) {
  const { clearUserInfo, toggleTheme } = useContext(AuthContext);
  const { dark, colors } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.detailsSection}>
          <Avatar.Image
            style={styles.avatar}
            source={require("../assets/gbenga.jpg")}
            size={50}
          />
          <View>
            <Title style={{ ...styles.name, color: colors.text }}>Gbenga</Title>
            <Caption style={{ ...styles.userName, color: colors.text }}>
              @gbengacodes
            </Caption>
          </View>
        </View>
        <Drawer.Section style={styles.navSection}>
          <DrawerItem
            label={() => <Text style={styles.text}>Home</Text>}
            icon={() => (
              <MaterialIcons size={24} name="home" color={colors.text} />
            )}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            label={() => <Text style={styles.text}>Users</Text>}
            onPress={() => props.navigation.navigate("Users")}
            icon={() => (
              <FontAwesome5 name="users" size={23} color={colors.text} />
            )}
          />
          <DrawerItem
            label={() => <Text style={styles.text}>Profile</Text>}
            onPress={() => props.navigation.navigate("Profile")}
            icon={() => (
              <FontAwesome5 name="user" size={24} color={colors.text} />
            )}
          />
          <DrawerItem
            label={() => <Text style={styles.text}>Help</Text>}
            onPress={() => props.navigation.navigate("Help")}
            icon={() => (
              <MaterialIcons name="help" size={24} color={colors.text} />
            )}
          />
        </Drawer.Section>
        <Drawer.Section title="Theming">
          <TouchableRipple onPress={toggleTheme}>
            <View style={styles.themingSection}>
              <Text
                style={{ ...styles.white, fontWeight: "bold", fontSize: 16 }}
              >
                Dark Mode:
              </Text>
              <View pointerEvents="none">
                <Switch value={dark} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{ ...styles.bottomContent, borderTopColor: colors.text }}
      >
        <TouchableOpacity onPress={clearUserInfo}>
          <DrawerItem
            label={() => <Text style={styles.text}>Sign Out</Text>}
            onPress={() => Alert.alert("Sign Out User")}
            icon={() => (
              <FontAwesome name="sign-out" size={24} color={colors.text} />
            )}
          />
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginRight: 20,
  },
  detailsSection: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  name: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
  userName: {
    fontSize: 16,
  },
  bottomContent: {
    marginBottom: 15,
    borderTopWidth: 1,
  },
  themingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
