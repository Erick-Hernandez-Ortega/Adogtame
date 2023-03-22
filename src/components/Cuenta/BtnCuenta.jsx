import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BtnCuenta = ({ name, icon, bgColor, color }) => {
  return (
    <TouchableOpacity
      style={[style.btnContainer, { backgroundColor: bgColor }]}
    >
      <Icon name={icon} size={28} style={{ color: color }} />
      <Text style={[style.labelBtn, { color: color }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    justifyContent: "center",
  },
  labelBtn: {
    fontFamily: "Chewy",
    letterSpacing: 1,
    fontSize: 17,
    marginStart: 10,
  },
});

export default BtnCuenta;
