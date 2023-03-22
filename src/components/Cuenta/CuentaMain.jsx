import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import MenuBtn from "../../navigator/MenuBtn";

const CuentaMain = () => {
  // Falta estilos y un monton de cosas xd
  return (
    <View style={styles.centrar}>
      <View style={styles.container}>
        <View style={styles.circulo}>
          <Image
            source={{ uri: "http://placekitten.com/300/300" }}
            style={styles.imagen}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitulo}>Username: </Text>
          <Text style={styles.textPrincipal}>BolitaDeOdio</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitulo}>Correo: </Text>
          <Text style={styles.textPrincipal} numberOfLines={1} ellipsizeMode="tail">jose.castaneda@alumnos.udg.mx</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitulo}>Nombre: </Text>
          <Text style={styles.textPrincipal}>Jóse Jaime Gpe.</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitulo}>Apellido: </Text>
          <Text style={styles.textPrincipal}>Castañeda Ruiz</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitulo}>Celular: </Text>
          <Text style={styles.textPrincipal}>3313197707</Text>
        </View>

        {/* <View style={{backgroundColor: "red", flex: 1, justifyContent: "flex-end"}}>
        <MenuBtn
        icon="account-circle"
        text="Mi Adogcuenta"
        onPress={() => navigator.navigate("Cuenta")}
      />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centrar: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f2f2f2",
  },
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
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
    maxWidth: 200
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
