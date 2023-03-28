import React from "react";
import { View, StyleSheet, StatusBar, Platform, Text } from "react-native";
import { AppBar } from "@react-native-material/core";
import Constants from "expo-constants";
import { Header } from "react-native-elements";

const BarraMenuAdopciones = () => {
  return (
    <View>
      {Platform.OS === "ios" ? <BarraMenuIos /> : <BarraMenuAndroid />}
    </View>
  );
};

const Titulo = () => {
  return (
    <Text style={{ fontFamily: "Chewy", fontSize: 22, height: 30 }}>🐱 MIS ADOGCIONES 🐶</Text>
  );
};

const BarraMenuIos = () => {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <AppBar
        style={{ paddingTop: Constants.statusBarHeight + 10, paddingBottom: 5 }}
        title={Titulo}
        centerTitle="true"
        color="#f4a020"
        tintColor="#000"
      />
    </View>
  );
};
const BarraMenuAndroid = () => {
  return (
    <View style={style.BarraPrincipal}>
      <StatusBar backgroundColor={"#f4a020"} barStyle={"dark-content"}  />
      <Header
        placement="center"
        backgroundColor="#f4a020"
        centerComponent={Titulo}
      />
    </View>
  );
};

const style = StyleSheet.create({
  BarraPrincipal: {
    flexGrow: 1,
    backgroundColor: "#f4a020",
    paddingTop: 13,
    shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
  },
});

export default BarraMenuAdopciones;
