import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pine Ridge Campground</Text>
      <Text style={styles.subtitle}>Find your place in the outdoors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    color: Colors.white,
    fontFamily: "LoraBold",
    fontSize: 34,
    textAlign: "center",
  },
  subtitle: {
    color: Colors.cream,
    fontFamily: "LoraRegular",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});