import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  Platform,
  Text,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Buscador = (navigator) => {
  const [busqueda, setBusqueda] = useState("");
  const [clic, setClic] = useState(false);
  const [botonStyle, setBotonStyle] = useState(null);
  const [iphone] = useState(Platform.OS == "ios");

  navigator = useNavigation();
  return (
    <View>
      <SafeAreaView style={style.safeArea}>
        <View style={iphone ? style.containerIOS : style.container}>
          <View style={style.containerInput}>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => {
                navigator.navigate("Principal");
              }}
              style={{ marginStart: 10 }}
            />

            <TextInput
              style={style.input}
              placeholder="Buscar chuchos...🐶"
              onChangeText={setBusqueda}
              value={busqueda}
              onFocus={() => {
                setClic(true);
              }}
              onSubmitEditing={() => Alert.alert("Di click")}
            />
            {clic && (
              <Icon
                name="close"
                size={25}
                style={style.cancelar}
                onPress={() => {
                  setBusqueda("");
                  setClic(false);
                  Keyboard.dismiss();
                }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>

      <View style={style.filtroContainer}>
        <Text style={style.textFiltro}>Buscar por: </Text>
        <TouchableOpacity
          style={[
            style.botonFiltroNoSeleccionado,
            botonStyle === "boton1" && style.botonFiltro,
          ]}
          onPress={() => setBotonStyle("boton1")}
        >
          <Text
            style={[
              style.textBotonNoSeleccionado,
              botonStyle === "boton1" && style.textBoton,
            ]}
          >
            Nombre
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.botonFiltroNoSeleccionado,
            botonStyle === "boton2" && style.botonFiltro,
          ]}
          onPress={() => setBotonStyle("boton2")}
        >
          <Text
            style={[
              style.textBotonNoSeleccionado,
              botonStyle === "boton2" && style.textBoton,
            ]}
          >
            Raza
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textFiltro: {
    fontSize: 17,
    fontFamily: "Chewy",
    letterSpacing: 0.5,
    flex: 1,
  },
  filtroContainer: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    elevation: Platform.OS === "android" ? 4 : 0, // Agrega sombra en Android
    shadowColor: "#000000", // Agrega sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  botonFiltroNoSeleccionado: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#444",
  },
  botonFiltro: {
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  textBoton: {
    fontFamily: "Chewy",
    fontSize: 13,
    letterSpacing: 0.5,
    color: "#fff",
  },
  textBotonNoSeleccionado: {
    fontFamily: "Chewy",
    fontSize: 13,
    letterSpacing: 0.5,
    color: "#444",
  },
  safeArea: {
    backgroundColor: "#f4a020",
  },
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#f4a020",
  },
  containerIOS: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f4a020",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  input: {
    marginStart: 8,
    fontSize: 20,
    padding: 8,
    paddingLeft: 20,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  cancelar: {
    alignItems: "flex-end",
    marginLeft: 7,
  },
});

export default Buscador;
