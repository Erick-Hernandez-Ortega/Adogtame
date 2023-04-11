import { View, StyleSheet, Image, Modal, Text, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import BtnCuenta from "./BtnCuenta";
import TextoCuenta from "./TextoCuenta";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";

const CuentaMain = () => {
  navigator = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  // Guardamos la info del usuario
  const [user, setUsuario] = useState({
    id: "",
    nombres: "",
    apellidos: "",
    edad: "",
    correo: "",
    telefono: "",
    preferencia: "",
  });
  const auth = getAuth();
  const usuario = auth.currentUser;
  // Funcion para jalar la info
  useEffect(() => {
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
              id: userDoc.id,
              nombres: userData.Nombres,
              apellidos: userData.Apellidos,
              edad: userData.Edad,
              correo: userData.Correo,
              telefono: userData.Telefono,
              preferencia: userData.Preferencia,
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
  });
  // funciones de los modales
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  const borrarCuenta = async () => {
    const dbRef = firebase.db.collection("Usuarios").doc(user.id);
    await dbRef
      .delete()
      .then(() => {
        usuario
          .delete()
          .then(() => {
            Alert.alert("Cuenta eliminada con exito :(");
            navigator.navigate("PreLogin");
          })
          .catch((error) => {
            Alert.alert("Upss..." + error);
          });
      })
      .catch((error) => {
        Alert.alert("Ups... " + error);
      });
  };

  return (
    <View style={styles.centrar}>
      <View
        style={{
          ...styles.container,
          backgroundColor: modalVisible ? "rgba(0, 0, 0, 0.2)" : "#f7f7f8",
        }}
      >
        <View style={{ ...styles.circulo, opacity: modalVisible ? 0.8 : 1.0 }}>
          <Image
            source={{ uri: "http://placekitten.com/300/300" }}
            style={styles.imagen}
          />
        </View>
        <TextoCuenta {...user} />
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainerCenter}>
            <View style={styles.modalView}>
              <Text
                style={{ fontFamily: "Chewy", fontSize: 18, paddingBottom: 20 }}
              >
                ¿Estas seguro que quieres borrar tu Adogcuenta?
              </Text>
              <View style={{ marginTop: 0 }}>
                <BtnCuenta
                  name="Confirmar"
                  icon="check-circle-outline"
                  bgColor="#006400"
                  color="#fff"
                  onPress={() => {
                    toggleModalVisible(), borrarCuenta();
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
        <View style={{ flex: 1, justifyContent: "flex-end", width: "90%" }}>
          <BtnCuenta
            name="Actualizar Cuenta"
            icon="account-reactivate"
            bgColor="#007f00"
            color="#fff"
            onPress={() => navigator.navigate("ActualizarCuenta")}
          />
          <BtnCuenta
            name="Borrar Cuenta"
            icon="account-remove"
            bgColor="#8b0000"
            color="#fff"
            onPress={() => toggleModalVisible()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centrar: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    padding: 25,
    paddingTop: "10%",
    alignItems: "center",
  },
  subtitulo: {
    fontFamily: "Chewy",
    fontSize: 24,
    color: "#999999",
  },
  textPrincipal: {
    fontFamily: "Chewy",
    fontSize: 22,
    letterSpacing: 0.3,
    maxWidth: 200,
  },
  textContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  circulo: {
    width: 150,
    height: 150,
    borderRadius: 100, // La mitad del ancho y alto para crear un círculo perfecto
    overflow: "hidden", // Esto es importante para que la imagen se recorte en forma de círculo
  },
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

export default CuentaMain;
