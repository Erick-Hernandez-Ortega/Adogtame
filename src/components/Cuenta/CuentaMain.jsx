import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

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
        <Text style={styles.name}>Soy cuenta</Text>

        </View>
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
    backgroundColor: "#f2f2f2"
  },
  container: {
    backgroundColor: "red",
    marginTop: Constants.statusBarHeight - 40,
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
    alignItems: "center"
  },
  name: {
    fontFamily: "Chewy",
  },
  textContainer: {
    backgroundColor: "red",
    width: "100%",
    marginTop: 20
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
