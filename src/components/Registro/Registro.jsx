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
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import firebase from "../../DataBase/firebase";
import AnimatedLottieView from "lottie-react-native";
import { RadioButton } from "react-native-paper";

const Registro = (navigator) => {
  const [Isloading, setIsLoading] = useState(false);
  // Navegador
  navigator = useNavigation();
  // Evento onFocus para eliminar Texto del input
  const [clicN, setClicN] = useState(false);
  const [clicE, setClicE] = useState(false);
  const [clicAp, setClicAp] = useState(false);
  const [clicC, setClicC] = useState(false);
  const [clicT, setClicT] = useState(false);
  const [clicCon, setClicCon] = useState(false);
  const [clicCC, setClicCC] = useState(false);
  // Mostrar mensaje de error
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEdad, setErrorEdad] = useState(false);
  const [errorApellido, setErrorApellido] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [errorCelular, setErrorCelular] = useState(false);
  const [errorContra, setErrorContra] = useState(false);
  const [errorCContra, setErrorCContra] = useState(false);
  // Guardar la informacion de los inputs
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [apellido, setApellido] = useState("");
  const [radio, setRadio] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");
  // Animaciones
  const animNombre = useRef();
  const animEdad = useRef();
  const animApellido = useRef();
  const animRadio = useRef();
  const animCorreo = useRef();
  const animCelular = useRef();
  const animContra = useRef();
  const animConfirmContra = useRef();
  // Variables para autenticar
  const auth = firebase.getAuth(firebase.app);
  // Funcion para el radiobutton
  const handleRadio = (rValor) => {
    setRadio(rValor);
  };
  // Funcion al dar clic en Crear Cuenta
  const handlerCrearCuenta = (navigator) => {
    if (nombre === "" || nombre.length < 6) {
      animNombre.current.bounce();
      setErrorNombre(true);
    } else if (apellido === "" || apellido.length < 6) {
      setErrorNombre(false);
      animApellido.current.bounce();
      setErrorApellido(true);
    } else if (edad === "" || parseInt(edad) > 99) {
      setErrorApellido(false);
      animEdad.current.bounce();
      setErrorEdad(true);
    } else if (radio === "") {
      setErrorEdad(false);
      animRadio.current.bounce();
    } else if (correo === "") {
      setErrorApellido(false);
      animCorreo.current.bounce();
      setErrorCorreo(true);
    } else if (celular === "" || celular.length != 10) {
      setErrorCorreo(false);
      animCelular.current.bounce();
      setErrorCelular(true);
    } else if (contrasena === "" || contrasena.length < 6) {
      setErrorCelular(false);
      animContra.current.bounce();
      setErrorContra(true);
    } else if (confirmContrasena === "" || confirmContrasena != contrasena) {
      setErrorContra(false);
      animConfirmContra.current.bounce();
      setErrorCContra(true);
    } else {
      setErrorCContra(false);
      setIsLoading(true);
      firebase
        .createUserWithEmailAndPassword(auth, correo, contrasena)
        .then(async () => {
          await firebase.db.collection("Usuarios").add({
            Nombres: nombre,
            Edad: edad,
            Apellidos: apellido,
            Correo: correo,
            Telefono: celular,
            Contrasena: contrasena,
            Preferencia: radio,
          });
          setNombre("");
          setEdad("");
          setApellido("");
          setCorreo("");
          setCelular("");
          setContrasena("");
          setConfirmContrasena("");
          setClicN(false);
          setClicE(false);
          setClicAp(false);
          setClicC(false);
          setClicT(false);
          setClicCon(false);
          setClicCC(false);
          setErrorContra(false);
          Alert.alert(
            "🐶 Adogcuenta 🐶",
            "¡Tu Adogcuenta fue creada con éxito!"
          );
          setIsLoading(false);
          navigator.navigate("Login");
        })
        .catch((error) => {
          Alert.alert("¡El correo ya tiene una cuenta, ingresa otro!");
          setIsLoading(false);
        });
    }
  };

  return (
    <ScrollView style={style.container}>
      <SafeAreaView>
        <AnimatedLottieView
          source={require("../../../assets/fonts/AcountLoading.json")}
          autoPlay
          loop
          style={{ opacity: Isloading ? 1 : 0 }}
        />
        <View style={[style.containerChido, { opacity: Isloading ? 0 : 1 }]}>
          <Text style={style.label}>Información personal</Text>
          <Animatable.View style={style.containerInput} ref={animNombre}>
            <TextInput
              placeholder="Nombres"
              maxLength={30}
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
          <View style={style.containerError}>
            {errorNombre && (
              <Text style={style.error}>
                Este campo debe tener entre 6 y 30 caracteres.
              </Text>
            )}
          </View>
          <Animatable.View style={style.containerInput} ref={animApellido}>
            <TextInput
              placeholder="Apellidos"
              style={style.input}
              onChangeText={setApellido}
              value={apellido}
              onFocus={() => {
                setClicAp(true);
              }}
            />
            {clicAp && (
              <Icon
                name="close"
                size={25}
                onPress={() => {
                  setApellido("");
                  setClicAp(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </Animatable.View>
          <View style={style.containerError}>
            {errorApellido && (
              <Text style={style.error}>
                Este campo debe tener entre 6 y 30 caracteres.
              </Text>
            )}
          </View>
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
          <View style={style.containerError}>
            {errorEdad && (
              <Text style={style.error}>Ingrese una edad válida</Text>
            )}
          </View>
          <Text style={style.labelR}>¿Qué prefieres?</Text>
          <Animatable.View style={style.containerRadio} ref={animRadio}>
            <RadioButton.Group onValueChange={handleRadio} value={radio}>
              <View style={style.containerRadio}>
                <View style={style.containerRadio1}>
                  <Text>Perros</Text>
                  <RadioButton value="Perros" />
                </View>
                <View style={style.containerRadio2}>
                  <Text>Gatos</Text>
                  <RadioButton value="Gatos" />
                </View>
              </View>
            </RadioButton.Group>
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
          <View style={style.containerError}>
            {errorCorreo && (
              <Text style={style.error}>Ingrese un correo válido</Text>
            )}
          </View>
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
          <View style={style.containerError}>
            {errorCelular && (
              <Text style={style.error}>Ingrese un numéro de 10 dígitos</Text>
            )}
          </View>
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
          <View style={style.containerError}>
            {errorContra && (
              <Text style={style.error}>
                Este campo debe tener mínimo 6 caracteres.
              </Text>
            )}
          </View>
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
          <View style={style.containerError}>
            {errorCContra && (
              <Text style={style.error}>Las contraseñas no coinciden</Text>
            )}
          </View>
        </View>
        <View style={[style.containerBtn, { opacity: Isloading ? 0 : 1 }]}>
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
  labelR: {
    fontSize: 18,
    marginTop: 18,
    fontFamily: "Chewy",
    color: "darkgray",
    letterSpacing: 0.5,
  },
  containerBtn: {
    marginTop: 40,
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
  containerError: {
    width: "90%",
  },
  error: {
    color: "red",
  },
  containerRadio1: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerRadio2: {
    paddingLeft: 5,
    flexDirection: "row",
    alignItems: "center",
    borderLeftColor: "black",
    borderLeftWidth: 1,
  },
  containerRadio: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default Registro;
