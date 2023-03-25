import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import BtnCuenta from "../Cuenta/BtnCuenta";

const ActualizarCuenta = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "#f7f7f8" }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Nombre de usuario</Text>
          <TextInput placeholder="Bolita" style={styles.textInput} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Correo</Text>
          <TextInput
            placeholder="jose.castaneda@alumnos.udg.mx"
            style={styles.textInput}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Celular</Text>
          <TextInput placeholder="3313197707" style={styles.textInput} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput placeholder="Jóse Jaime Gpe." style={styles.textInput} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>Apellido</Text>
          <TextInput placeholder="Castañeda Ruiz" style={styles.textInput} />
        </View>

        <View style={{ marginTop: 35 }}>
          <BtnCuenta
            name="Guardar"
            icon="content-save-all"
            bgColor="#007f00"
            color="#fff"
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
    </ScrollView>
  );
};

export default ActualizarCuenta;

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
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Chewy",
  },
});
