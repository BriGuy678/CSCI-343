import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  const openPhone = () => {
    Linking.openURL("tel:8435550147");
  };

  const openAddress = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/?api=1&query=1108+Seafood+Lane+Myrtle+Beach+SC"
    );
  };

  const openWebsite = () => {
    Linking.openURL("https://www.example.com");
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + 15,
          paddingBottom: insets.bottom + 25,
        },
      ]}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        }}
        style={styles.restaurantImage}
      />

      <Title>Brian's Bistro</Title>

      <Text style={styles.tagline}>
        Fresh food, friendly service, and great memories
      </Text>

      <View style={styles.detailsCard}>
        <Text style={styles.label}>Phone</Text>
        <Pressable onPress={openPhone}>
          <Text style={styles.link}>(843) 555-0147</Text>
        </Pressable>

        <Text style={styles.label}>Address</Text>
        <Pressable onPress={openAddress}>
          <Text style={styles.link}>
            1108 Seafood Lane, Myrtle Beach, SC
          </Text>
        </Pressable>

        <Text style={styles.label}>Website</Text>
        <Pressable onPress={openWebsite}>
          <Text style={styles.link}>www.briansbistro.com</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.buttonText}>View Our Menu</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  restaurantImage: {
    borderRadius: 18,
    height: 240,
    marginBottom: 20,
    width: "100%",
  },
  tagline: {
    color: colors.lightText,
    fontSize: 16,
    marginBottom: 22,
    marginTop: 5,
    textAlign: "center",
  },
  detailsCard: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 4,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginTop: 24,
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