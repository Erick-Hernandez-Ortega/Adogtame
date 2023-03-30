import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import firebase from "../../DataBase/firebase";

const Registro = (navigator) => {
  // Navegador
  navigator = useNavigation();
  // Evento onFocus para eliminar Texto del input
  const [clicN, setClicN] = useState(false);
  const [clicE, setClicE] = useState(false);
  const [clicUN, setClicUN] = useState(false);
  const [clicC, setClicC] = useState(false);
  const [clicT, setClicT] = useState(false);
  const [clicCon, setClicCon] = useState(false);
  const [clicCC, setClicCC] = useState(false);
  // Guardar la informacion de los inputs
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [userN, setUserN] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");
  // Animaciones
  const animNombre = useRef();
  const animEdad = useRef();
  const animUsuario = useRef();
  const animCorreo = useRef();
  const animCelular = useRef();
  const animContra = useRef();
  const animConfirmContra = useRef();
  // Funcion al dar clic en Crear Cuenta
  const handlerCrearCuenta = async (navigator) => {
    if (nombre === "") {
      animNombre.current.bounce();
    } else if (edad === "") {
      animEdad.current.bounce();
    } else if (userN === "") {
      animUsuario.current.bounce();
    } else if (correo === "") {
      animCorreo.current.bounce();
    } else if (celular === "") {
      animCelular.current.bounce();
    } else if (contrasena === "") {
      animContra.current.bounce();
    } else if (confirmContrasena === "" || confirmContrasena != contrasena) {
      animConfirmContra.current.bounce();
    } else {
      await firebase.db.collection("Usuarios").add({
        NombreCompleto: nombre,
        Edad: edad,
        NombreUsuario: userN,
        Correo: correo,
        Telefono: celular,
        Contrasena: contrasena,
      });
      setNombre("");
      setEdad("");
      setUserN("");
      setCorreo("");
      setCelular("");
      setContrasena("");
      setConfirmContrasena("");
      setClicN(false);
      setClicE(false);
      setClicUN(false);
      setClicC(false);
      setClicT(false);
      setClicCon(false);
      setClicCC(false);
      navigator.navigate("Login");
    }
  };

  return (
    <ScrollView style={style.container}>
      <SafeAreaView>
        <View style={style.containerChido}>
          <Text style={style.label}>Información personal</Text>
          <Animatable.View style={style.containerInput} ref={animNombre}>
            <TextInput
              placeholder="Nombre"
              style={style.input}
              onChangeText={setNombre}
              value={nombre}
              onFocus={() => {
                setClicN(true);
              }}
            />
            {clicN && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setNombre("");
                  setClicN(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Animatable.View style={style.containerInput} ref={animEdad}>
            <TextInput
              placeholder="Edad"
              style={style.input}
              onChangeText={setEdad}
              value={edad}
              onFocus={() => {
                setClicE(true);
              }}
              keyboardType="number-pad"
            />
            {clicE && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setEdad("");
                  setClicE(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Animatable.View style={style.containerInput} ref={animUsuario}>
            <TextInput
              placeholder="Nombre de usuario"
              style={style.input}
              onChangeText={setUserN}
              value={userN}
              onFocus={() => {
                setClicUN(true);
              }}
            />
            {clicUN && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setUserN("");
                  setClicUN(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Text style={style.label}>Información de contacto</Text>
          <Animatable.View style={style.containerInput} ref={animCorreo}>
            <TextInput
              placeholder="Correo"
              style={style.input}
              onChangeText={setCorreo}
              keyboardType={"email-address"}
              value={correo}
              onFocus={() => {
                setClicC(true);
              }}
            />
            {clicC && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setCorreo("");
                  setClicC(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Animatable.View style={style.containerInput} ref={animCelular}>
            <TextInput
              placeholder="Numero de celular"
              style={style.input}
              onChangeText={setCelular}
              value={celular}
              onFocus={() => {
                setClicT(true);
              }}
              keyboardType="numeric"
            />
            {clicT && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setCelular("");
                  setClicT(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Text style={style.label}>Seguridad</Text>
          <Animatable.View style={style.containerInput} ref={animContra}>
            <TextInput
              placeholder="Contraseña"
              style={style.input}
              onChangeText={setContrasena}
              value={contrasena}
              secureTextEntry={true}
              onFocus={() => {
                setClicCon(true);
              }}
            />
            {clicCon && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setContrasena("");
                  setClicCon(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <Animatable.View style={style.containerInput} ref={animConfirmContra}>
            <TextInput
              placeholder="Confirmar contraseña"
              style={style.input}
              onChangeText={setConfirmContrasena}
              value={confirmContrasena}
              secureTextEntry={true}
              onFocus={() => {
                setClicCC(true);
              }}
            />
            {clicCC && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setConfirmContrasena("");
                  setClicCC(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
        </View>
        <View style={style.containerBtn}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              handlerCrearCuenta(navigator);
            }}
          >
            <Text style={style.btnText}>Crear Cuenta 🐾</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btn}
            onPress={() => {
              navigator.navigate("PreLogin");
            }}
          >
            <Text style={style.btnText}>Volver 🔙</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChido: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%",
    marginTop: 10,
  },
  input: {
    fontSize: 17,
    padding: 10,
    width: "90%",
  },
  label: {
    fontSize: 18,
    marginTop: 18,
    fontFamily: "Chewy",
    color: "darkgray",
    letterSpacing: 0.5,
  },
  containerBtn: {
    marginTop: 60,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#f4c272",
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  btnText: {
    fontSize: 25,
    padding: 10,
    fontFamily: "Chewy",
    letterSpacing: 0.7,
  },
});

export default Registro;
