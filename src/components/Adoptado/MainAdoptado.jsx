import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ScrollView } from "react-native-gesture-handler";
import AdoptadoBarraMenu from "./AdoptadoBarraMenu";
import ContenidoAdoptado from "./ContenidoAdoptado";

const MainAdoptado = () => {
  return (
    <View>
      <AdoptadoBarraMenu />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <ContenidoAdoptado />
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
    padding: 15,
  },
  scrollView: {
    backgroundColor: "#f7f7f8",
  },
});
