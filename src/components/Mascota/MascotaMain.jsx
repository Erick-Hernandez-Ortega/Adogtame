import { StyleSheet, View, Text, Modal } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";
import { useEffect, useState } from "react";
import DogLoading from "../DogLoading/DogLoading";
import firebase from "../../DataBase/firebase";
import BotonFlotante from "../BotonFlotante/BotonFlotante";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { ScrollView } from "react-native-gesture-handler";

const MascotaMain = React.memo(({ route }) => {
  const [mascotaData, setMascotaData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = route.params;

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

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
  });

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
  } = mascotaData;

  return (
    <View>
      <MascotaBarraMenu name={nombre} tipo={tipo} modalVisible={modalVisible} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainerCenter}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text
                style={{
                  fontFamily: "Chewy",
                  fontSize: 20,
                  paddingBottom: 20,
                  textAlign: "center",
                }}
              >
                ¡Gracias por considerar la adopción!
              </Text>
              <Text
                style={{
                  paddingBottom: 20,
                  textAlign: "justify",
                  fontWeight: "300",
                  fontSize: 15,
                }}
              >
                Recuerda que adoptar una mascota es una gran responsabilidad y
                un compromiso a largo plazo.
                {"\n\n"}Asegúrate de estar listo para brindarle el amor, cuidado
                y atención que necesita {nombre} {tipo ? "🐶" : "🐱"}.{"\n\n"}
                Juntos podemos darles un hogar amoroso a estos animales
                necesitados.
                {"\n\n"}Te damos algunas recomendaciones:{"\n\n"}
                {"\u2022"}Evalúa tu estilo de vida: Considera tu tiempo
                disponible, presupuesto y espacio en casa antes de adoptar una
                mascota.{"\n\n"}
                {"\u2022"}Investiga sobre la raza: Si decides adoptar una
                mascota de raza, investiga sobre sus características y
                necesidades específicas.{"\n\n"}
                {"\u2022"}Prepárate para el compromiso: Adoptar una mascota es
                un compromiso a largo plazo, así que asegúrate de estar listo
                para cuidarla y brindarle amor y atención.
              </Text>
              <Text
                style={{
                  fontFamily: "Chewy",
                  fontSize: 20,
                  paddingBottom: 20,
                  textAlign: "center",
                }}
              >
                ¿Estas seguro de adogtar a {nombre}?
              </Text>
              <BtnCuenta
                name="Si, quiero adogtar"
                icon="emoticon-happy-outline"
                bgColor="#006400"
                color="#fff"
                onPress={() => {
                  toggleModalVisible();
                }}
              />
              <BtnCuenta
                name="No, lo pensare mejor"
                icon="emoticon-sad-outline"
                bgColor="#8b0000"
                color="#fff"
                onPress={() => toggleModalVisible()}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>

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
        ubicacion={ubicacion}
        fechaRegistro={fechaRegistro}
        modalVisible={modalVisible}
      />
      <BotonFlotante onPress={toggleModalVisible} modalVisible={modalVisible} />
    </View>
  );
});

export default MascotaMain;

const styles = StyleSheet.create({
  modalContainerCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 22,
    width: "90%",
    height: "auto",
  },
});
