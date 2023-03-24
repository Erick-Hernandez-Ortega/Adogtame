import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const PreLogin = (navigator) => {
  navigator = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.containerTitulo}>
        <Text style={style.titulo}>
          Inicia sesion con tu cuenta o crea una para conseguir tu futura
          mascota
        </Text>
      </View>
      <View style={style.irLogin}>
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Login");
          }}
        >
          <Text style={style.login}>Iniciar sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={style.irRegistro}>
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Registro");
          }}
        >
          <Text style={style.registro}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <View style={style.divider}></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    flex: 1,
  },
  containerTitulo: {
    width: "80%",
    marginVertical: 60,
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
  },
  irLogin: {
    position: "absolute",
    bottom: 170,
    backgroundColor: "#FFBB77",
    borderRadius: 15,
    width: "65%",
  },
  login: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  irRegistro: {
    position: "absolute",
    bottom: 90,
    backgroundColor: "#FFBB77",
    borderRadius: 15,
    width: "65%",
  },
  registro: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  divider: {
    position: "absolute",
    bottom: 150,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
  },
});

export default PreLogin;
