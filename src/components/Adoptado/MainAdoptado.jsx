import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AdoptadoBarraMenu from "./AdoptadoBarraMenu";
import DogLoading from "../DogLoading/DogLoading";
import ContenidoAdoptado from "./ContenidoAdoptado";

const MainAdoptado = ({route}) => {
  const {id} = route.params;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  });

  if (!pokemonData) return <DogLoading />;

  return (
    <View>
      <AdoptadoBarraMenu name={pokemonData.name} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <ContenidoAdoptado name={pokemonData.name} id={id} url={pokemonData.sprites.front_default} />
      </ScrollView>
    </View>
  );
};

export default MainAdoptado;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  scrollView: {
    backgroundColor: "#f7f7f8",
  },
});
