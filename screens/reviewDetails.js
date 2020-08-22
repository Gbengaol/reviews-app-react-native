import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";
import { useTheme } from "react-native-paper";

const images = {
  "1": require("../assets/rating-1.png"),
  "2": require("../assets/rating-2.png"),
  "3": require("../assets/rating-3.png"),
  "4": require("../assets/rating-4.png"),
  "5": require("../assets/rating-5.png"),
};

export default function ReviewDetails({ route }) {
  const { item } = route.params;
  const { colors } = useTheme();

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={{ ...styles.ratingTitle, color: colors.background }}>
          {item.title}
        </Text>
        <Text style={{ color: colors.background }}>{item.body}</Text>
        <View style={{ ...styles.rating, borderTopColor: colors.background }}>
          <Text style={{ color: colors.background }}>GameZone Rating:</Text>
          <Image source={images[item.rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  ratingTitle: {
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    paddingBottom: 10,
    fontSize: 20,
  },
});
