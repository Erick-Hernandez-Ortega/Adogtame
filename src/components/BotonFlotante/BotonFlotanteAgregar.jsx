import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BotonFlotanteAgregar = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <View style={styles.icono}>
        <Icon name={"plus"} size={25} style={{ color: "black" }} />
      </View>
    </TouchableOpacity>
  );
};

export default BotonFlotanteAgregar;

const styles = StyleSheet.create({
  boton: {
    position: "absolute",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    right: "3%",
    bottom: "15%",
    backgroundColor: "#f4c272",
    borderRadius: 40,
  },
  icono: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
