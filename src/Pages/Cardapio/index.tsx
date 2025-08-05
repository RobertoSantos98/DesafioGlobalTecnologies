import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../Utils/Colors';
import { Prato } from '../../Types/Prato';
import { useEffect, useState } from 'react';
import { getPratos } from '../../Services/pratosService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Types/RootStackParam';

type CardapioNavigationProp = StackNavigationProp<RootStackParamList, 'Cardapio'>;

export default function Cardapio() {

    const areaSegura = useSafeAreaInsets();
    const navigation = useNavigation<CardapioNavigationProp>();
    const [loading, setLoading] = useState(true);

    const [pratos, setPratos] = useState<Prato[]>([])

    useEffect(() => {
        async function fetchPratos() {
            // Simular fetch de pratos
            const data: Prato[] = await getPratos();
            setPratos(data);
        }
        fetchPratos();
    }, [])

    return (
        <View style={styles.container}>
            
            <View style={{ backgroundColor: Colors.Vermelho, padding: 10, borderRadius: 10, marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.Branco, marginTop: areaSegura.top + 5, marginVertical: 10 }} >Cardápio Completo</Text>
            </View>
            
            <View style={{ marginHorizontal: '5%' }}>
                <FlatList
                    data={pratos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.navigate('Produto', { item })}>
                            <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 10 }} />
                            <View>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
                                <Text style={{ color: Colors.Vermelho }}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
                            </View>
                            <MaterialCommunityIcons name="chevron-right" size={30} color={Colors.CinzaEscuro} style={{ marginLeft: 'auto' }} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Cinza,
    },
    btnMenu: {
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        gap: 15
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: Colors.CinzaEscuro
    }

});