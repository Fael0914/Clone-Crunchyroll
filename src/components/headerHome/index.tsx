import { Image, View } from "react-native"
import { styles } from "./style"
import Feather from '@expo/vector-icons/Feather';
import logo from '../../assets/logoHome.png'


export const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.icons}>
          <Feather name="cast" size={24} color="white" />
          <Feather name="search" size={24} color="white" />
        </View>
      </View>
    </View>
    )
}