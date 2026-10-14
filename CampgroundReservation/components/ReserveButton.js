import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

export default function ReserveButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.text}>Reserve Now</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.gold,
    borderRadius: 12,
    marginTop: 18,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "100%",
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: Colors.darkForest,
    fontFamily: "LoraBold",
    fontSize: 18,
    textAlign: "center",
  },
});