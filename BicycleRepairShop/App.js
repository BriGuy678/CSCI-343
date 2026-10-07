import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import {
  BebasNeue_400Regular,
  useFonts as useBebasFonts,
} from "@expo-google-fonts/bebas-neue";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";
import { serviceTimes, serviceOptions } from "./constants/services";
import colors from "./constants/colors";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [fontsLoaded, fontError] = useBebasFonts({
    BebasNeue_400Regular,
    Roboto_400Regular,
  });

  const [serviceTime, setServiceTime] = useState("standard");
  const [selectedServices, setSelectedServices] = useState({});
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const toggleService = (serviceId) => {
    setSelectedServices((currentServices) => ({
      ...currentServices,
      [serviceId]: !currentServices[serviceId],
    }));
  };

  const submitOrder = (navigation) => {
    const chosenTime =
      serviceTimes.find((time) => time.id === serviceTime) ||
      serviceTimes[0];

    const chosenServices = serviceOptions.filter(
      (service) => selectedServices[service.id]
    );

    const servicesPrice = chosenServices.reduce(
      (total, service) => total + service.price,
      0
    );

    const membershipPrice = rentalMembership ? 100 : 0;

    const subtotal =
      chosenTime.price + servicesPrice + membershipPrice;

    const salesTax = subtotal * 0.06;
    const finalTotal = subtotal + salesTax;

    setOrderSummary({
      serviceTime: chosenTime,
      services: chosenServices,
      newsletter,
      rentalMembership,
      subtotal,
      salesTax,
      finalTotal,
    });

    navigation.navigate("OrderReview");
  };

  const resetOrder = (navigation) => {
    setServiceTime("standard");
    setSelectedServices({});
    setNewsletter(false);
    setRentalMembership(false);
    setOrderSummary(null);
    navigation.popToTop();
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: colors.background,
              },
            }}
          >
            <Stack.Screen name="Home">
              {(props) => (
                <HomeScreen
                  {...props}
                  serviceTime={serviceTime}
                  setServiceTime={setServiceTime}
                  selectedServices={selectedServices}
                  toggleService={toggleService}
                  newsletter={newsletter}
                  setNewsletter={setNewsletter}
                  rentalMembership={rentalMembership}
                  setRentalMembership={setRentalMembership}
                  onSubmit={submitOrder}
                />
              )}
            </Stack.Screen>

            <Stack.Screen name="OrderReview">
              {(props) => (
                <OrderReviewScreen
                  {...props}
                  orderSummary={orderSummary}
                  onReset={resetOrder}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}