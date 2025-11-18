import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";
import { IPropsButton } from "./tipo";

export const Button = ({ titulo }: IPropsButton) => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("StackHome");
  }

  return (
    <View>
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.text}>
          {titulo}
        </Text>
      </TouchableOpacity>        
    </View>
    );
}