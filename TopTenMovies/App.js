import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

const movies = [
  {
    id: "1",
    title: "The Dark Knight",
    rating: "9.0/10",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: "2",
    title: "Interstellar",
    rating: "8.7/10",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: "3",
    title: "The Godfather",
    rating: "9.2/10",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: "4",
    title: "Forrest Gump",
    rating: "8.8/10",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: "5",
    title: "Inception",
    rating: "8.8/10",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: "6",
    title: "The Matrix",
    rating: "8.7/10",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: "7",
    title: "Gladiator",
    rating: "8.5/10",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: "8",
    title: "Avengers: Endgame",
    rating: "8.4/10",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: "9",
    title: "Spider-Man: No Way Home",
    rating: "8.2/10",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: "10",
    title: "Top Gun: Maverick",
    rating: "8.2/10",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
];

function Movie({ title, rating, poster }) {
  return (
    <View style={styles.movieCard}>
      <Image source={{ uri: poster }} style={styles.poster} />

      <View style={styles.movieInformation}>
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.heading}>My Top 10 Movies</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Movie
            title={item.title}
            rating={item.rating}
            poster={item.poster}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  heading: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 15,
  },
  list: {
    paddingHorizontal: 15,
    paddingBottom: 25,
  },
  movieCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  poster: {
    width: 90,
    height: 135,
    borderRadius: 8,
    backgroundColor: "#374151",
  },
  movieInformation: {
    flex: 1,
    marginLeft: 15,
  },
  movieTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rating: {
    color: "#fbbf24",
    fontSize: 17,
    fontWeight: "bold",
  },
});