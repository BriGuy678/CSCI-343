import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  Switch,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import { Checkbox } from "expo-checkbox";
import Title from "../components/Title";
import NavigationButton from "../components/NavigationButton";
import { serviceTimes, serviceOptions } from "../constants/services";
import colors from "../constants/colors";

export default function HomeScreen({
  navigation,
  serviceTime,
  setServiceTime,
  selectedServices,
  toggleService,
  newsletter,
  setNewsletter,
  rentalMembership,
  setRentalMembership,
  onSubmit,
}) {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <ImageBackground
      source={require("../assets/bicycle-background.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <Title light>Brian's Bicycle Repair</Title>

            <Text style={styles.subtitle}>
              Select your repair services and service time
            </Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Service Time</Text>

              <RadioButton.Group
                value={serviceTime}
                onValueChange={setServiceTime}
              >
                {serviceTimes.map((time) => (
                  <Pressable
                    key={time.id}
                    style={styles.optionRow}
                    onPress={() => setServiceTime(time.id)}
                  >
                    <RadioButton
                      value={time.id}
                      color={colors.primary}
                      uncheckedColor={colors.lightText}
                    />

                    <Text style={styles.optionText}>
                      {time.name}
                    </Text>

                    <Text style={styles.price}>
                      {formatPrice(time.price)}
                    </Text>
                  </Pressable>
                ))}
              </RadioButton.Group>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Repair Services</Text>

              {serviceOptions.map((service) => (
                <Pressable
                  key={service.id}
                  style={styles.optionRow}
                  onPress={() => toggleService(service.id)}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={Boolean(selectedServices[service.id])}
                    onValueChange={() => toggleService(service.id)}
                    color={
                      selectedServices[service.id]
                        ? colors.primary
                        : undefined
                    }
                  />

                  <Text style={styles.optionText}>
                    {service.name}
                  </Text>

                  <Text style={styles.price}>
                    {formatPrice(service.price)}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Membership Options</Text>

              <View style={styles.switchRow}>
                <View style={styles.switchTextContainer}>
                  <Text style={styles.optionText}>
                    Newsletter Signup
                  </Text>
                  <Text style={styles.smallText}>$0.00</Text>
                </View>

                <Switch
                  value={newsletter}
                  onValueChange={setNewsletter}
                  trackColor={{
                    false: colors.border,
                    true: colors.secondary,
                  }}
                  thumbColor={
                    newsletter ? colors.primary : colors.white
                  }
                />
              </View>

              <View style={styles.switchRow}>
                <View style={styles.switchTextContainer}>
                  <Text style={styles.optionText}>
                    Rental Membership
                  </Text>
                  <Text style={styles.smallText}>$100.00</Text>
                </View>

                <Switch
                  value={rentalMembership}
                  onValueChange={setRentalMembership}
                  trackColor={{
                    false: colors.border,
                    true: colors.secondary,
                  }}
                  thumbColor={
                    rentalMembership ? colors.primary : colors.white
                  }
                />
              </View>
            </View>

            <NavigationButton
              title="Submit Order"
              onPress={() => onSubmit(navigation)}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(10, 28, 38, 0.78)",
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    paddingBottom: 35,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  subtitle: {
    color: colors.white,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    marginBottom: 22,
    textAlign: "center",
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    borderRadius: 16,
    marginBottom: 18,
    padding: 16,
  },
  sectionTitle: {
    color: colors.darkBlue,
    fontFamily: "BebasNeue_400Regular",
    fontSize: 27,
    letterSpacing: 0.7,
    marginBottom: 8,
  },
  optionRow: {
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    minHeight: 50,
    paddingVertical: 5,
  },
  checkbox: {
    height: 23,
    marginHorizontal: 10,
    width: 23,
  },
  optionText: {
    color: colors.text,
    flex: 1,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  price: {
    color: colors.primary,
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    marginLeft: 8,
  },
  switchRow: {
    alignItems: "center",
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 65,
  },
  switchTextContainer: {
    flex: 1,
  },
  smallText: {
    color: colors.lightText,
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    marginTop: 3,
  },
});