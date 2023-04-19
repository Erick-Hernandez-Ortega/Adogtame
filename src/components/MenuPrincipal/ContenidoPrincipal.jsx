import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import Mascotas from "./Mascotas";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";
import { FAB } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Contenido = React.memo(({ navigator }) => {
  const [ids, setIds] = useState([]);
  navigator = useNavigation();

  async function getIds() {
    try {
      const collectionRef = firebase.db
        .collection("Mascotas No Adoptadas")
        .limit(4);
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

  function handlePress() {
    navigator.navigate("SubirMascotas");
  }
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
        <FAB
          placement="right"
          icon={<Icon name="plus" size={24} />}
          style={style.icon}
          color="#f4c272"
          onPress={handlePress}
        />
        {ids.map((e) => (
          <Mascotas
            key={e}
            id={e}
            onPress={() => navigator.navigate("Mascota", { id: e })}
          />
        ))}
      </ScrollView>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
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
    position: "absolute",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  input: {
    fontSize: 17,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    fontFamily: "Chewy",
    width: "75%",
    letterSpacing: 0.5,
  },
  inputDescripcion: {
    fontSize: 17,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    fontFamily: "Chewy",
    width: "100%",
    height: 120,
    letterSpacing: 0.5,
  },
  inputEdad: {
    fontSize: 17,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    fontFamily: "Chewy",
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 18,
    fontFamily: "Chewy",
    color: "darkgray",
    flex: 1,
    letterSpacing: 0.5,
  },
});

export default Contenido;
