import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const MascotasBuscadas = ({item}) => {
  navigator = useNavigation();
  const { nombre, imagen, edad, genero, tipo } = item;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigator.navigate("MascotaResultado", {...item})}
    >
      <Image source={{ uri: imagen }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{nombre}</Text>
        <Text style={styles.subtitle}>
          Es un {tipo ? "Chucho 🐕" : "Michi 🐈"}
        </Text>
        <Text style={styles.subtitle}>Tiene {edad} años</Text>
        <Text style={styles.subtitle}>
          {genero ? "Es un señor" : "Es una señora"}
        </Text>

        <Text style={styles.description}>Tonalá, Jalisco, México.</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MascotasBuscadas

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "#fff",
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        padding: 10,
        alignItems: "center",
      },
      image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
      },
      cardContent: {
        flex: 1,
        padding: 15,
      },
      title: {
        fontFamily: "Chewy",
        fontSize: 19,
      },
      subtitle: {
        fontFamily: "Chewy",
        fontSize: 14,
        color: "#888",
        marginVertical: 3,
      },
      description: {
        fontFamily: "Chewy",
        marginTop: 3,
        fontSize: 14,
        letterSpacing: 0.4,
      },
})