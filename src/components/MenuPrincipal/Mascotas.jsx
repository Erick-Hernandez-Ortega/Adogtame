import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import DogLoading from "../DogLoading/DogLoading";
import firebase from "../../DataBase/firebase";

const Mascotas = (props) => {
  const [mascotaData, setMascotaData] = useState(null);

  const [fontsLoaded] = useFonts({
    Chewy: require("./../../../assets/fonts/Chewy-Regular.ttf"),
  });

  async function resquest() {
    try {
      const mascota = await firebase.db
        .collection("Mascotas No Adoptadas")
        .get();
      setMascotaData(mascota.docs[props.id].data());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    resquest();
  }, []);

  if (!mascotaData) return <DogLoading />;

  if (!fontsLoaded) return null;

  const { nombre, imagen, edad, genero, tipo } = mascotaData;

  return (
    <TouchableOpacity
      style={styles.card}
      key={props.id}
      onPress={props.onPress}
    >
      <Image source={{ uri: imagen }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{nombre}</Text>

        <Text style={styles.subtitle}>
          Es un {tipo ? "Chucho 🐕" : "Michi 🐈"}
        </Text>
        <Text style={styles.subtitle}>Tiene {edad} años</Text>
        <Text style={styles.subtitle}>
          {genero ? "Es un Machito Opresor " : "Es una señora"}
        </Text>

        <Text style={styles.description}>Tonalá, Jalisco, México.</Text>
      </View>
    </TouchableOpacity>
  );
};

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
    marginVertical: 3,
  },
  description: {
    fontFamily: "Chewy",
    marginTop: 3,
    fontSize: 14,
    letterSpacing: 0.4,
  },
});

export default Mascotas;
