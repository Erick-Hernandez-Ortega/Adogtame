import React from "react";
import { View } from "react-native";
import BarraMenuPrincipal from "./components/BarraMenuPrincipal";
import Contenido from "./components/ContenidoPrincipal";

const Principal = () => {
  return (
    <View>
      <BarraMenuPrincipal />
      <Contenido/>
    </View>
  );
};

export default Principal;
