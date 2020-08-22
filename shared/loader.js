import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loader({ type }) {
  return (
    <ActivityIndicator
      size="small"
      color={type && type === "alt" ? "#f01d71" : "#fff"}
    />
  );
}
