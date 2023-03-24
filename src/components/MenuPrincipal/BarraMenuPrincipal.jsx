import React from "react";
import { View, StyleSheet, StatusBar, Platform, Image } from "react-native";
import { AppBar } from "@react-native-material/core";
import Constants from "expo-constants";
import BtnBuscar from "./BtnBuscar";
import { useNavigation } from "@react-navigation/native";
import logo from "./../../../assets/adogtame-logo.png";
import { Header } from "react-native-elements";

const BarraMenuPrincipal = (navigator) => {
  return (
    <View>
      {Platform.OS === "ios" ? (
        <BarraMenuIos {...navigator} />
      ) : (
        <BarraMenuAndroid {...navigator} />
      )}
    </View>
  );
};

const BarraMenuIos = (navigator) => {
  navigator = useNavigation();
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <AppBar
        style={{ paddingTop: Constants.statusBarHeight + 10, paddingBottom: 5 }}
        title={<Logo />}
        centerTitle="true"
        color="#f4a020"
        trailing={BtnBuscar(navigator)}
        contentContainerStyle={{ justifyContent: "flex-end" }}
      />
    </View>
  );
};

const Logo = () => {
  return (
    <View>
      <Image source={logo} style={{ width: 150, height: 50 }} />
    </View>
  );
};

const BarraMenuAndroid = (navigator) => {
  navigator = useNavigation();
  return (
    <View style={style.BarraPrincipal}>
      <StatusBar backgroundColor={"#f4a020"} barStyle={"dark-content"} />
      <Header
        placement="center"
        backgroundColor="#f4a020"
        centerComponent={<Logo />}
        rightComponent={BtnBuscar(navigator)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  BarraPrincipal: {
    flexGrow: 1,
    backgroundColor: "#f4a020",
  },
});

export default BarraMenuPrincipal;
