import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContenidoAdoptado = ({
  name,
  url,
  descripcion,
  edad,
  genero,
  raza,
  tipo,
  idDuenno,
  nombreDuenno,
  telefonoDuenno,
  edadDuenno,
  ubicacion,
  fechaRegistro,
}) => {
  return (
    <View
      style={{
        padding: 20,
        width: "100%",
        height: "100%",
        paddingBottom: "35%",
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: url }}
          style={{ height: 150, width: 150, borderRadius: 150 / 2 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date}>Fecha de registro: {fechaRegistro}</Text>
        <Text style={styles.date}>Fecha de adopción: 22-12-2012</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre</Text>
        <Text style={styles.textValue}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Edad</Text>
        <Text style={styles.textValue}>{edad} años</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.petAge}>¿Es chucho o michi?</Text>
        <Text style={styles.petAgeValue}>
          Es un {tipo ? "Chucho 🐕" : "Michi 🐈"}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Raza</Text>
        <Text style={styles.textValue}>{raza}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.petBreed}>Genero</Text>
        <Text style={styles.petBreedValue}>
          {genero ? "Es un señor" : "Es una señora"}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.petBreed}>¿Onta Ubicado?</Text>
        <Text style={styles.petBreedValue}>{ubicacion}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Descripción</Text>
      </View>
      <Text style={styles.textDescription}>{descripcion}</Text>
      <View
        style={{ height: 1, backgroundColor: "#ccc", marginVertical: 20 }}
      />
      <Text style={styles.ownerLabel}>Datos del dueño anterior</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre</Text>
        <Text style={styles.textValue}>{nombreDuenno}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Teléfono</Text>
        <Text style={styles.textValue}>{telefonoDuenno}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Correo</Text>
        <Text style={styles.textValue}>{idDuenno}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Edad</Text>
        <Text style={styles.textValue}>{edadDuenno} años</Text>
      </View>
    </View>
  );
};

export default ContenidoAdoptado;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Chewy",
    fontSize: 20,
    color: "#999",
  },
  textValue: {
    fontFamily: "Chewy",
    fontSize: 20,
  },
  textContainer: {
    marginVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  textDescription: {
    fontFamily: "Chewy",
    fontSize: 18,
    textAlign: "justify",
  },
  ownerLabel: {
    fontFamily: "Chewy",
    textAlign: "center",
    fontSize: 18,
  },
  petBreed: {
    fontSize: 20,
    marginBottom: 5,
    color: "#999999",
    fontFamily: "Chewy",
  },
  petBreedValue: {
    fontFamily: "Chewy",
    fontSize: 20,
  },
  date: {
    fontSize: 12,
    color: "#888",
    fontFamily: "Chewy",
    marginBottom: 5,
  },
  petAge: {
    fontSize: 20,
    marginBottom: 5,
    color: "#999999",
    fontFamily: "Chewy",
  },
  petAgeValue: {
    fontFamily: "Chewy",
    fontSize: 20,
  },
});
