import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../DataBase/firebase";
import MisPublicaciones from "./MisPublicaciones";

const ContenidoPublicaciones = ({navigator}) => {
  navigator = useNavigation();
  const auth = getAuth();
  const usuario = auth.currentUser;
  const [ids, setIds] = useState([]);

  async function request() {
    try {
      const mascotasAdoptadasRef = firebase.db.collection(
        "Mascotas No Adoptadas"
      );
      const query = mascotasAdoptadasRef
        .where("idDuenno", "==", `${usuario.email}`)
        .onSnapshot((e) => {
          setIds([]);
          e.docs.forEach((e) => setIds((prevIds) => [...prevIds, e.id]));
        });
    } catch (error) {
      console.log(error);
    }
  }

  if (usuario == null)
    return (
      Alert.alert("Error", "Inicia sesión para poder ver tus publicatciones"),
      navigator.navigate("Login")
    );

  useEffect(() => {
    request();
    setIds([]);
  }, []);

  return (
    <View>
      {ids.map((e) => (
        <MisPublicaciones
          key={e}
          id={e}
          onPress={() => navigator.navigate("Mascota", { id: e })}
        />
      ))}
    </View>
  );
};

export default ContenidoPublicaciones;

const styles = StyleSheet.create({});
