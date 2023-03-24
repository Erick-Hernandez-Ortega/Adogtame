import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "@react-native-material/core";


const BtnBuscar = (navigator) => {
    return (
      <IconButton
        icon={(props) => (
          <Icon
            name="magnify"
            color="black"
            size={25}
            onPress={() => {
              navigator.navigate("Buscar");
            }}
          />
        )}
      />
    );
  };

  export default BtnBuscar;