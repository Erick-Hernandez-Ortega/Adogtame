import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, Image } from "react-native";
import logo from "./../../assets/adogtame-logo.png";
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
      screenOptions={{ title: <Logo />, drawerType:"back"}}
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
      <View>
        <LogoLateral />
      </View>
      <Text style={style.titulo}>Mi barra de navegacion</Text>
      <MenuBtn
        icon="home"
        text="Inicio"
        onPress={() => navigator.navigate("Principal")}
      />
      <MenuBtn
        icon="dog"
        text="Mis Adogciones"
        onPress={() => navigator.navigate("Adopciones")}
      />
      <Text style={style.txtConfig}>Configuracion</Text>
      <MenuBtn
        icon="account-circle"
        text="Mi Cuenta"
        onPress={() => navigator.navigate("Cuenta")}
      />
    </DrawerContentScrollView>
  );
};

const Logo = () => {
  return (
    <View>
      <Image source={logo} style={{ width: 200, height: 50 }} />
    </View>
  );
};

const LogoLateral = () => {
  return (
    <View>
      <Image source={logo} style={{ width: 250, height: 50 }} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    marginBottom: 10,
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  txtConfig: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Navegador;
