import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import DogLoading from "../DogLoading/DogLoading";

const Adoptados = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${2}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  if (!pokemonData)
    return (
      <DogLoading/>
    );

  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: pokemonData.sprites.front_default }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{pokemonData.name}</Text>
        <Text style={styles.subtitle}>Edad: {pokemonData.id}</Text>
        <Text style={styles.description}>
          Bulbasaur es un Pokémon de tipo planta/veneno. Es uno de los Pokémon
          iniciales en la región de Kanto y es muy popular entre los
          entrenadores Pokémon.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Adoptados;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontFamily: "Chewy",
    fontSize: 19,
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Chewy",
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
