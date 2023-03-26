import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const MainLogin = (navigator) => {
  navigator = useNavigation();
  const [clic, setClic] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");
  const [clic2, setClic2] = useState(false);
  return (
    <View style={style.container}>
      <Image
        source={require("../../../assets/adogtame-logo.png")}
        style={style.image}
      />
      <View style={style.containerInput}>
        <TextInput
          placeholder="Nombre de usuario"
          style={style.input}
          onChangeText={setUsuario}
          value={usuario}
          onFocus={() => {
            setClic(true);
          }}
        />
        {clic && (
          <Icon
            name="close"
            size={25}
            style={style.cancelar}
            onPress={() => {
              setUsuario("");
              setClic(false);
              Keyboard.dismiss();
            }}
          />
        )}
      </View>
      <View style={style.containerInputC}>
        <TextInput
          placeholder="Contraseña"
          style={style.inputC}
          onChangeText={setContra}
          value={contra}
          onFocus={() => {
            setClic2(true);
          }}
        />
        {clic2 && (
          <Icon
            name="close"
            size={25}
            style={style.cancelar}
            onPress={() => {
              setContra("");
              setClic2(false);
              Keyboard.dismiss();
            }}
          />
        )}
      </View>
      <View style={style.containerPregunta}>
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Registro");
          }}
        >
          <Text style={style.pregunta}>¿No tienes cuenta?</Text>
        </TouchableOpacity>
        <Icon
          name="arrow-expand-right"
          size={20}
          onPress={() => {
            navigator.navigate("Registro");
          }}
        />
      </View>
      <View style={style.containerBtn}>
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Principal");
          }}
        >
          <Text style={style.btn}>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 100,
    marginTop: 130,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth : 1,
    marginTop: 80,
    width: "65%",
  },
  input: {
    fontSize: 20,
    padding: 10,
    width: "90%",
  },
  containerInputC: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth : 1,
    marginTop: 20,
    width: "65%",
  },
  inputC: {
    fontSize: 20,
    padding: 10,
    width: "90%",
  },
  cancelar: {
    marginEnd: 10,
  },
  containerPregunta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  pregunta: {
    fontSize: 16,
    marginEnd: 10,
  },
  containerBtn: {
    marginTop: 80,
    backgroundColor: "#f4a020",
    borderRadius: 25,
    width: "70%",
  },
  btn: {
    fontSize: 23,
    padding: 10,
    textAlign: "center",
  },
});

export default MainLogin;
