import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, View, Image, Alert } from "react-native";
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
import MascotaResultado from "../Buscador/MascotaResultado";
import MisPublicacionesMain from "../MisPublicaciones/MisPublicacionesMain";
import BarraMenuPublicaciones from "../MisPublicaciones/BarraMenuPublicaciones";
import BarraSubirMascota from "../SubirMascota/BarraSubirMascota";
import SubirMascotaMain from "../SubirMascota/SubirMascotaMain";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";

const Nav = createDrawerNavigator();

const Navegador = React.memo(() => {
  return (
    <Nav.Navigator
      initialRouteName="PreLogin"
      drawerContent={(props) => <MenuLateralContenido {...props} />}
      screenOptions={{
        title: "",
        headerBackground: BarraCentral,
        headerLeftContainerStyle: { marginTop: 20 },
        headerTintColor: "#000",
        gestureHandlerProps: { enabled: false },
      }}
    >
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
      <Nav.Screen
        name="SubirMascotas"
        component={SubirMascotaMain}
        options={{ headerBackground: BarraSubirMacotas }}
      />
      <Nav.Screen
        name="MascotaResultado"
        component={MascotaResultado}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="MisPublicaciones"
        component={MisPublicacionesMain}
        options={{ headerBackground: BarraMenuPublicaciones }}
      />
      <Nav.Screen
        name="Registro"
        component={Registro}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="Login"
        component={MainLogin}
        options={{ headerShown: false }}
      />
      <Nav.Screen
        name="PreLogin"
        component={PreLogin}
        options={{ headerShown: false }}
      />
    </Nav.Navigator>
  );
});

const MenuLateralContenido = React.memo(({ navigator }) => {
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
      <Text style={style.titulo}>Actividad</Text>
      <MenuBtn
        icon="dog"
        text="Mis Adogciones"
        onPress={() => navigator.navigate("Adopciones")}
      />
      <MenuBtn
        icon="cat"
        text="Mis Publicatciones"
        onPress={() => navigator.navigate("MisPublicaciones")}
      />
      <Text style={style.titulo}>Acciones</Text>
      <MenuBtn
        icon="cat"
        text="Subir Mascota"
        onPress={() => navigator.navigate("SubirMascotas")}
      />
      <Text style={style.txtConfig}>Configuracion</Text>
      <MenuBtn
        icon="account-circle"
        text="Mi Adogcuenta"
        onPress={() => navigator.navigate("Cuenta")}
      />
      <MenuBtn
        icon="logout-variant"
        text="Cerrar Sesion"
        onPress={() => logOut(navigator)}
      />
    </DrawerContentScrollView>
  );
});

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

function BarraSubirMacotas() {
  return <BarraSubirMascota />;
}

function logOut(navigator) {
  firebase
    .getAuth()
    .signOut()
    .then(() => {
      Alert.alert("Sesion cerrada con extito :)");
      navigator.navigate("PreLogin");
    })
    .catch((e) => {
      Alert.alert("Error al cerrar sesion :(");
    });
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
