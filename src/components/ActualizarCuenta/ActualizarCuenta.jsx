import { Alert, StyleSheet, Text, View, Modal, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";
import { Picker } from "@react-native-picker/picker";

const ActualizarCuenta = (navigator) => {
  const [modalVisible, setModalVisible] = useState(false);
  navigator = useNavigation();
  const auth = getAuth();
  const usuario = auth.currentUser;
  // Datos en los textInputs
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [pref, setPref] = useState("");
  // Funcion para hacer visible al modal
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const actualizarCuenta = () => {
    if (nombre === "") {
      setNombre(user.nombres);
    } else if (apellido === "") {
      setApellido(user.apellidos);
    } else if (edad === "") {
      setEdad(user.edad);
    } else if (celular === "") {
      setCelular(user.telefono);
    } else if (pref === "") {
      setPref(user.preferencia);
    } else {
      const docRef = firebase.db.collection("Usuarios").doc(user.id);
      docRef
        .update({
          Apellidos: apellido,
          Edad: edad,
          Nombres: nombre,
          Telefono: celular,
          Preferencia: pref,
        })
        .then(() => {
          Alert.alert("Datos actualizados correctamente :)");
          setApellido("");
          setCelular("");
          setEdad("");
          setNombre("");
          setPref("");
          navigator.navigate("Cuenta");
        })
        .catch((error) => {
          Alert.alert("Hubo un error... " + error);
        });
    }
  };
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

      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Nombres</Text>
          <TextInput
            placeholder={user.nombres}
            style={styles.textInput}
            onChangeText={setNombre}
            value={nombre}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Apellidos</Text>
          <TextInput
            placeholder={user.apellidos}
            style={styles.textInput}
            onChangeText={setApellido}
            value={apellido}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Edad</Text>
          <TextInput
            placeholder={user.edad}
            style={styles.textInput}
            onChangeText={setEdad}
            value={edad}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Celular</Text>
          <TextInput
            placeholder={user.telefono}
            style={styles.textInput}
            onChangeText={setCelular}
            value={celular}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Preferencia</Text>
          <Picker
            selectedValue={pref}
            onValueChange={(iValor, iIndex) => setPref(iValor)}
          >
            <Picker.Item label="Perros" value={"Perros"} />
            <Picker.Item label="Gatos" value={"Gatos"} />
          </Picker>
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
      {/*  <ContenidoActualizarCuenta toggleModalVisible={toggleModalVisible} /> */}
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
