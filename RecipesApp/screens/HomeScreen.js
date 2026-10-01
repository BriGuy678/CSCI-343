import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Brian's Recipe Book</Text>

        <Text style={styles.subtitle}>
          Save and view your favorite recipes
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200",
          }}
          style={styles.image}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
          ]}
          onPress={() => navigation.navigate("Recipes")}
        >
          <Text style={styles.buttonText}>View Recipes</Text>
        </Pressable>
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
    justifyContent: "center",
    padding: 22,
  },
  title: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: colors.lightText,
    fontSize: 17,
    marginBottom: 28,
    marginTop: 8,
    textAlign: "center",
  },
  image: {
    borderRadius: 20,
    height: 330,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginTop: 28,
    padding: 17,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});