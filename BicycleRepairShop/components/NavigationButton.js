import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function NavigationButton({
  title,
  onPress,
  secondary = false,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        secondary && styles.secondaryButton,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  secondaryButton: {
    backgroundColor: colors.mediumBlue,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});