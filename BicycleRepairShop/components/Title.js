import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Title({ children, light = false }) {
  return (
    <Text style={[styles.title, light && styles.lightTitle]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 44,
    letterSpacing: 1,
    textAlign: "center",
  },
  lightTitle: {
    color: colors.white,
  },
});