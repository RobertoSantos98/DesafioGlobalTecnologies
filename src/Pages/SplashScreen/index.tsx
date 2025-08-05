import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../Utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SplashScreen() {
 return (
   <View style={styles.container}>
        <MaterialCommunityIcons name="food" size={120} color={Colors.Branco} />
        <ActivityIndicator size={60} color={Colors.Branco} style={{position: 'absolute', bottom: 50}} />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Vermelho,
  },
});