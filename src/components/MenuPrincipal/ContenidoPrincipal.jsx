import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import Mascotas from "./Mascotas";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";
import { FAB } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BtnCuenta from "../Cuenta/BtnCuenta";
import Constants from "expo-constants";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAvoidingView } from "react-native";
import { getAuth } from "firebase/auth";

const Contenido = React.memo(({ navigator }) => {
  const [ids, setIds] = useState([]);
  navigator = useNavigation();
  const [genero, setGenero] = useState(true); // True es Macho
  const [tipo, setTipo] = useState(true); // True es Perro
  const [isAnno, setAnno] = useState(true); // True si la edad de mascota es en años
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [description, setDescription] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [usuarioDuenno, setUsuarioDuenno] = useState(null);

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

  async function getUsuario() {
    const auth = getAuth();
    const usuario = auth.currentUser;
    const userRef = await firebase.db
      .collection("Usuarios")
      .where("Correo", "==", `${usuario.email}`)
      .get();
    setUsuarioDuenno(userRef.docs[0].data());
  }

  useEffect(() => {
    const usu = getUsuario();
    const unsubscribe = getIds();
    // Limpia los efectos secundarios cuando se desmonta el componente
    return () => {
      usu();
      unsubscribe();
      setIds([]);
    };
  }, []);

  async function subirMascota() {
    if (!nombre || !edad || !municipio || !raza || !description) {
      Alert.alert(
        "Advertencia",
        "Por favor, llene todos los campos para continuar."
      );
    } else {
      try {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1;
        const anio = fechaActual.getFullYear();
        const collectionRef = firebase.db.collection("Mascotas No Adoptadas");
        await collectionRef.add({
          descripcion: description,
          edad:
            edad === "1"
              ? isAnno
                ? "1 año"
                : "1 mes"
              : `${edad} ${isAnno ? "años" : "meses"}`,
          edadDuenno: `${usuarioDuenno.Edad}`,
          fechaRegistro: `${dia}-${mes}-${anio}`,
          genero: genero,
          idDuenno: `${usuarioDuenno.Correo}`,
          imagen: tipo
            ? "https://place-puppy.com/300x300"
            : "http://placekitten.com/300/300",
          nombre: nombre,
          nombreDuenno: usuarioDuenno.Nombres,
          raza: raza,
          telefonoDuenno: usuarioDuenno.Telefono,
          tipo: tipo,
          ubicacion: `${municipio}, ${estado}`,
        });
        Alert.alert(
          "Exito!",
          `${nombre} ${
            tipo ? "🐶" : "🐱"
          } a sido subo exitosamente para ser adoptado`
        );
      } catch (error) {
        // Alert.alert("Error", error);
        console.log(error);
      }
    }
  }

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
          onPress={handlePress}
        />
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
