import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipeModalScreen from "./screens/RecipeModalScreen";
import colors from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [recipes, setRecipes] = useState([
    {
      id: "1",
      title: "Chicken Alfredo",
      text: "Cook the pasta. Grill and slice the chicken. Mix butter, cream, and Parmesan cheese in a pan. Add the pasta and chicken, then stir until everything is covered.",
    },
    {
      id: "2",
      title: "Cheeseburger",
      text: "Season the ground beef and shape it into a patty. Cook the burger on both sides. Add cheese, then place it on a bun with lettuce, tomato, and your favorite sauce.",
    },
    {
      id: "3",
      title: "Chocolate Cake",
      text: "Mix flour, sugar, cocoa powder, eggs, milk, and butter. Pour the mixture into a cake pan. Bake until finished, let it cool, and add chocolate frosting.",
    },
  ]);

  const addRecipe = (title, text) => {
    const newRecipe = {
      id: Date.now().toString(),
      title: title.trim(),
      text: text.trim(),
    };

    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.background,
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="Recipes">
            {(props) => (
              <RecipesScreen
                {...props}
                recipes={recipes}
                onDeleteRecipe={deleteRecipe}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="AddRecipe">
            {(props) => (
              <AddRecipeScreen {...props} onAddRecipe={addRecipe} />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="RecipeModal"
            options={{
              presentation: "modal",
            }}
          >
            {(props) => (
              <RecipeModalScreen {...props} recipes={recipes} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}