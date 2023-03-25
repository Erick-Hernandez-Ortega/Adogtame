import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";
import { useEffect, useState } from "react";

const MascotaMain = ({route}) => {
  const [pokemonData, setPokemonData] = useState(null);
  const {id} = route.params;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  });

  if (!pokemonData) return <Text>Loading...</Text>;

  return (
    <View>
      <MascotaBarraMenu name={pokemonData.name} />
      <MascotaContenido name={pokemonData.name} url={pokemonData.sprites.front_default} id={id} />
    </View>
  );
};

export default MascotaMain;

const styles = StyleSheet.create({});
