import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeItem from "../components/RecipeItem";
import colors from "../constants/colors";

export default function RecipesScreen({
  navigation,
  recipes,
  onDeleteRecipe,
}) {
  const viewRecipe = (id) => {
    navigation.navigate("RecipeModal", {
      recipeId: id,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>My Recipes</Text>

        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeItem
              recipe={item}
              onViewRecipe={viewRecipe}
              onDeleteRecipe={onDeleteRecipe}
            />
          )}
          contentContainerStyle={[
            styles.list,
            recipes.length === 0 && styles.emptyList,
          ]}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              You do not have any recipes. Press Add Recipe to create one.
            </Text>
          }
        />

        <View style={styles.bottomButtons}>
          <Pressable
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.pressed,
            ]}
            onPress={() => navigation.navigate("AddRecipe")}
          >
            <Text style={styles.buttonText}>Add Recipe</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.homeButton,
              pressed && styles.pressed,
            ]}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.buttonText}>Home</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  heading: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 18,
    marginTop: 12,
    textAlign: "center",
  },
  list: {
    paddingBottom: 12,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
  },
  emptyText: {
    color: colors.lightText,
    fontSize: 17,
    lineHeight: 25,
    paddingHorizontal: 25,
    textAlign: "center",
  },
  bottomButtons: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 14,
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    flex: 1,
    padding: 15,
  },
  homeButton: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    flex: 1,
    padding: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});