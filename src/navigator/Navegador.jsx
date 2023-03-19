import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";
import Principal from "../Principal";
import CuentaMain from "../components/Cuenta/CuentaMain";
import MainAdopciones from "../components/Adopciones/MainAdopcion";
import MenuBtn from "./MenuBtn";

const Nav = createDrawerNavigator();

const Navegador = () => {
  return (
    <Nav.Navigator
      initialRouteName="Principal"
      drawerContent={(props) => <MenuLateralContenido {...props} />}
    >
      <Nav.Screen name="Principal" component={Principal} />
      <Nav.Screen name="Adopciones" component={MainAdopciones} />
      <Nav.Screen name="Cuenta" component={CuentaMain} />
    </Nav.Navigator>
  );
};

const MenuLateralContenido = ({ navigator }) => {
  navigator = useNavigation();
  return (
    <DrawerContentScrollView style={style.container}>
      <Text>Mi barra de navegacion</Text>
      <MenuBtn text="Inicio" onPress={() => navigator.navigate("Principal")} />
      <MenuBtn text="Adopciones" onPress={() => navigator.navigate("Adopciones")}/>
      <MenuBtn text="Cuenta" onPress={() => navigator.navigate("Cuenta")}/>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default Navegador;
