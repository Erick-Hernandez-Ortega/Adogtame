import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const MenuBtn = ({ text, onPress, icon }) => {
  
  const [fontsLoaded] = useFonts({
    Chewy: require("./../../../assets/fonts/Chewy-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity style={style.btnContainer} onPress={onPress}>
      <Icon name={icon} size={28} />
      <Text style={style.labelBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#f4c272",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  labelBtn: {
    fontFamily: "Chewy",
    letterSpacing: 1,
    fontSize: 16,
    marginStart: 10,
  },
});

export default MenuBtn;
