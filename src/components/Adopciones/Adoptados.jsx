import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import DogLoading from "../DogLoading/DogLoading";
import { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";

const Adoptados = React.memo(({ id, onPress }) => {
  const [mascotaData, setMascotaData] = useState(null);

  useEffect(() => {
    resquest();
  }, []);

  async function resquest() {
    try {
      const mascota = await firebase.db
        .collection("Mascotas Adoptadas")
        .doc(`${id}`)
        .get();
      setMascotaData(mascota.data());
    } catch (e) {
      console.log(e);
    }
  }

  if (!mascotaData) return <DogLoading />;

  const { nombre, imagen, edad, genero, tipo } = mascotaData;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imagen }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.subtitle}>
          Es un {tipo ? "Chucho 🐕" : "Michi 🐈"}
        </Text>
        <Text style={styles.subtitle}>Tiene {edad} años</Text>
        <Text style={styles.subtitle}>
          {genero ? "Es un señor" : "Es una señora"}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default Adoptados;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontFamily: "Chewy",
    fontSize: 19,
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Chewy",
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
