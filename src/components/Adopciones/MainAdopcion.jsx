import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ContenidoAdopciones from "./ContenidoAdopciones";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const MainAdopciones = () => {
  const auth = getAuth();
  const usuario = auth.currentUser;
  navigator = useNavigation();

  if (usuario == null)
    return (
      Alert.alert("Error", "Inicia sesión para poder ver tus adopciones"),
      navigator.navigate("Login")
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#f7f7f8" }}
      showsVerticalScrollIndicator={false}
    >
      <ContenidoAdopciones />
    </ScrollView>
  );
};

export default MainAdopciones;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f8",
    width: "100%",
    alignItems: "center",
    paddingTop: "5%",
  },
});
