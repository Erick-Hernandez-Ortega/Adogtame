import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navegador from "./src/components/navigator/Navegador";

export default function App() {
  return (
    <NavigationContainer>
      <Navegador />
    </NavigationContainer>
  );
}
