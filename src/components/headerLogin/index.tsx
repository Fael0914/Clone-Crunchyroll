import { Image, View } from "react-native"
import logo from '../../assets/logo.png'
import { styles } from './style'
export const HeaderLogin = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={logo} alt="Logo da Crunchyroll"/>
            
        </View>
    );
}