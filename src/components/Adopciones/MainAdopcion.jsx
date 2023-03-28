import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ContenidoAdopciones from "./ContenidoAdopciones";

const MainAdopciones = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{backgroundColor: "#f7f7f8"}}>
      <ContenidoAdopciones />
    </ScrollView>
  );
};

export default MainAdopciones;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f8",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
