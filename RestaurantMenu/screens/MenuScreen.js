import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import MenuItem from "../components/MenuItem";
import colors from "../constants/colors";

const menuItems = [
  {
    id: "1",
    name: "Classic Burger",
    description:
      "A grilled beef burger with lettuce, tomato, cheese, and house sauce.",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description:
      "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil.",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
  },
  {
    id: "3",
    name: "Chicken Alfredo",
    description:
      "Grilled chicken and pasta covered in a creamy Alfredo sauce.",
    price: "$17.99",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
  },
  {
    id: "4",
    name: "Grilled Salmon",
    description:
      "Seasoned salmon served with roasted vegetables and lemon.",
    price: "$21.99",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
  },
  {
    id: "5",
    name: "Chocolate Cake",
    description:
      "A warm chocolate cake served with vanilla ice cream.",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
];

export default function MenuScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.screen,
        {
          paddingTop: insets.top + 10,
        },
      ]}
    >
      <Title>Our Menu</Title>
      <Text style={styles.subtitle}>Made fresh for every guest</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
        contentContainerStyle={[
          styles.list,
          {
            paddingBottom: insets.bottom + 20,
          },
        ]}
        ListFooterComponent={
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Return to Home</Text>
          </Pressable>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  subtitle: {
    color: colors.lightText,
    fontSize: 16,
    marginBottom: 18,
    marginTop: 4,
    textAlign: "center",
  },
  list: {
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginTop: 4,
    padding: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});