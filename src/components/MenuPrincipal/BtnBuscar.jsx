import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "@react-native-material/core";
import { Platform } from "react-native";


const BtnBuscar = (navigator) => {
    return (
      <IconButton
        icon={(props) => (
          <Icon
            name="magnify"
            color="black"
            size={Platform.OS === "web" ? 30 : 25}
            onPress={() => {
              navigator.navigate("Buscar");
            }}
          />
        )}
      />
    );
  };

  export default BtnBuscar;