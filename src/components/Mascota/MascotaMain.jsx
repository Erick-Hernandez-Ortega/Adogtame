import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";
import { useEffect, useState } from "react";
import DogLoading from "../DogLoading/DogLoading";
import firebase from "../../DataBase/firebase";

const MascotaMain = ({ route }) => {
  const [mascotaData, setMascotaData] = useState(null);
  const { id } = route.params;

  async function resquest() {
    try {
      const mascota = await firebase.db
        .collection("Mascotas No Adoptadas")
        .doc(`${id}`)
        .get();
      setMascotaData(mascota.data());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    resquest();
  }, []);

  if (!mascotaData) return <DogLoading />;

  const { nombre, imagen, descripcion, edad, genero, raza, tipo } = mascotaData;

  return (
    <View>
      <MascotaBarraMenu name={nombre} />
      <MascotaContenido
        name={nombre}
        descripcion={descripcion}
        edad={edad}
        genero={genero}
        raza={raza}
        tipo={tipo}
        url={imagen}
        id={id}
      />
    </View>
  );
};

export default MascotaMain;

const styles = StyleSheet.create({});
