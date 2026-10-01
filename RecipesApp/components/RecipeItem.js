import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function RecipeItem({
  recipe,
  onViewRecipe,
  onDeleteRecipe,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {recipe.title}
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [
            styles.viewButton,
            pressed && styles.pressed,
          ]}
          onPress={() => onViewRecipe(recipe.id)}
        >
          <Text style={styles.buttonText}>View</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.pressed,
          ]}
          onPress={() => onDeleteRecipe(recipe.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    padding: 16,
  },
  title: {
    color: colors.text,
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
  viewButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  deleteButton: {
    backgroundColor: colors.delete,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});