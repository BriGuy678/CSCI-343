import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontFamily: "Pacifico_400Regular",
    fontSize: 34,
    textAlign: "center",
  },
});