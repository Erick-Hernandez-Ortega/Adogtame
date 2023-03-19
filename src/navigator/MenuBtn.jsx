import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const MenuBtn = ({ text, onPress, icon }) => {
  return (
    <TouchableOpacity style={style.btnContainer} onPress={onPress}>
      <Icon name={icon} size={28}/>
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
  labelBtn:{
    fontSize: 16,
    marginStart: 10,
  }
});

export default MenuBtn;
