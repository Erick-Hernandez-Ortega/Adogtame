import React from "react";
import { View } from "react-native";
import BarraMenuPrincipal from "./components/BarraMenuPrincipal";
import Contenido from "./components/ContenidoPrincipal";
import CuentaMain from "./components/Cuenta/CuentaMain";

const Principal = () => {
  return (
    <View>
      {/* <BarraMenuPrincipal />
      <Contenido/> */}
      <CuentaMain/>
    </View>
  );
};

export default Principal;
