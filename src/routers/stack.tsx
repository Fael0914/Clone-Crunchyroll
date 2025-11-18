import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { Login } from "../pages/Login";
import { StackList } from '../@types/navigation';

const Stack = createStackNavigator<StackList>();

export const StackRouters = () => {

  return (
    <Stack.Navigator  >
      <Stack.Screen name="StackLogin" component={Login} /> 
      <Stack.Screen name="StackHome" component={Home} /> 
    </Stack.Navigator>
  )
}