import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Adoptados from "./Adoptados";

const ContenidoAdopciones = () => {
  const ids = [45, 14, 22, 38, 31, 48, 27, 20, 42, 16];

  return (
    <View style={styles.container}>
      {ids.map((e) => (
        <Adoptados id={e} key={e} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f8",
    width: "100%",
    paddingBottom: "5%",
  },
});

export default ContenidoAdopciones;
