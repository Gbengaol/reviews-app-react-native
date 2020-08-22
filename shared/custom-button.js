import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton({ onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 28,
    backgroundColor: "#f01d71",
  },
});
