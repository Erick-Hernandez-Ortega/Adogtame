import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BtnCuenta from "../Cuenta/BtnCuenta";

const SubirMascotaMain = () => {
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
  const [usuarioDuenno, setUsuarioDuenno] = useState(null);
  // Modal antes de subir la publicacion
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

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
                  ¿Estas seguro que quieres borrar tu Adogcuenta?
                </Text>
                <View style={{ marginTop: 0 }}>
                  <BtnCuenta
                    name="Confirmar"
                    icon="check-circle-outline"
                    bgColor="#006400"
                    color="#fff"
                    onPress={() => {
                      toggleModalVisible(), borrarCuenta();
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
            Llena los campos con la informacion de tu mascota
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
          <View style={style.inputContainer}>
            <Text style={{ ...style.label, flex: 1 }}>Edad:</Text>
            <View style={style.containerRow}>
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
                  width: 130,
                  height: 60,
                }}
                style={{ width: 130, height: 60 }}
              >
                <Picker.Item label="años" value={true} />
                <Picker.Item label="meses" value={false} />
              </Picker>
            </View>
          </View>
          <View style={style.containerRow2}>
            <View style={style.inputContainer}>
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
            <View style={style.inputContainer}>
              <Text style={{ ...style.label, flex: 1 }}>Tipo:</Text>
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
          <View style={style.containerUbicacion}>
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
              style={{ height: 60, width: 250 }}
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
          </View>

          <View style={style.btnContainer}>
            <BtnCuenta
              name="Publicar"
              icon="publish"
              bgColor="#006400"
              color="#fff"
              onPress={() => {
                subirMascota();
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
};

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
  containerRow2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerUbicacion: {
    marginStart: 15,
  },
  containerRow: {
    flexDirection: "row",
  },
  containerUbicacion: {
    marginStart: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: "Chewy",
    color: "black",
    flex: 1,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  input: {
    fontSize: 17,
    padding: 10,
    fontFamily: "Chewy",
    width: "96%",
    letterSpacing: 0.5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
  inputDescripcion: {
    fontSize: 17,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    borderColor: "black",
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
