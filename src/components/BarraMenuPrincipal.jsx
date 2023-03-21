import React from "react";
import { View, StyleSheet, StatusBar, Platform, Image } from "react-native";
import { AppBar, IconButton } from "@react-native-material/core";
import Constants from "expo-constants";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import logo from "./../../assets/adogtame-logo.png";
import { Header } from "react-native-elements";

const BarraMenuPrincipal = () => {
  return (
    <View>
      {Platform.OS === "ios" ? <BarraMenuIos /> : <BarraMenuAndroid />}
    </View>
  );
};

const BarraMenuIos = () => {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <AppBar
        style={{ paddingTop: Constants.statusBarHeight + 10, paddingBottom: 5 }}
        title={<Logo />}
        centerTitle="true"
        color="#f4a020"
        trailing={BtnBuscar}
        contentContainerStyle={{justifyContent: "flex-end"}}
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

const BarraMenuAndroid = () => {
  return (
    <View style={style.BarraPrincipal}>
      <StatusBar backgroundColor={"#f4a020"} barStyle={"dark-content"} />
      <Header
        placement="center"
        backgroundColor="#f4a020"
        centerComponent={<Logo />}
        rightComponent={BtnBuscar}
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

const BtnBuscar = (
  <IconButton
    icon={(props) => <Icon name="magnify" color="black" size={25} />}
  />
);

const BtnMenu = (
  <IconButton icon={(props) => <Icon name="menu" color="black" size={30} />} />
);

export default BarraMenuPrincipal;
