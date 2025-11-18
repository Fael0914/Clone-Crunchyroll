import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { tabStyles } from "./tabsStyles";

const Tab = createBottomTabNavigator();

export const TabsRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: tabStyles.bar,
        tabBarActiveTintColor: '#FF7F00',
        tabBarInactiveTintColor: '#FFF',
      })}
    >
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabProfile" component={Home} />
      <Tab.Screen name="TabContacts" component={Home} />
      <Tab.Screen name="TabSettings" component={Home} />
    </Tab.Navigator>
  );
};
