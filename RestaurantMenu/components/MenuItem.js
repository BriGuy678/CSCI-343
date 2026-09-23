import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function MenuItem({ name, description, price, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.information}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: 115,
    minHeight: 130,
  },
  information: {
    flex: 1,
    padding: 12,
  },
  topRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: colors.text,
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 8,
  },
  price: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: "bold",
  },
  description: {
    color: colors.lightText,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },
});