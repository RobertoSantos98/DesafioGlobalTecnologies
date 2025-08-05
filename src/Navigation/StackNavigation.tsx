import { createStackNavigator } from "@react-navigation/stack";

import Home from '../Pages/Home';
import Produto from '../Pages/telaProduto';

const Stack = createStackNavigator();

export default function Navigation() {
 return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Produto" component={Produto} />
   </Stack.Navigator>
  );
}