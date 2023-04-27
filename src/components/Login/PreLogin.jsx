import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import { useFonts } from "expo-font";

const PreLogin = (navigator) => {
  navigator = useNavigation();
  const [fontsLoaded] = useFonts({
    Chewy: require("./../../../assets/fonts/Chewy-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={style.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f4a020"} />
      <View
        style={
          Platform.OS === "web"
            ? style.containerTituloWeb
            : style.containerTitulo
        }
      >
        <Text style={Platform.OS === "web" ? style.tituloWeb : style.titulo}>
          Inicia sesion con tu cuenta o crea una para conseguir tu futura
          mascota
        </Text>
      </View>
      {Platform.OS === "web" ? (
        <View style={style.img}>
          <Image
            source={require("../../../assets/adogtame-logo.png")}
            style={style.image}
          />
        </View>
      ) : (
        <View style={style.animacion}>
          <AnimatedLottieView
            source={require("../../../assets/fonts/AnimacionPreLogin.json")}
            autoPlay
            loop
          />
        </View>
      )}
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
  containerTituloWeb: {
    width: "80%",
    marginTop: 60,
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Chewy",
  },
  tituloWeb: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Chewy",
  },
  irLogin: {
    position: "absolute",
    bottom: 170,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "65%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  login: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Chewy",
    letterSpacing: 0.5,
  },
  irRegistro: {
    position: "absolute",
    bottom: 90,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "65%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  registro: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Chewy",
    letterSpacing: 0.5,
  },
  divider: {
    position: "absolute",
    bottom: 150,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
  },
  animacion: {
    width: "80%",
    height: "45%",
  },
  img: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 30,
    width: "50%",
    height: "50%",
  },
});

export default PreLogin;
