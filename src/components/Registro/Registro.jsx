import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Registro = () => {
  return (
    <View style={style.container}>
      <Text>Hola desde registro</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});

export default Registro;
