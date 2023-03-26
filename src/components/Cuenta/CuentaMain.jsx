import { View, StyleSheet, Image } from "react-native";
import BtnCuenta from "./BtnCuenta";
import TextoCuenta from "./TextoCuenta";
import { useNavigation } from "@react-navigation/native";

const CuentaMain = () => {

  navigator = useNavigation();

  const user = {
    username: "Bolita",
    correo: "jose.castaneda@alumnos.udg.mx",
    nombre: "Jóse Jaime Gpe.",
    apellidos: "Castañeda Ruiz",
    celular: "3313197707",
  };

  return (
    <View style={styles.centrar}>
      <View style={styles.container}>
        <View style={styles.circulo}>
          <Image
            source={{ uri: "http://placekitten.com/300/300" }}
            style={styles.imagen}
          />
        </View>

        <TextoCuenta {...user} />

        <View style={{ flex: 1, justifyContent: "flex-end", width: "90%" }}>
          <BtnCuenta
            name="Actualizar Cuenta"
            icon="account-reactivate"
            bgColor="#007f00"
            color="#fff"
            onPress={() => navigator.navigate("ActualizarCuenta")}
          />
          <BtnCuenta
            name="Borrar Cuenta"
            icon="account-remove"
            bgColor="#8b0000"
            color="#fff"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centrar: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    padding: 25,
    paddingTop: "10%",
    backgroundColor: "#f7f7f8",
    
    alignItems: "center",
  },
  subtitulo: {
    fontFamily: "Chewy",
    fontSize: 24,
    color: "#999999",
  },
  textPrincipal: {
    fontFamily: "Chewy",
    fontSize: 22,
    letterSpacing: 0.3,
    maxWidth: 200,
  },
  textContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  circulo: {
    width: 150,
    height: 150,
    borderRadius: 100, // La mitad del ancho y alto para crear un círculo perfecto
    overflow: "hidden", // Esto es importante para que la imagen se recorte en forma de círculo
  },
});

export default CuentaMain;
