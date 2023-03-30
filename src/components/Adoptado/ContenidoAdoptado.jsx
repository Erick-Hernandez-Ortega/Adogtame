import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContenidoAdoptado = ({name, id, url}) => {
  return (
    <View>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: url }}
          style={{ height: 150, width: 150, borderRadius: 150 / 2 }}
        />
      </View>
      <Text style={styles.date}>Fecha de adopción: 22-12-2012</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre</Text>
        <Text style={styles.textValue}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Edad</Text>
        <Text style={styles.textValue}>{id} años</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Raza</Text>
        <Text style={styles.textValue}>Gris</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Descripción</Text>
      </View>
      <Text style={styles.textDescription}>
        El gato American Shorthair es una raza de gatos domésticos de tamaño
        mediano con un pelaje corto y grueso en una variedad de colores y
        patrones. Son conocidos por su temperamento tranquilo y amigable, y son
        excelentes compañeros de familia.
      </Text>
      <View
        style={{ height: 1, backgroundColor: "#ccc", marginVertical: 20 }}
      />
      <Text style={styles.ownerLabel}>Dueño Anterior</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre del dueño</Text>
        <Text style={styles.textValue}>Bolita</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Teléfono del dueño</Text>
        <Text style={styles.textValue}>3323986735</Text>
      </View>
    </View>
  );
};

export default ContenidoAdoptado;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
    color: "#999",
  },
  textValue: {
    fontFamily: "Chewy",
    fontSize: 18,
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
  date: {
    fontSize: 12,
    color: "#888",
    fontFamily: "Chewy",
    marginBottom: 5
  },
});
