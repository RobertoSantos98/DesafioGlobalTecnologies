import { createStackNavigator } from "@react-navigation/stack";

import Home from '../Pages/Home';

const Stack = createStackNavigator();

export default function Navigation() {
 return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Home" component={Home} />
   </Stack.Navigator>
  );
}