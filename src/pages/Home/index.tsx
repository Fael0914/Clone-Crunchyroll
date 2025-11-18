import { ScrollView, Text, View } from "react-native";
import { DestaqueHome } from "../../components/destaqueHome";
import { Carousel } from "../../components/section";
import { HeaderHome } from "./../../components/headerHome";
import { styles } from "./style";
import { emAltaData, RecomendacaoData } from "../../mock";

export const Home = () => {
  return (
    <>
      <HeaderHome />

      <ScrollView style={styles.container}>
        <View>
          <DestaqueHome />
        </View>

        <View style={styles.carouselContainer}>
          <Text style={styles.tituloContainer}>Recomendações para Você</Text>
          <Carousel data={RecomendacaoData()} />
        </View>
        
        <View style={styles.carouselContainer}>
          <Text style={styles.tituloContainer}>Em Alta</Text>
          <Carousel data={emAltaData()} />
        </View>
      </ScrollView>
    </>
  );
};
