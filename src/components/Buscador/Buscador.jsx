import React, { useState } from "react";
import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

const Buscador = (navigator) => {
  const [busqueda, setBusqueda] = useState("");
  const [clic, setClic] = useState(false);

  navigator = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.containerInput}>
        <Icon
          name="arrow-left"
          size={25}
          onPress={() => {
            navigator.navigate("Principal");
          }}
          style={{ marginStart: 10 }}
        />
        <Icon name="magnify" size={25} style={{ marginStart: 15 }} />
        <TextInput
          style={style.input}
          placeholder="Buscar chuchos"
          onChangeText={setBusqueda}
          value={busqueda}
          onFocus={() => {
            setClic(true);
          }}
        />
        {clic && (
          <Icon
            name="close"
            size={25}
            style={style.cancelar}
            onPress={() => {
              setBusqueda("");
              setClic(false);
              Keyboard.dismiss();
            }}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#b8b799",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginStart: 5,
    fontSize: 20,
    padding: 10,
  },
  cancelar: {
    alignItems: "flex-end",
  },
});

export default Buscador;
