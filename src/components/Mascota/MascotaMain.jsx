import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";
import { useEffect, useState } from "react";
import DogLoading from "../DogLoading/DogLoading";

const MascotaMain = ({ route }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  });

  if (!pokemonData) return <DogLoading />;

  return (
    <View>
      <MascotaBarraMenu name={pokemonData.name} />
      <MascotaContenido
        name={pokemonData.name}
        url={pokemonData.sprites.front_default}
        id={id}
      />
    </View>
  );
};

export default MascotaMain;

const styles = StyleSheet.create({});
