import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { Check } from "../checkbox";

export const CardLogin = () => {
  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="email-address"
          placeholderTextColor={"#fff"}
          placeholder="E-mail"
          style={styles.input}
        />

        <TextInput
          secureTextEntry={true}
          placeholderTextColor={"#fff"}
          placeholder="Senha"
          style={styles.input}
        />
      </View>

      <Text style={styles.descricao}>
        Minimo de 6 caracteres, sem espaços em branco
      </Text>

      <View style={styles.checkbox}>
        <Check />
        <Text style={styles.textCheck}>
          Eu quero receber informer, ofertas e novidades da Crunchyroll
        </Text>
      </View>
    
    </View>
  );
};
