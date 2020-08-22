import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Card({ children }) {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.card, backgroundColor: colors.text }}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
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
