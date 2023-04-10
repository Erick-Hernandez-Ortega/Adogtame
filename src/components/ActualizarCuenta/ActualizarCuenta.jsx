import { Alert, StyleSheet, Text, View, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import BtnCuenta from "../Cuenta/BtnCuenta";
import ContenidoActualizarCuenta from "./ContenidoActualizarCuenta";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";

const ActualizarCuenta = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const actualizarCuenta = () => {
    Alert.alert("Adogcuenta 🐶", "Se han actualizado tus datos");
  };
  // Guardamos la info del usuario
  const [user, setUsuario] = useState({
    id: "",
    nombres: "",
    apellidos: "",
    edad: "",
    correo: "",
    telefono: "",
  });
  // Funcion para jalar la info
  useEffect(() => {
    const auth = getAuth();
    const usuario = auth.currentUser;
    if (usuario !== null) {
      const userCollectionRef = firebase.db.collection("Usuarios");
      userCollectionRef
        .where("Correo", "==", usuario.email)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            setUsuario({
              nombres: userData.Nombres,
              apellidos: userData.Apellidos,
              edad: userData.Edad,
              correo: userData.Correo,
              telefono: userData.Telefono,
            });
          } else {
            Alert.alert("El documento no existe");
          }
        })
        .catch((e) => {
          Alert.alert(e);
        });
    } else {
      Alert.alert("Hubo un error al autenticar el usuario");
    }
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: modalVisible ? "rgba(0, 0, 0, 0.3)" : "#f7f7f8",
      }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainerCenter}>
          <View style={styles.modalView}>
            <Text
              style={{ fontFamily: "Chewy", fontSize: 18, paddingBottom: 20 }}
            >
              ¿Estas seguro que quieres modificar tus datos?
            </Text>
            <View style={{ marginTop: 0 }}>
              <BtnCuenta
                name="Confirmar"
                icon="check-circle-outline"
                bgColor="#006400"
                color="#fff"
                onPress={() => {
                  actualizarCuenta();
                  toggleModalVisible();
                }}
              />
              <BtnCuenta
                name="Cancelar"
                icon="emoticon-poop"
                bgColor="#8b0000"
                color="#fff"
                onPress={() => toggleModalVisible()}
              />
            </View>
          </View>
        </View>
      </Modal>

      <ContenidoActualizarCuenta
        toggleModalVisible={toggleModalVisible}
        props={user}
      />
    </ScrollView>
  );
};

export default ActualizarCuenta;

const styles = StyleSheet.create({
  modalContainerCenter: {
    justifyContent: "flex-end",
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
    width: "92%",
  },
});
