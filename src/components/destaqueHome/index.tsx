import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, View } from "react-native";
import banner from "../../fotosAnime/image.png";
import { Button } from "../button";
import { styles } from "./style";

export const DestaqueHome = () => {
  return (
    <ScrollView style={styles.scrolView1}>
      <Image source={banner} style={styles.image1} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)", "black"]}
        locations={[0.5, 0.8, 1.0]}
        style={styles.gradient}
      >
        <View style={styles.heroContent}>
          <Text style={styles.textContent} numberOfLines={3}>  
            Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas... Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Killua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? Esta jornada selvagem e épica está prestes a começar!!
          </Text>
          <Button titulo="Continue Assistindo S1 E1" />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
