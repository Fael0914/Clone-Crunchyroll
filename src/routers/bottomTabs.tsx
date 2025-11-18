import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { styles } from "./tabsStyles";
import { Image, Text, View } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import perfil from '../fotosAnime/Goh.png'
import { TabList } from "../@types/navigation";

const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: styles.bar,
      })}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Icons
                name="home-outline"
                size={25}
                color={focused ? "#FF7F00" : "#fff"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#FF7F00" : "#fff" },
                ]}
              >
                Inicio
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabList"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <FontAwesome5 name="bookmark" 
                size={20}
                color={focused ? "#FF7F00" : "#fff"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#FF7F00" : "#fff" },
                ]}
              >
                Minhas Listas
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabExplorer"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
             <Octicons name="apps" 
                size={size}
                color={focused ? "#FF7F00" : "#fff"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#FF7F00" : "#fff" },
                ]}
              >
                Explorar
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
       <Tab.Screen
        name="TabCast"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
             <Icons name="sparkles-outline"
                size={size}
                color={focused ? "#FF7F00" : "#fff"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#FF7F00" : "#fff" },
                ]}
              >
                Simulcasts
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabCount"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Image source={perfil} style={styles.image}/>
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#FF7F00" : "#fff" },
                ]}
              >
                Conta
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};
