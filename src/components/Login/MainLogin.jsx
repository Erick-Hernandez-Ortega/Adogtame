import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AnimatedLottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import firebase from "../../DataBase/firebase";

const MainLogin = (navigator) => {
  // Navegador
  navigator = useNavigation();
  // Evento para cancelar busqueda
  const [clic, setClic] = useState(false);
  const [clic2, setClic2] = useState(false);
  // Guardar texto de input
  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");
  // Animacion
  const animCorreo = useRef();
  const animContra = useRef();
  // Mensaje de error
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [errorContra, setErrorContra] = useState(false);
  // Funcion para limpiar los inputs
  function limpiarInputs() {
    setClic(false);
    setClic2(false);
    setCorreo("");
    setContra("");
    setErrorCorreo(false);
    setErrorContra(false);
  }
  // Funcion boton volver
  function handlerVolver() {
    limpiarInputs();
    navigator.navigate("PreLogin");
  }
  // Variable para autenticar
  const auth = firebase.getAuth(firebase.app);
  // Funcion al dar clic a Iniciar Sesion
  const handlerLogin = (navigator) => {
    if (correo === "") {
      setErrorCorreo(true);
      animCorreo.current.bounce();
    } else if (contra === "" || contra.length < 6) {
      setErrorCorreo(false);
      animContra.current.bounce();
      setErrorContra(true);
    } else {
      setErrorContra(false);
      firebase
        .signInWithEmailAndPassword(auth, correo.toLowerCase(), contra)
        .then(() => {
          limpiarInputs();
          navigator.navigate("Principal");
        })
        .catch((error) => {
          Alert.alert("Las credenciales no coinciden");
        });
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: Platform.OS === "web" ? null : "40%",
        paddingTop: Platform.OS === "web" ? null : "15%",
      }}
    >
      <View style={style.container}>
        {Platform.OS === "web" ? null : (
          <View style={style.animacion}>
            <AnimatedLottieView
              source={require("../../../assets/fonts/AnimacionLogin.json")}
              autoPlay
              loop
            />
          </View>
        )}

        {Platform.OS === "web" ? (
          <Image
            source={require("../../../assets/adogtame-logo.png")}
            style={style.image}
          />
        ) : (
          <Image
            source={require("../../../assets/adogtame-logo.png")}
            style={style.imageMovil}
          />
        )}

        <Animatable.View
          style={
            Platform.OS === "web"
              ? style.containerInputWeb
              : style.containerInput
          }
          ref={animCorreo}
        >
          <TextInput
            placeholder="Correo"
            placeholderTextColor={"darkgray"}
            style={Platform.OS === "web" ? style.inputWeb : style.input}
            onChangeText={setCorreo}
            value={correo}
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
                setCorreo("");
                setClic(false);
                Keyboard.dismiss();
              }}
            />
          )}
        </Animatable.View>
        {errorCorreo && (
          <View style={style.conatinerError}>
            <Text style={style.error}>Ingrese un correo válido</Text>
          </View>
        )}
        <Animatable.View
          style={
            Platform.OS === "web"
              ? style.containerInputCWeb
              : style.containerInputC
          }
          ref={animContra}
        >
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={"darkgray"}
            style={Platform.OS === "web" ? style.inputCWeb : style.inputC}
            onChangeText={setContra}
            value={contra}
            secureTextEntry={true}
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
        {errorContra && (
          <View style={style.conatinerError}>
            <Text style={style.error}>La contraseña no coincide</Text>
          </View>
        )}
        <View style={style.containerPregunta}>
          <TouchableOpacity
            onPress={() => {
              navigator.navigate("Registro");
            }}
          >
            <Text
              style={Platform.OS === "web" ? style.preguntaWeb : style.pregunta}
            >
              ¿No tienes cuenta?
            </Text>
          </TouchableOpacity>
          <Icon
            name="arrow-expand-right"
            size={20}
            onPress={() => {
              navigator.navigate("Registro");
            }}
          />
        </View>
        <View
          style={
            Platform.OS === "web" ? style.containerBtnWeb : style.containerBtn
          }
        >
          <TouchableOpacity
            onPress={() => {
              handlerLogin(navigator);
            }}
          >
            <Text style={style.btn}>Iniciar Sesión 🐈</Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            Platform.OS === "web" ? style.containerBtn2Web : style.containerBtn2
          }
        >
          <TouchableOpacity
            onPress={() => {
              handlerVolver();
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
    width: 450,
    height: 150,
    marginTop: 50,
  },
  imageMovil: {
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
  containerInputWeb: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
    marginStart: 15,
    width: "100%",
  },
  input: {
    fontSize: 20,
    padding: 10,
    width: "90%",
  },
  inputWeb: {
    fontSize: 20,
    padding: 15,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    width: "40%",
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
  containerInputCWeb: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginStart: 15,
    marginTop: 20,
    width: "100%",
  },
  inputCWeb: {
    fontSize: 20,
    padding: 15,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    width: "40%",
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
  preguntaWeb: {
    fontSize: 20,
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
  containerBtnWeb: {
    marginTop: 40,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "40%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
  },
  containerBtn2Web: {
    marginTop: 20,
    backgroundColor: "#f4c272",
    borderRadius: 10,
    width: "40%",
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
  conatinerError: {
    alignItems: "center",
  },
  error: {
    color: "red",
  },
});

export default MainLogin;
