import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  cardContent: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
});
