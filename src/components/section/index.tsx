import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";



export const Carousel = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View>
          <Image
            source={item.img }
            style={styles.imagem}
          />
          <Text style={styles.tituloCard}>{item.titulo}</Text>
          </View>
      )}
    />
  );
};