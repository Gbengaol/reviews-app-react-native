import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../shared/card";

const images = {
  "1": require("../assets/rating-1.png"),
  "2": require("../assets/rating-2.png"),
  "3": require("../assets/rating-3.png"),
  "4": require("../assets/rating-4.png"),
  "5": require("../assets/rating-5.png"),
};

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.ratingTitle}>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating:</Text>
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
    borderTopColor: "#000",
  },
  ratingTitle: {
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    paddingBottom: 10,
    fontSize: 20,
  },
});
