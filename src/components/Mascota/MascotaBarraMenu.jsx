import React from "react";
import { View, StyleSheet, SafeAreaView, Platform, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import BtnBuscar from "../MenuPrincipal/BtnBuscar";

const MascotaBarraMenu = React.memo(({ name, tipo, modalVisible, modalVisible2, navigator }) => {
  navigator = useNavigation();

  return (
    <SafeAreaView
      style={{
        ...styles.header,
        backgroundColor: (modalVisible || modalVisible2)
          ? "rgba(244, 160, 32, 0.5)"
          : "rgba(244, 160, 32, 1)",
      }}
    >
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          size={25}
          onPress={() => {
            navigator.navigate("Principal");
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

export default MascotaBarraMenu;
