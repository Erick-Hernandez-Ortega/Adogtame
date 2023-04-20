import { Text, View, StyleSheet, ScrollView, Platform } from "react-native";
import Mascotas from "./Mascotas";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";
import BotonFlotanteAgregar from "../BotonFlotante/BotonFlotanteAgregar";

const Contenido = React.memo(({ navigator }) => {
  const [ids, setIds] = useState([]);
  navigator = useNavigation();

  async function getIds() {
    try {
      const collectionRef = firebase.db
        .collection("Mascotas No Adoptadas")
        .limit(4);
      const query = collectionRef.onSnapshot((e) => {
        setIds([]);
        e.docs.forEach((e) => setIds((prevIds) => [...prevIds, e.id]));
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = getIds();
    // Limpia los efectos secundarios cuando se desmonta el componente
    return () => {
      unsubscribe();
      setIds([]);
    };
  }, []);

  function handlePress() {
    navigator.navigate("SubirMascotas");
  }
  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.text}>¡Echa un vistazo a tus futuras mascotas!</Text>

      {Platform.OS === "web" ? (
        <View style={style.web}>
          {ids.map((e) => (
            <View key={e} style={{ width: "33.33%", marginBottom: 10 }}>
              <Mascotas
                id={e}
                onPress={() => navigator.navigate("Mascota", { id: e })}
              />
            </View>
          ))}
        </View>
      ) : (
        ids.map((e) => (
          <Mascotas
            key={e}
            id={e}
            onPress={() => navigator.navigate("Mascota", { id: e })}
          />
        ))
      )}

      <BotonFlotanteAgregar onPress={handlePress} />
    </ScrollView>
  );
});

const style = StyleSheet.create({
  web: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
  },
  container: {
    width: "100%",
    paddingBottom: Platform.OS === "web" ? null : "10%",
    paddingTop: Platform.OS === "web" ? null : "5%",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    textAlign: "center",
    padding: 20,
    fontSize: Platform.OS === "web" ? 22 : 18,
    fontFamily: "Chewy",
    letterSpacing: 1,
  },
});

export default Contenido;
