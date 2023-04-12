import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  Platform,
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
  const [textDescription, setTextDescription] = useState("");

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
    // const unsubscribe = getIds();
    // // Limpia los efectos secundarios cuando se desmonta el componente
    // return () => {
    //   unsubscribe();
    //   setIds([]);
    // };
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
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View style={style.modalContainerCenter}>
              <View style={style.modalView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text
                    style={{
                      fontFamily: "Chewy",
                      fontSize: 18,
                      paddingBottom: 15,
                      textAlign: "center",
                    }}
                  >
                    Llena los campos con información de tu mascota
                  </Text>
                  <View style={style.inputContainer}>
                    <Text style={style.label}>Nombre:</Text>
                    <TextInput
                      placeholder="Nombre"
                      style={style.input}
                      placeholderTextColor={"darkgray"}
                    />
                  </View>
                  <View style={style.inputContainer}>
                    <Text style={style.label}>Raza:</Text>
                    <TextInput
                      placeholder="Raza"
                      placeholderTextColor={"darkgray"}
                      style={style.input}
                    />
                  </View>
                  <View style={style.inputContainer}>
                    <Text style={{ ...style.label, flex: 1 }}>Edad:</Text>
                    <TextInput
                      placeholder="Edad"
                      placeholderTextColor={"darkgray"}
                      style={style.inputEdad}
                      keyboardType="numeric"
                    />
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
                      <Picker.Item label="años" value={true} />
                      <Picker.Item label="meses" value={false} />
                    </Picker>
                  </View>
                  <View style={style.inputContainer}>
                    <Text style={{...style.label, flex: 1}}>Sexo:</Text>
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
                    <Text style={{...style.label, flex: 1}}>Tipo:</Text>
                    <Picker
                      selectedValue={tipo}
                      onValueChange={(iValor, iIndex) => setTipo(iValor)}
                      itemStyle={{
                        fontSize: 17,
                        fontFamily: "Chewy",
                        width: 120,
                        height: 60,
                      }}
                      style={{ width: 120, height: 60 }}
                    >
                      <Picker.Item label="Perro" value={true} />
                      <Picker.Item label="Gato" value={false} />
                    </Picker>
                  </View>
                  <Text
                    style={{
                      fontFamily: "Chewy",
                      fontSize: 17,
                      textAlign: "center",
                    }}
                  >
                    Ubicación
                  </Text>
                  <View style={style.inputContainer}>
                    <Text style={{ ...style.label, flex: 1 }}>Estado:</Text>
                    <Picker
                      selectedValue={estado}
                      onValueChange={(iValor, iIndex) => setEstado(iValor)}
                      itemStyle={{
                        fontSize: 17,
                        fontFamily: "Chewy",
                        width: 250,
                        height: 90,
                      }}
                        style={{ height: 90,  width: 250,}}
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
                      <Picker.Item
                        label="Quintana Roo"
                        value={"Quintana Roo"}
                      />
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
                  </View>
                  <View style={style.inputContainer}>
                    <Text style={style.label}>Municipio:</Text>
                    <TextInput
                      placeholder="Municipio"
                      style={style.input}
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
                    placeholderTextColor={"darkgray"}
                    multiline
                    numberOfLines={4}
                    maxLength={400}
                  />

                  <View style={style.inputContainer}>
                    <Text style={style.label}>Agregar imagenes:</Text>
                  </View>

                  <View style={{ marginTop: 50 }}>
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
            </View>
          </KeyboardAvoidingView>
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
  modalContainerCenter: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: "100%",
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
    height: "85%",
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
