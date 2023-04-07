import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import BtnBuscar from "../MenuPrincipal/BtnBuscar";

const MascotaResultadoBarra = React.memo(({ name, tipo }) => {
  navigator = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          size={25}
          onPress={() => {
            navigator.navigate("Buscar");
          }}
          style={{ left: 10 }}
        />
        <Text style={{ fontFamily: "Chewy", fontSize: 22 }}>
          {name} {tipo ? "🐕" : "🐈"}
        </Text>
        <BtnBuscar {...navigator} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f4a020",
    elevation: Platform.OS === "android" ? 4 : 0, // Agrega sombra en Android
    shadowColor: "#000000", // Agrega sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  container: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default MascotaResultadoBarra;
