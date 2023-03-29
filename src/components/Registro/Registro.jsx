import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Registro = (navigator) => {
  const [clicN, setClicN] = useState(false);
  const [clicE, setClicE] = useState(false);
  const [clicUN, setClicUN] = useState(false);
  const [clicC, setClicC] = useState(false);
  const [clicT, setClicT] = useState(false);
  const [clicCon, setClicCon] = useState(false);
  const [clicCC, setClicCC] = useState(false);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [userN, setUserN] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");

  navigator = useNavigation();
  return (
    <ScrollView style={style.container}>
      <View style={style.containerChido}>
        <Text style={style.label}>Informacion peronal</Text>
        <View style={style.containerInput}>
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
        </View>
        <View style={style.containerInput}>
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
        </View>
        <View style={style.containerInput}>
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
        </View>
        <Text style={style.label}>Informacion de contacto</Text>
        <View style={style.containerInput}>
          <TextInput
            placeholder="Correo"
            style={style.input}
            onChangeText={setCorreo}
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
        </View>
        <View style={style.containerInput}>
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
        </View>
        <Text style={style.label}>Seguridad</Text>
        <View style={style.containerInput}>
          <TextInput
            placeholder="Contraseña"
            style={style.input}
            onChangeText={setContrasena}
            value={contrasena}
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
        </View>
        <View style={style.containerInput}>
          <TextInput
            placeholder="Confirmar contraseña"
            style={style.input}
            onChangeText={setConfirmContrasena}
            value={confirmContrasena}
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
        </View>
      </View>
      <View style={style.containerBtn}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            navigator.navigate("Principal");
          }}
        >
          <Text style={style.btnText}>Crear Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            navigator.navigate("PreLogin");
          }}
        >
          <Text style={style.btnText}>Volver</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
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
    marginTop: 15,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#f4c272",
    marginVertical: 20,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 25,
    padding: 10,
    fontFamily: "Chewy",
    letterSpacing: 0.7,
  },
});

export default Registro;
