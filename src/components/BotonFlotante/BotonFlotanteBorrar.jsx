import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BotonFlotanteBorrar = ({ onPress, modalVisible }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.boton, display: modalVisible ? "none" : null }}
      onPress={onPress}
    >
      <View style={styles.icono}>
        <Icon name={"delete-off-outline"} size={25} style={{ color: "#fff" }} />
      </View>
    </TouchableOpacity>
  );
};

export default BotonFlotanteBorrar;

const styles = StyleSheet.create({
  boton: {
    position: "absolute",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: Platform.OS === "web" ? 5 : 150,
    backgroundColor: "#8b0000",
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
