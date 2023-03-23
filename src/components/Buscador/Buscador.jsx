import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  Platform,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const Buscador = (navigator) => {
  const [busqueda, setBusqueda] = useState("");
  const [clic, setClic] = useState(false);
  const [iphone] = useState(Platform.OS == "ios");

  navigator = useNavigation();
  return (
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
  );
};

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: "#f4a020",
    elevation: Platform.OS === "android" ? 4 : 0, // Agrega sombra en Android
    shadowColor: "#000000", // Agrega sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
