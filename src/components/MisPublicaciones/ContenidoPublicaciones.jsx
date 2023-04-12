import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../DataBase/firebase";

const ContenidoPublicaciones = () => {
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

  useEffect(() => {
    const unsubscribe = request();

    // Limpia los efectos secundarios cuando se desmonta el componente
    return () => {
      unsubscribe();
      setIds([]);
    };
  }, []);

  return (
    <View>
      <Text>ContenidoPublicaciones</Text>
    </View>
  );
};

export default ContenidoPublicaciones;

const styles = StyleSheet.create({});
