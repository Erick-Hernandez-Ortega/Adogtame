import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BtnCuenta from "../Cuenta/BtnCuenta";
import { TextInput } from "react-native-gesture-handler";

const ContenidoActualizarCuenta = ({ toggleModalVisible, props }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Nombres</Text>
        <TextInput placeholder={props.nombres} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Apellidos</Text>
        <TextInput placeholder={props.apellidos} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Edad</Text>
        <TextInput placeholder={props.edad} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Correo</Text>
        <TextInput placeholder={props.correo} style={styles.textInput} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.text}>Celular</Text>
        <TextInput placeholder={props.telefono} style={styles.textInput} />
      </View>

      <View style={{ marginTop: 35 }}>
        <BtnCuenta
          name="Guardar"
          icon="content-save-all"
          bgColor="#007f00"
          color="#fff"
          onPress={toggleModalVisible}
        />
        <BtnCuenta
          name="Cancelar"
          icon="delete-empty"
          bgColor="#8b0000"
          color="#fff"
          onPress={() => navigator.navigate("Cuenta")}
        />
      </View>
    </View>
  );
};

export default ContenidoActualizarCuenta;

const styles = StyleSheet.create({
  container: {
    height: "98%",
    width: "100%",
    padding: 20,
  },
  text: {
    fontFamily: "Chewy",
    fontSize: 18,
  },
  textInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Chewy",
  },
});
