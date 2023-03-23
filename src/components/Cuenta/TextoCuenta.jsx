import { Text, View, StyleSheet } from "react-native";

const TextoCuenta = (props) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Username: </Text>
        <Text style={styles.textPrincipal}>{props.username}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Correo: </Text>
        <Text
          style={styles.textPrincipal}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {props.correo}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Nombre: </Text>
        <Text style={styles.textPrincipal}>{props.nombre}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Apellido: </Text>
        <Text style={styles.textPrincipal}>{props.apellidos}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Celular: </Text>
        <Text style={styles.textPrincipal}>{props.celular}</Text>
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
});

export default TextoCuenta;
