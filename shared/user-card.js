import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./card";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../styles/globalStyles";
import { useTheme } from "react-native-paper";

export default function UserCard({
  item: { name, username, email, phone, website },
}) {
  const { colors } = useTheme();
  return (
    <Card>
      <View style={styles.userDetailsSection}>
        <Avatar.Image size={50} source={require("../assets/gbenga.jpg")} />
        <View style={styles.userDetails}>
          <Text style={{ ...globalStyles.titleText, color: colors.background }}>
            {name}
          </Text>
          <Text style={{ color: colors.background }}>{email}</Text>
          <Text style={{ color: colors.background }}>{username}</Text>
        </View>
      </View>
      <Text style={{ color: colors.background }}>{phone}</Text>
      <Text style={{ color: colors.background }}>{website}</Text>
    </Card>
  );
}
const styles = StyleSheet.create({
  userDetailsSection: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  userDetails: {
    marginLeft: 10,
  },
});
