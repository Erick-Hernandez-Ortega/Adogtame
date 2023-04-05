import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";
import { useEffect, useState } from "react";
import DogLoading from "../DogLoading/DogLoading";
import firebase from "../../DataBase/firebase";

const MascotaMain = React.memo(({ route }) => {
  const [mascotaData, setMascotaData] = useState(null);
  const { id } = route.params;

  async function resquest() {
    try {
      const mascota = await firebase.db
        .collection("Mascotas No Adoptadas")
        .doc(`${id}`)
        .get(["nombre", "imagen", "descripcion", "edad", "genero", "raza", "tipo", "idDuenno"]);
      setMascotaData(mascota.data());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    resquest();
  });

  if (!mascotaData) return <DogLoading />;

  const { nombre, imagen, descripcion, edad, genero, raza, tipo, idDuenno, nombreDuenno, telefonoDuenno, edadDuenno } = mascotaData;

  return (
    <View>
      <MascotaBarraMenu name={nombre} tipo={tipo} />
      <MascotaContenido
        name={nombre}
        descripcion={descripcion}
        edad={edad}
        genero={genero}
        raza={raza}
        tipo={tipo}
        url={imagen}
        idDuenno={idDuenno}
        nombreDuenno={nombreDuenno}
        telefonoDuenno={telefonoDuenno}
        edadDuenno={edadDuenno}
      />
    </View>
  );
});

export default MascotaMain;

const styles = StyleSheet.create({});
