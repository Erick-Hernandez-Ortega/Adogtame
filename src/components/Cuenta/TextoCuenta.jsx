import { Text, View, StyleSheet, Alert } from "react-native";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";

const TextoCuenta = () => {
  // Guardamos la info del usuario
  const [user, setUsuario] = useState({
    id: "",
    nombres: "",
    apellidos: "",
    edad: "",
    correo: "",
    telefono: "",
  });
  // Jalamos la info con el id
  const getUserByid = (id) => {};
  /*const dbRef = firebase.db.collection("Usuarios").doc(id);
    const data = await dbRef.get();
    const user = data.data();
    setUsuario({
      ...user,
      id: data.id,
    });*/

  useEffect(() => {
    const auth = getAuth();
    const usuario = auth.currentUser;
    if (usuario !== null) {
      const userCollectionRef = firebase.db.collection("Usuarios");
      userCollectionRef
        .where("Correo", "==", usuario.email)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            setUsuario({
              nombres: userData.Nombres,
              apellidos: userData.Apellidos,
              edad: userData.Edad,
              correo: userData.Correo,
              telefono: userData.Telefono,
            });
          } else {
            Alert.alert("El documento no existe");
          }
        })
        .catch((e) => {
          Alert.alert(e);
        });
    } else {
      Alert.alert("Hubo un error al autenticar el usuario");
    }
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Nombres: </Text>
        <Text style={styles.textPrincipal}>{user.nombres}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Apellidos: </Text>
        <Text style={styles.textPrincipal}>{user.apellidos}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Edad: </Text>
        <Text style={styles.textPrincipal}>{user.edad}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Correo: </Text>
        <Text style={styles.textPrincipal}>{user.correo}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtitulo}>Celular: </Text>
        <Text style={styles.textPrincipal}>{user.telefono}</Text>
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
