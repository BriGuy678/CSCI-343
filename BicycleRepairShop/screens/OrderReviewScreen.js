import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/Title";
import NavigationButton from "../components/NavigationButton";
import colors from "../constants/colors";

export default function OrderReviewScreen({
  navigation,
  orderSummary,
  onReset,
}) {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  if (!orderSummary) {
    return (
      <LinearGradient
        colors={[colors.darkBlue, colors.mediumBlue]}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.emptyContainer}>
            <Title light>No Order Found</Title>

            <NavigationButton
              title="Return Home"
              onPress={() => onReset(navigation)}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={[
        colors.darkBlue,
        colors.mediumBlue,
        colors.primary,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Title light>Order Review</Title>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Service Time</Text>

            <View style={styles.lineItem}>
              <Text style={styles.itemName}>
                {orderSummary.serviceTime.name}
              </Text>

              <Text style={styles.itemPrice}>
                {formatPrice(orderSummary.serviceTime.price)}
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Repair Services</Text>

            {orderSummary.services.length > 0 ? (
              orderSummary.services.map((service) => (
                <View key={service.id} style={styles.lineItem}>
                  <Text style={styles.itemName}>{service.name}</Text>

                  <Text style={styles.itemPrice}>
                    {formatPrice(service.price)}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noneText}>
                No repair services selected
              </Text>
            )}

            <Text style={styles.sectionTitle}>Additional Options</Text>

            <View style={styles.lineItem}>
              <Text style={styles.itemName}>Newsletter Signup</Text>

              <Text style={styles.itemPrice}>
                {orderSummary.newsletter ? "Selected" : "Not Selected"}
              </Text>
            </View>

            <View style={styles.lineItem}>
              <Text style={styles.itemName}>Rental Membership</Text>

              <Text style={styles.itemPrice}>
                {orderSummary.rentalMembership
                  ? "$100.00"
                  : "Not Selected"}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>

              <Text style={styles.totalValue}>
                {formatPrice(orderSummary.subtotal)}
              </Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Sales Tax (6%)</Text>

              <Text style={styles.totalValue}>
                {formatPrice(orderSummary.salesTax)}
              </Text>
            </View>

            <View style={styles.finalRow}>
              <Text style={styles.finalLabel}>Final Total</Text>

              <Text style={styles.finalValue}>
                {formatPrice(orderSummary.finalTotal)}
              </Text>
            </View>
          </View>

          <NavigationButton
            title="Return Home"
            onPress={() => onReset(navigation)}
            secondary
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    paddingBottom: 35,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 22,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    borderRadius: 18,
    marginBottom: 22,
    marginTop: 18,
    padding: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 25,
    letterSpacing: 0.6,
    marginBottom: 5,
    marginTop: 14,
  },
  lineItem: {
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  itemName: {
    color: colors.text,
    flex: 1,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingRight: 10,
  },
  itemPrice: {
    color: colors.mediumBlue,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
  },
  noneText: {
    color: colors.lightText,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    paddingVertical: 10,
  },
  divider: {
    backgroundColor: colors.darkBlue,
    height: 2,
    marginVertical: 16,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },
  totalLabel: {
    color: colors.text,
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
  totalValue: {
    color: colors.text,
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
  },
  finalRow: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    padding: 15,
  },
  finalLabel: {
    color: colors.darkBlue,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 24,
  },
  finalValue: {
    color: colors.primary,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 24,
  },
});