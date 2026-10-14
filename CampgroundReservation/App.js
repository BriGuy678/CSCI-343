import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Lora_400Regular,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./screens/HomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    LoraRegular: Lora_400Regular,
    LoraBold: Lora_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <HomeScreen />
    </>
  );
}