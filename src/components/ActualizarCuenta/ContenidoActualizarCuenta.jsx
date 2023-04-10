import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { TextInput } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";

const ContenidoActualizarCuenta = ({ toggleModalVisible }) => {
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
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Nombres</Text>
        <TextInput placeholder={user.nombres} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Apellidos</Text>
        <TextInput placeholder={user.apellidos} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Edad</Text>
        <TextInput placeholder={user.edad} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Celular</Text>
        <TextInput placeholder={user.telefono} style={styles.textInput} />
      </View>

      <View style={{ marginTop: 35 }}>
        <BtnCuenta
          name="Guardar"
          icon="content-save-all"
          bgColor="#007f00"
          color="#fff"
          onPress={toggleModalVisible}
        />
        <BtnCuenta
          name="Cancelar"
          icon="delete-empty"
          bgColor="#8b0000"
          color="#fff"
          onPress={() => navigator.navigate("Cuenta")}
        />
      </View>
    </View>
  );
};

export default ContenidoActualizarCuenta;

const styles = StyleSheet.create({
  container: {
    height: "98%",
    width: "100%",
    padding: 20,
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
  },
  textInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Chewy",
  },
});
