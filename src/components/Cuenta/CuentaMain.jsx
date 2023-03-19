import { Text, View } from "react-native";
import BarraMenuCuenta from "./BarraMenuCuenta";
import ContenidoCuenta from "./ContenidoCuenta";

const CuentaMain = () => {

    // Falta estilos y un monton de cosas xd
  return (
    <View>
      <BarraMenuCuenta />
      <ContenidoCuenta />
    </View>
  );
};

export default CuentaMain;
