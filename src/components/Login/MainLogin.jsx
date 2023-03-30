import React, { useState, useRef } from "react";
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
import AnimatedLottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const MainLogin = (navigator) => {
  // Navegador
  navigator = useNavigation();
  // Evento para cancelar busqueda
  const [clic, setClic] = useState(false);
  const [clic2, setClic2] = useState(false);
  // Guardar texto de input
  const [usuario, setUsuario] = useState("");
  const [contra, setContra] = useState("");
  // Animacion
  const animNombre = useRef();
  const animContra = useRef();
  // Funcion al dar clic a Iniciar Sesion
  const handlerLogin = (navigator) => {
    if (usuario === "") {
      animNombre.current.bounce();
    }else if(contra === ""){
      animContra.current.bounce();
    }else{
      navigator.navigate("Principal");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: "40%", paddingTop: "15%" }}
    >
      <View style={style.container}>
        <View style={style.animacion}>
          <AnimatedLottieView
            source={require("../../../assets/fonts/AnimacionLogin.json")}
            autoPlay
            loop
          />
        </View>
        <Image
          source={require("../../../assets/adogtame-logo.png")}
          style={style.image}
        />
        <Animatable.View style={style.containerInput} ref={animNombre}>
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
        </Animatable.View>
        <Animatable.View style={style.containerInputC} ref={animContra}>
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
        </Animatable.View>
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
              handlerLogin(navigator);
            }}
          >
            <Text style={style.btn}>Iniciar Sesión 🐈</Text>
          </TouchableOpacity>
        </View>
        <View style={style.containerBtn2}>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("PreLogin");
            }}
          >
            <Text style={style.btn}>Volver 🔙</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 70,
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
    borderBottomWidth: 1,
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
    fontFamily: "Chewy",
    letterSpacing: 0.4,
  },
  containerBtn: {
    marginTop: 80,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  containerBtn2: {
    marginTop: 20,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  btn: {
    fontSize: 23,
    padding: 10,
    textAlign: "center",
    fontFamily: "Chewy",
    letterSpacing: 0.7,
  },
  animacion: {
    width: "80%",
    height: "30%",
  },
});

export default MainLogin;
