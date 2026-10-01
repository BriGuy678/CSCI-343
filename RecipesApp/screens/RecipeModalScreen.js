import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

export default function RecipeModalScreen({
  navigation,
  route,
  recipes,
}) {
  const recipe = recipes.find(
    (item) => item.id === route.params.recipeId
  );

  if (!recipe) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.missingContainer}>
          <Text style={styles.missingText}>Recipe not found.</Text>

          <Pressable
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Return to Recipes</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.modalLabel}>Recipe Details</Text>

        <Text style={styles.title}>{recipe.title}</Text>

        <View style={styles.recipeCard}>
          <Text style={styles.recipeText}>{recipe.text}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Return to Recipes</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  modalLabel: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 8,
    textAlign: "center",
  },
  recipeCard: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: 22,
  },
  recipeText: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 29,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 28,
    padding: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  missingContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  missingText: {
    color: colors.text,
    fontSize: 20,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});