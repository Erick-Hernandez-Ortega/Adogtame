import React from "react";
import { Text, TouchableOpacity } from "react-native";

const MenuBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuBtn;