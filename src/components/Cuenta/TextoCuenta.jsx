import { Text, View, StyleSheet, Platform } from "react-native";

const TextoCuenta = (props) => {
  return (
    <View
      style={Platform.OS === "web" ? styles.containerWeb : styles.container}
    >
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Nombres: </Text>
        <Text style={styles.textPrincipal}>{props.nombres}</Text>
      </View>
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Apellidos: </Text>
        <Text style={styles.textPrincipal}>{props.apellidos}</Text>
      </View>
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Edad: </Text>
        <Text style={styles.textPrincipal}>{props.edad} años</Text>
      </View>
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Correo: </Text>
        <Text style={styles.textPrincipal}>{props.correo}</Text>
      </View>
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Celular: </Text>
        <Text style={styles.textPrincipal}>{props.telefono}</Text>
      </View>
      <View
        style={
          Platform.OS === "web" ? styles.textContainerWeb : styles.textContainer
        }
      >
        <Text style={styles.subtitulo}>Preferencia: </Text>
        <Text style={styles.textPrincipal}>{props.preferencia}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitulo: {
    fontFamily: "Chewy",
    fontSize: 24,
    color: "#999999",
  },
  textPrincipal: {
    fontFamily: "Chewy",
    fontSize: 22,
    letterSpacing: 0.3,
    maxWidth: 220,
  },
  textContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    width: "100%",
  },
  containerWeb: {
    width: "80%",
  },
  textContainerWeb: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#f7f7f8",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  containerRow: {
    flexDirection: "row",
  },
});

export default TextoCuenta;
