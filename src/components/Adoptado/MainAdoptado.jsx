import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AdoptadoBarraMenu from "./AdoptadoBarraMenu";
import DogLoading from "../DogLoading/DogLoading";
import ContenidoAdoptado from "./ContenidoAdoptado";
import firebase from "../../DataBase/firebase";

const MainAdoptado = ({ route }) => {
  const { id } = route.params;
  const { navigator } = route.params;
  const [mascotaData, setMascotaData] = useState(null);

  useEffect(() => {
    resquest();
  });

  async function resquest() {
    try {
      const mascota = await firebase.db
        .collection("Mascotas Adoptadas")
        .doc(`${id}`)
        .get();
      setMascotaData(mascota.data());
    } catch (e) {
      console.log(e);
    }
  }

  if (!mascotaData) return <DogLoading />;

  const {
    nombre,
    imagen,
    descripcion,
    edad,
    genero,
    raza,
    tipo,
    idDuenno,
    nombreDuenno,
    telefonoDuenno,
    edadDuenno,
    ubicacion,
    fechaRegistro,
    fechaAdoptado
  } = mascotaData;

  return (
    <View>
      <AdoptadoBarraMenu name={nombre} navigator={navigator} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
      >
        <ContenidoAdoptado
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
          ubicacion={ubicacion}
          fechaRegistro={fechaRegistro}
          fechaAdoptado={fechaAdoptado}
        />
      </ScrollView>
    </View>
  );
};

export default MainAdoptado;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  scrollView: {
    backgroundColor: "#f7f7f8",
  },
});
