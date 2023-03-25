import { Text, View, StyleSheet, ScrollView } from "react-native";
import Mascota from "./Mascotas";
import { useNavigation } from "@react-navigation/native";

const Contenido = () => {

  const ids = [1, 2, 4, 5, 6];
  navigator = useNavigation();

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          paddingBottom: "10%",
          paddingTop: "5%",
        }}
      >
        <Text style={style.text}>¡Echa un vistazo a tus futuras mascotas!</Text>

        {ids.map((e) => (
          <Mascota
            key={e}
            id={e}
            onPress={() => navigator.navigate("Mascota")}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    height: "100%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  text: {
    textAlign: "center",
    padding: 20,
    fontSize: 18,
    fontFamily: "Chewy",
    letterSpacing: 1,
  },
});

export default Contenido;
