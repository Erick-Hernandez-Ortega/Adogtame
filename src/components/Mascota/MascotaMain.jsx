import { StyleSheet, View } from "react-native";
import React from "react";
import MascotaBarraMenu from "./MascotaBarraMenu";
import MascotaContenido from "./MascotaContenido";

const MascotaMain = () => {
  return (
    <View>
      <MascotaBarraMenu />
      <MascotaContenido />
    </View>
  );
};

export default MascotaMain;

const styles = StyleSheet.create({});
