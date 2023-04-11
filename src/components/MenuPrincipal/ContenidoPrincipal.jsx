import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import Mascotas from "./Mascotas";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";
import { FAB } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Contenido = React.memo(() => {
  const [ids, setIds] = useState([]);
  navigator = useNavigation();

  async function getIds() {
    try {
      const collectionRef = firebase.db.collection("Mascotas No Adoptadas");
      const query = collectionRef.onSnapshot((e) => {
        setIds([]);
        e.docs.forEach((e) => setIds((prevIds) => [...prevIds, e.id]));
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const unsubscribe = getIds();

    // Limpia los efectos secundarios cuando se desmonta el componente
    return () => {
      unsubscribe();
      setIds([]);
    };
  }, []);

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          paddingBottom: "10%",
          paddingTop: "5%",
        }}
      >
        <Text style={style.text}>¡Echa un vistazo a tus futuras mascotas!</Text>

        {ids.map((e) => (
          <Mascotas
            key={e}
            id={e}
            onPress={() => navigator.navigate("Mascota", { id: e })}
          />
        ))}
        <FAB
          placement="right"
          icon={<Icon name="plus" size={24} />}
          style={style.icon}
          color="#f4c272"
        />
      </ScrollView>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    height: "100%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  text: {
    textAlign: "center",
    padding: 20,
    fontSize: 18,
    fontFamily: "Chewy",
    letterSpacing: 1,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Contenido;
