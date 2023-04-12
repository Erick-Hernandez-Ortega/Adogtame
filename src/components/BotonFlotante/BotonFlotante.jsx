import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BotonFlotante = ({onPress, modalVisible}) => {
  return (
    <TouchableOpacity style={{...styles.boton, display: modalVisible ? "none" : null}} onPress={onPress}>
      <View style={styles.icono}>
            <Icon name={'plus'} size={25} style={{color: "#fff"}} />
            <Icon name={'dog-service'} size={25} style={{color: "#fff"}} />
      </View>
    </TouchableOpacity>
  )
}

export default BotonFlotante

const styles = StyleSheet.create({
    boton: {
      position: 'absolute',
      width: 64,
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 150,
      backgroundColor: '#009c7a',
      borderRadius: 40,
    },
    icono: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
        flexDirection: "row",
    },
  });
  