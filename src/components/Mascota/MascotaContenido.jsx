import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../../DataBase/firebase";
import { useEffect } from "react";
import DogLoading from "../DogLoading/DogLoading";

const MascotaContenido = React.memo(({
  name,
  url,
  descripcion,
  edad,
  genero,
  raza,
  tipo,
  idDuenno,
}) => {
  const [duenno, setDuenno] = useState(null);

  async function requestOwner() {
    try {
      const query = await firebase.db
        .collection("Usuarios")
        .where("Correo", "==", "" + idDuenno)
        .get();

      setDuenno(query.docs[0].data());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    requestOwner();
  });

  if (!duenno) return <DogLoading />;

  const { NombreCompleto, Edad, Telefono, Correo } = duenno;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#f7f7f8" }}
    >
      <View style={styles.card}>
        <View style={styles.petImageContainer}>
          <Image source={{ uri: url }} style={styles.petImage} />
        </View>
        <View style={styles.petDetails}>
          <Text style={styles.petDate}>Fecha de registro: 22-12-2012</Text>
          <View style={styles.textContainer}>
            <Text style={styles.petName}>Nombre</Text>
            <Text style={styles.petNameValue}>{name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petAge}>Edad</Text>
            <Text style={styles.petAgeValue}>{edad} años</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petAge}>¿Es chucho o michi?</Text>
            <Text style={styles.petAgeValue}>
              Es un {tipo ? "Chucho 🐕" : "Michi 🐈"}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petBreed}>Raza</Text>
            <Text style={styles.petBreedValue}>{raza}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petBreed}>Genero</Text>
            <Text style={styles.petBreedValue}>
              {genero ? "Es un Machito Opresor " : "Es una señora"}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.petBreed}>¿Onta Ubicado?</Text>
            <Text style={styles.petBreedValue}>Tonalá, Jalisco, México.</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.petDescription}>Descripción</Text>
          </View>
          <Text style={styles.petDescriptionValue}>{descripcion}</Text>
        </View>
        <View
          style={{ height: 1, backgroundColor: "#ccc", marginVertical: 20 }}
        />

        <Text style={styles.ownerLabel}>Dueño actual</Text>
        <View style={styles.textContainer}>
          <Text style={styles.ownerName}>Nombre</Text>
          <Text style={styles.ownerNameValue}>{NombreCompleto}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ownerPhone}>Teléfono</Text>
          <Text style={styles.ownerPhoneValue}>{Telefono}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ownerPhone}>Edad</Text>
          <Text style={styles.ownerPhoneValue}>{Edad} años</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.ownerPhone}>Correo</Text>
          <Text style={styles.ownerPhoneValue}>{Correo}</Text>
        </View>
      </View>
    </ScrollView>
  );
});

export default MascotaContenido;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingBottom: "35%",
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
