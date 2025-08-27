import { createStackNavigator } from "@react-navigation/stack";
import "../styles/global.css";

import Home from '../Pages/Home';
import Produto from '../Pages/telaProduto';
import Carrinho from "../Pages/Carrinho";
import Cardapio from "../Pages/Cardapio";

const Stack = createStackNavigator();

export default function Navigation() {
 return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Produto" component={Produto} />
     <Stack.Screen name="Carrinho" component={Carrinho} />
     <Stack.Screen name="Cardapio" component={Cardapio} />
   </Stack.Navigator>
  );
}