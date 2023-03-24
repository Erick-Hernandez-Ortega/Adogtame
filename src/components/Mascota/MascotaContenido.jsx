import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const MascotaContenido = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: "30%", paddingTop: "5%"}}>
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.petImageContainer}>
          <Image
            source={{ uri: "http://placekitten.com/300/300" }}
            style={styles.petImage}
          />
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.petDate}>Fecha de registro: 22-12-2012</Text>
          <View style={styles.textContainer}>
            <Text style={styles.petName}>Nombre</Text>
            <Text style={styles.petNameValue}>Pepe</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petAge}>Edad</Text>
            <Text style={styles.petAgeValue}>5 años</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petBreed}>Raza</Text>
            <Text style={styles.petBreedValue}>Gato Persa</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.petDescription}>Descripción</Text>
          </View>
          <Text style={styles.petDescriptionValue}>
            El gato American Shorthair es una raza de gatos domésticos de tamaño
            mediano con un pelaje corto y grueso en una variedad de colores y
            patrones. Son conocidos por su temperamento tranquilo y amigable, y
            son excelentes compañeros de familia.
          </Text>
        </View>
        <View
          style={{ height: 1, backgroundColor: "#ccc", marginVertical: 20 }}
        />

        <Text style={styles.ownerLabel}>Dueño actual</Text>
        <View style={styles.textContainer}>
          <Text style={styles.ownerName}>Nombre del dueño</Text>
          <Text style={styles.ownerNameValue}>Bolita</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ownerPhone}>Teléfono del dueño</Text>
          <Text style={styles.ownerPhoneValue}>3323986735</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default MascotaContenido;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f8",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    width: "90%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  petImageContainer: {
    alignItems: "center",
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  petDetails: {
    marginTop: 20,
  },
  petName: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "Chewy",
    color: "#999999",
  },
  petNameValue: {
    fontFamily: "Chewy",
    fontSize: 20,
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
  petDescription: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "Chewy",
    color: "#999999",
  },
  petDescriptionValue: {
    fontSize: 16,
    textAlign: "justify",
    fontFamily: "Chewy",
  },
  petDate: {
    fontSize: 12,
    color: "#888",
    fontFamily: "Chewy",
  },
  ownerLabel: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Chewy",
    marginBottom: 5,
  },
  ownerName: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: "Chewy",
    color: "#999999",
  },
  ownerNameValue: {
    fontSize: 18,

    fontFamily: "Chewy",
  },
  ownerPhone: {
    fontSize: 18,
    fontFamily: "Chewy",
    color: "#999999",
  },
  ownerPhoneValue: {
    fontSize: 18,
    fontFamily: "Chewy",
  },
  textContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
