import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, Image } from "react-native";
import logo from "./../../../assets/adogtame-logo.png";
import Principal from "../../Principal";
import CuentaMain from "../Cuenta/CuentaMain";
import MainAdopciones from "../Adopciones/MainAdopcion";
import MenuBtn from "./MenuBtn";
import BarraMenuPrincipal from "../MenuPrincipal/BarraMenuPrincipal";
import BarraMenuCuenta from "../Cuenta/BarraMenuCuenta";
import Buscador from "../Buscador/Buscador";
import MascotaMain from "../Mascota/MascotaMain";
import MainLogin from "../Login/MainLogin";
import Registro from "../Registro/Registro";
import PreLogin from "../Login/PreLogin";
import ActualizarCuenta from "../ActualizarCuenta/ActualizarCuenta";
import BarraMenuAdopciones from "../Adopciones/BarraMenuAdopciones";
import MainAdoptado from "../Adoptado/MainAdoptado";

const Nav = createDrawerNavigator();

const Navegador = () => {
  return (
    <Nav.Navigator
      initialRouteName="PreLogin"
      drawerContent={(props) => <MenuLateralContenido {...props} />}
      screenOptions={{
        title: "",
        headerBackground: BarraCentral,
        headerLeftContainerStyle: { marginTop: 20 },
        headerTintColor: "#000",
      }}
    >
      <Nav.Screen
        name="PreLogin"
        component={PreLogin}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Login"
        component={MainLogin}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false }}
      />
      <Nav.Screen name="Principal" component={Principal} />
      <Nav.Screen
        name="ActualizarCuenta"
        component={ActualizarCuenta}
        options={{ headerBackground: CuentaBarraMenu }}
      />
      <Nav.Screen
        name="Adopciones"
        component={MainAdopciones}
        options={{ headerBackground: BarraMenuAdopciones }}
      />
      <Nav.Screen
        name="Cuenta"
        component={CuentaMain}
        options={{ headerBackground: CuentaBarraMenu }}
      />
      <Nav.Screen
        name="Buscar"
        component={Buscador}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Mascota"
        component={MascotaMain}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Adoptado"
        component={MainAdoptado}
        options={{ headerShown: false }}
      />
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
        icon="magnify"
        text="Buscar"
        onPress={() => navigator.navigate("Buscar")}
      />
      <MenuBtn
        icon="dog"
        text="Mis Adogciones"
        onPress={() => navigator.navigate("Adopciones")}
      />
      <Text style={style.txtConfig}>Configuracion</Text>
      <MenuBtn
        icon="account-circle"
        text="Mi Adogcuenta"
        onPress={() => navigator.navigate("Cuenta")}
      />
    </DrawerContentScrollView>
  );
};

const LogoLateral = () => {
  return (
    <View>
      <Image source={logo} style={{ width: 250, height: 50 }} />
    </View>
  );
};

const CuentaBarraMenu = () => {
  return <BarraMenuCuenta />;
};

function BarraCentral() {
  return <BarraMenuPrincipal />;
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f8",
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
