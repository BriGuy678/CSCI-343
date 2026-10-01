import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

export default function AddRecipeScreen({
  navigation,
  onAddRecipe,
}) {
  const [title, setTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  const saveRecipe = () => {
    if (!title.trim() || !recipeText.trim()) {
      Alert.alert(
        "Missing Information",
        "Please enter a recipe title and recipe text."
      );
      return;
    }

    onAddRecipe(title, recipeText);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.heading}>Add Recipe</Text>

          <Text style={styles.label}>Recipe Title</Text>

          <TextInput
            style={styles.titleInput}
            placeholder="Enter the recipe title"
            placeholderTextColor={colors.lightText}
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Recipe Instructions</Text>

          <TextInput
            style={styles.recipeInput}
            placeholder="Enter the ingredients and directions"
            placeholderTextColor={colors.lightText}
            value={recipeText}
            onChangeText={setRecipeText}
            multiline
            textAlignVertical="top"
          />

          <View style={styles.buttons}>
            <Pressable
              style={({ pressed }) => [
                styles.saveButton,
                pressed && styles.pressed,
              ]}
              onPress={saveRecipe}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.pressed,
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 22,
  },
  heading: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 28,
    marginTop: 10,
    textAlign: "center",
  },
  label: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 8,
  },
  titleInput: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.text,
    fontSize: 17,
    marginBottom: 24,
    padding: 15,
  },
  recipeInput: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    height: 230,
    padding: 15,
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 26,
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    flex: 1,
    padding: 16,
  },
  cancelButton: {
    backgroundColor: colors.lightText,
    borderRadius: 10,
    flex: 1,
    padding: 16,
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