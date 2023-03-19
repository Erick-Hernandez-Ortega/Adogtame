import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Principal from "../Principal";
import CuentaMain from "../components/Cuenta/CuentaMain";
import MainAdopciones from "../components/Adopciones/MainAdopcion";

const Nav = createDrawerNavigator();

const Navegador = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Principal" component={Principal} />
      <Nav.Screen name="Adopciones" component={MainAdopciones} />
      <Nav.Screen name="Cuenta" component={CuentaMain} />
    </Nav.Navigator>
  );
};

export default Navegador;
