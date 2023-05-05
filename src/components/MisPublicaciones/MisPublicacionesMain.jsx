import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import ContenidoPublicaciones from "./ContenidoPublicaciones";

const MisPublicacionesMain = () => {
  const auth = getAuth();
  const usuario = auth.currentUser;
  // let navigator = useNavigation();

  if (usuario == null)
    return (
      Alert.alert("Error", "Inicia sesión para poder ver tus publicatciones")
      // navigator.navigate("Login")
    );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#f7f7f8" }}
      showsVerticalScrollIndicator={false}
    >
      <ContenidoPublicaciones {...navigator}/>
    </ScrollView>
  );
};

export default MisPublicacionesMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f8",
    width: "100%",
    alignItems: "center",
    paddingTop: "5%",
  },
});
