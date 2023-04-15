import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Alert,
  Platform,
  Button,
  Image,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { getAuth } from "firebase/auth";
import firebase from "../../DataBase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

const SubirMascotaMain = React.memo(({ navigator }) => {
  navigator = useNavigation();
  // Datos de la publicacion
  const [genero, setGenero] = useState(true); // True es Macho
  const [tipo, setTipo] = useState(true); // True es Perro
  const [isAnno, setAnno] = useState(true); // True si la edad de mascota es en años
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [description, setDescription] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [imagenMascota, setImagenMascota] = useState(""); // link imagen chucho
  const [usuarioDuenno, setUsuarioDuenno] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const storage = getStorage();
  const mountainImagesRef = ref(storage, "images/uu.jpg");
  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Entrara si el usuario eligio una foto
      setImage(result.assets[0].uri);
    }
  };

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

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
    //Limpia los efectos secundarios cuando se desmonta el componente
    return () => {
      usu();
    };
  }, []);

  useEffect(() => {
    const subirImagen = async () => {
      const response = await fetch(image);
      const blob = await response.blob();

      uploadBytes(mountainImagesRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file! ");
      });

      getDownloadURL(mountainImagesRef).then((url) => setImagenMascota(url));
    };

    if (image) {
      subirImagen();
    }
  }, [image]);

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
          imagen: `${imagenMascota}`,
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

  function limpiarInputs() {
    setEstado("");
    setMunicipio("");
    setDescription("");
    setNombre("");
    setEdad("");
    setRaza("");
    setImage("");
    setUsuarioDuenno(null);
    setGenero(true);
    setTipo(true);
    setAnno(true);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            backgroundColor: modalVisible ? "rgba(0, 0, 0, 0.2)" : "#f7f7f8",
          }}
        >
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={style.modalContainerCenter}>
              <View style={style.modalView}>
                <Text
                  style={{
                    fontFamily: "Chewy",
                    fontSize: 18,
                    paddingBottom: 20,
                  }}
                >
                  Antes de poner en adopcion a {nombre}, ten en cuenta lo
                  siguiente...
                </Text>
                <Text
                  style={{
                    paddingBottom: 20,
                    textAlign: "justify",
                    fontWeight: "300",
                    fontSize: 15,
                  }}
                >
                  Cuidar de una mascota es una gran responsabilidad, asi que no
                  es algo que debas tomar a la ligera.
                  {"\n\n"}Asegúrate que el futuro dueño de {nombre}{" "}
                  {tipo ? "🐶" : "🐱"}, este capacitado para cuidar
                  correctamente de el/ella.
                  {"\n\n"}
                  Te damos algunas recomendaciones:{"\n\n"}
                  {"\u2022"}Evalúa su estilo de vida: Considera su tiempo
                  disponible, presupuesto y espacio en casa antes de entregar a
                  tu mascota.{"\n\n"}
                  {"\u2022"}Pregunta sobre informacion acerca de otras mascotas
                  que haya tenido, asi puedes estar seguro/a de que sabe cuidar
                  de los animales.{"\n\n"}
                  {"\u2022"}Usa la información de contacto de la persona
                  interesada para que se puedan comunicar de manera sencilla.
                  {"\n\n"}
                  {"\u2022"}Por último, si deseas eliminar una publicación, ve
                  al apartado "Mis Publicatciones", en el menú lateral y
                  eliminala.{"\n"}
                </Text>
                <Text
                  style={{
                    fontFamily: "Chewy",
                    fontSize: 20,
                    paddingBottom: 20,
                    textAlign: "center",
                  }}
                >
                  ¿Estas seguro/a de poner en adogcion a {nombre}?
                </Text>
                <View style={{ marginTop: 0 }}>
                  <BtnCuenta
                    name="Confirmar"
                    icon="check-circle-outline"
                    bgColor="#006400"
                    color="#fff"
                    onPress={() => {
                      subirMascota();
                      limpiarInputs();
                      toggleModalVisible();
                      navigator.navigate("Principal");
                    }}
                  />
                  <BtnCuenta
                    name="Cancelar"
                    icon="emoticon-poop"
                    bgColor="#8b0000"
                    color="#fff"
                    onPress={() => toggleModalVisible()}
                  />
                </View>
              </View>
            </View>
          </Modal>
          <Text style={style.text}>
            Llena los campos con la información de tu mascota
          </Text>
          <View style={style.inputContainer}>
            <Text style={style.label}>Nombre:</Text>
            <TextInput
              placeholder="Nombre"
              style={style.input}
              value={nombre}
              onChangeText={setNombre}
              placeholderTextColor={"darkgray"}
            />
          </View>
          <View style={style.inputContainer}>
            <Text style={style.label}>Raza:</Text>
            <TextInput
              placeholder="Raza"
              placeholderTextColor={"darkgray"}
              value={raza}
              onChangeText={setRaza}
              style={style.input}
            />
          </View>
          <View style={style.containerRow}>
            <Text style={style.label}>Edad:</Text>

            <TextInput
              placeholder="Edad"
              placeholderTextColor={"darkgray"}
              style={style.inputEdad}
              maxLength={2}
              onChangeText={setEdad}
              value={edad}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={isAnno}
              onValueChange={(iValor, iIndex) => setAnno(iValor)}
              itemStyle={{
                fontSize: 17,
                fontFamily: "Chewy",
                width: 150,
                height: 60,
              }}
              style={{ width: 150, height: 60 }}
            >
              <Picker.Item label="años" value={true} />
              <Picker.Item label="meses" value={false} />
            </Picker>
          </View>
          <View style={style.containerRow}>
            <Text style={{ ...style.label, flex: 1 }}>Sexo:</Text>
            <Picker
              selectedValue={genero}
              onValueChange={(iValor, iIndex) => setGenero(iValor)}
              itemStyle={{
                fontSize: 17,
                fontFamily: "Chewy",
                width: 130,
                height: 60,
              }}
              style={{ width: 130, height: 60 }}
            >
              <Picker.Item label="Macho" value={true} />
              <Picker.Item label="Hembra" value={false} />
            </Picker>
          </View>
          <View style={style.containerRow}>
            <Text style={{ ...style.label, flex: 1 }}>Tipo:</Text>
            <Picker
              selectedValue={tipo}
              onValueChange={(iValor, iIndex) => setTipo(iValor)}
              itemStyle={{
                fontSize: 17,
                fontFamily: "Chewy",
                width: 150,
                height: 60,
              }}
              style={{ width: 150, height: 60 }}
            >
              <Picker.Item label="Perro" value={true} />
              <Picker.Item label="Gato" value={false} />
            </Picker>
          </View>
          <Text
            style={{
              fontFamily: "Chewy",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Ubicación
          </Text>
          <View style={style.containerRow}>
            <Text style={{ ...style.label, flex: 1 }}>Estado:</Text>
            <Picker
              selectedValue={estado}
              onValueChange={(iValor, iIndex) => setEstado(iValor)}
              itemStyle={{
                fontSize: 17,
                fontFamily: "Chewy",
                width: 270,
                height: 90,
              }}
              style={{ height: 90, width: 270 }}
            >
              <Picker.Item label="Aguascalientes" value={"Aguascalientes"} />
              <Picker.Item label="Baja California" value={"Baja California"} />
              <Picker.Item
                label="Baja California Sur"
                value={"Baja California Sur"}
              />
              <Picker.Item label="Campeche" value={"Campeche"} />
              <Picker.Item label="Chiapas" value={"Chiapas"} />
              <Picker.Item label="Chihuahua" value={"Chihuahua"} />
              <Picker.Item
                label="Ciudad de México"
                value={"Ciudad de México"}
              />
              <Picker.Item label="Coahuila" value={"Coahuila"} />
              <Picker.Item label="Colima" value={"Colima"} />
              <Picker.Item label="Durango" value={"Durango"} />
              <Picker.Item label="Guanajuato" value={"Guanajuato"} />
              <Picker.Item label="Guerrero" value={"Guerrero"} />
              <Picker.Item label="Hidalgo" value={"Hidalgo"} />
              <Picker.Item label="Jalisco" value={"Jalisco"} />
              <Picker.Item label="México" value={"México"} />
              <Picker.Item label="Michoacán" value={"Michoacán"} />
              <Picker.Item label="Morelos" value={"Morelos"} />
              <Picker.Item label="Nayarit" value={"Nayarit"} />
              <Picker.Item label="Nuevo León" value={"Nuevo León"} />
              <Picker.Item label="Oaxaca" value={"Oaxaca"} />
              <Picker.Item label="Puebla" value={"Puebla"} />
              <Picker.Item label="Querétaro" value={"Querétaro"} />
              <Picker.Item label="Quintana Roo" value={"Quintana Roo"} />
              <Picker.Item label="San Luis Potosí" value={"San Luis Potosí"} />
              <Picker.Item label="Sinaloa" value={"Sinaloa"} />
              <Picker.Item label="Sonora" value={"Sonora"} />
              <Picker.Item label="Tabasco" value={"Tabasco"} />
              <Picker.Item label="Sonora" value={"Sonora"} />
              <Picker.Item label="Tamaulipas" value={"Tamaulipas"} />
              <Picker.Item label="Tlaxcala" value={"Tlaxcala"} />
              <Picker.Item label="Veracruz" value={"Veracruz"} />
              <Picker.Item label="Yucatán" value={"Yucatán"} />
              <Picker.Item label="Zacatecas" value={"Zacatecas"} />
            </Picker>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.label}>Municipio:</Text>
            <TextInput
              placeholder="Municipio"
              style={style.input}
              onChangeText={setMunicipio}
              value={municipio}
              placeholderTextColor={"darkgray"}
            />
          </View>
          <Text
            style={{
              fontFamily: "Chewy",
              fontSize: 17,
              textAlign: "center",
              marginVertical: 5,
            }}
          >
            Descripción
          </Text>
          <TextInput
            placeholder="Descripcion breve..."
            style={style.inputDescripcion}
            onChangeText={setDescription}
            placeholderTextColor={"darkgray"}
            multiline
            value={description}
            numberOfLines={4}
            maxLength={400}
          />

          <View style={style.inputContainer}>
            <Text style={style.label}>Agregar imagenes:</Text>
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 50, height: 50 }}
              />
            )}
          </View>

          <View style={style.btnContainer}>
            <BtnCuenta
              name="Publicar"
              icon="publish"
              bgColor="#006400"
              color="#fff"
              onPress={() => {
                toggleModalVisible();
              }}
            />
            <BtnCuenta
              name="Cancelar"
              icon="publish-off"
              bgColor="#8b0000"
              color="#fff"
              onPress={() => toggleModalVisible()}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
});

const style = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 20,
    fontSize: 18,
    fontFamily: "Chewy",
    letterSpacing: 1,
  },
  inputContainer: {
    marginVertical: 10,
    marginStart: 15,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 15,
    width: "96%",
  },
  containerUbicacion: {
    marginStart: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: "Chewy",
    color: "black",
    letterSpacing: 0.5,
    marginBottom: 5,
    flex: 1,
  },
  input: {
    fontSize: 17,
    padding: 10,
    fontFamily: "Chewy",
    width: "96%",
    letterSpacing: 0.5,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
  inputDescripcion: {
    fontSize: 17,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    fontFamily: "Chewy",
    width: "92%",
    height: 120,
    marginStart: 15,
    letterSpacing: 0.5,
  },
  inputEdad: {
    textAlign: "center",
    fontSize: 17,
    padding: 10,
    width: "20%",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    fontFamily: "Chewy",
    letterSpacing: 0.5,
  },
  modalContainerCenter: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 22,
    width: "92%",
  },
  btnContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default SubirMascotaMain;
