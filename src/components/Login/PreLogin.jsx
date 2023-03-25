import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const PreLogin = (navigator) => {
  navigator = useNavigation();

  const [fontsLoaded] = useFonts({
    Chewy: require("./../../../assets/fonts/Chewy-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={style.container}>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#f4a020"}/>
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
          <Text style={style.login}>Iniciar sesión</Text>
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
    fontFamily: "Chewy"
  },
  irLogin: {
    position: "absolute",
    bottom: 170,
    backgroundColor: "#FF8C00",
    borderRadius: 15,
    width: "65%",
  },
  login: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Chewy",
    letterSpacing: 0.5,
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
    fontFamily: "Chewy",
    letterSpacing: 0.5
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
