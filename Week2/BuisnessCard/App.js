import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  Linking,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <Image
          source={require("./assets/profile.jpg")}
          style={styles.image}
        />

        <Text style={styles.name}>Brian Connell</Text>
        <Text style={styles.title}>Information Systems Student</Text>

        <Text style={styles.text}>bpconnell@coastal.edu</Text>
        <Text style={styles.text}>781-820-4389</Text>
        

        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL("https://github.com/BriGuy678")}
        >
          <Text style={styles.buttonText}>View My GitHub</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  title: {
    fontSize: 17,
    color: "#4b5563",
    marginTop: 5,
    marginBottom: 25,
  },
  text: {
    fontSize: 16,
    color: "#374151",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});