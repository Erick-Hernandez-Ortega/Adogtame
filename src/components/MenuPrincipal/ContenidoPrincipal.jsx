import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import Mascotas from "./Mascotas";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import firebase from "../../DataBase/firebase";
import { FAB } from "react-native-elements";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { Picker } from "@react-native-picker/picker";

const Contenido = React.memo(() => {
  const [ids, setIds] = useState([]);
  navigator = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  // Guardar datos del modal
  const [genero, setGenero] = useState(true); // True es Macho
  const [tipo, setTipo] = useState(true); // True es Perro
  const [estado, setEstado] = useState(""); // True es Perro

  //
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
          backgroundColor: modalVisible ? "rgba(0, 0, 0, 0.3)" : "#f7f7f8",
        }}
      >
        <Text style={style.text}>¡Echa un vistazo a tus futuras mascotas!</Text>

        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={style.modalContainerCenter}>
            <View style={style.modalView}>
              <Text
                style={{
                  fontFamily: "Chewy",
                  fontSize: 18,
                  paddingBottom: 15,
                  textAlign: "center",
                }}
              >
                Llena los campos con informacion de tu mascota
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
              >
                <View style={style.inputContainer}>
                  <Text style={style.label}>Nombre</Text>
                  <TextInput placeholder="Nombre" style={style.input} />
                </View>
                <View style={style.inputContainer}>
                  <Text style={style.label}>Edad</Text>
                  <TextInput
                    placeholder="Edad"
                    style={style.input}
                    keyboardType="numeric"
                  />
                </View>
                <View style={style.inputContainer}>
                  <Text style={style.label}>Raza</Text>
                  <TextInput placeholder="Raza" style={style.input} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
              >
                <View style={style.inputContainer}>
                  <Text style={style.label}>Genero de la mascota</Text>
                  <Picker
                    selectedValue={genero}
                    onValueChange={(iValor, iIndex) => setGenero(iValor)}
                  >
                    <Picker.Item label="Macho" value={true} />
                    <Picker.Item label="Hembra" value={false} />
                  </Picker>
                </View>
                <View style={style.inputContainer}>
                  <Text style={style.label}>Tipo de mascota</Text>
                  <Picker
                    selectedValue={tipo}
                    onValueChange={(iValor, iIndex) => setTipo(iValor)}
                  >
                    <Picker.Item label="Perro" value={true} />
                    <Picker.Item label="Gato" value={false} />
                  </Picker>
                </View>
              </View>
              <View style={style.inputContainerUbi}>
                <Text style={style.label}>Ubicacion</Text>
                <Text style={style.secondaryLabel}>Estado</Text>
                <Picker
                  selectedValue={estado}
                  onValueChange={(iValor, iIndex) => setEstado(iValor)}
                >
                  <Picker.Item
                    label="Aguascalientes"
                    value={"Aguascalientes"}
                  />
                  <Picker.Item
                    label="Baja California"
                    value={"Baja California"}
                  />
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
                  <Picker.Item
                    label="San Luis Potosí"
                    value={"San Luis Potosí"}
                  />
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
                <Text style={style.secondaryLabel}>Municipio</Text>
                <TextInput placeholder="Municipio" style={style.input} />
              </View>
              <View style={style.inputContainer}>
                <Text style={style.label}>Descripcion</Text>
                <View style={style.textAreaContainer}>
                  <TextInput
                    style={style.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Agrega una descripcion breve"
                    placeholderTextColor="grey"
                    numberOfLines={5}
                    multiline={true}
                  />
                </View>
              </View>
              <View style={style.inputContainer}>
                <TextInput placeholder="Agrega una imagen" />
              </View>
              <View style={{ marginTop: 0 }}>
                <BtnCuenta
                  name="Publicar"
                  icon="check-circle-outline"
                  bgColor="#006400"
                  color="#fff"
                  onPress={() => {
                    toggleModalVisible();
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
          onPress={toggleModalVisible}
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
  inputContainer: {
    marginVertical: 6,
  },
  inputContainerUbi: {
    marginVertical: 6,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  input: {
    fontSize: 17,
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: "Chewy",
    color: "darkgray",
    letterSpacing: 0.5,
  },
  secondaryLabel: {
    fontSize: 14,
    fontFamily: "Chewy",
    color: "darkgray",
    letterSpacing: 0.5,
  },
  textAreaContainer: {
    borderColor: "gray",
    borderWidth: 1,
  },
  textArea: {
    justifyContent: "flex-start",
  },
});

export default Contenido;
