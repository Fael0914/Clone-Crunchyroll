import { Text, View } from "react-native";
import { Button } from "../../components/button";
import { CardLogin } from "../../components/cardLogin";
import { HeaderLogin } from "../../components/headerLogin";
import { styles } from "./style";
export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderLogin />
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Criar Conta</Text>
      </View>
      
      <CardLogin />

      <View style={styles.subTitulo}>
        <Text style={styles.text}>
          Ao criar esta conta, você declara estar de acordo com nossos
          <Text style={{textDecorationLine: 'underline'}}> Termos de Serviço </Text>
          e nossa
          <Text style={{textDecorationLine: 'underline'}}> Política de Privacidade </Text>
          e declara possuir 16 anos de idade ou mais.

        </Text>
      </View>
      
      <View style={styles.logins}>
        <Button titulo="Criar Conta"/>
     
        <Text style={{color: '#fff'}}>
          Já possui uma conta?
          <Text style={{color: 'rgb(243, 117, 33)'}}>  ENTRAR</Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          Termos de Uso
        </Text>
          
        <Text style={styles.textFooter}>
          Política de Privacidade
        </Text>
          
        <Text style={styles.textFooter}>
          Ferramenta de Consentimento de Cookies
        </Text>
      </View>

      

    </View>
  );
};
