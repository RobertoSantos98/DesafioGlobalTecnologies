import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Text, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getPratos } from '../../Services/pratosService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Types/RootStackParam';
import Skeleton from '../../Components/Skeleton';
import SectionContent from '../../Components/Section/SectionContent';
import HomeSection from '../../Components/Section/HomeSection';
import SectionEmAlta from '../../Components/Section/SectionEmAlta';
import { AuthContext } from '../../Contexts/AuthContext';

type Prato = {
    id: number;
    image: string;
    title: string;
    valor: number;
    descricao: string;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const { logout } = useContext(AuthContext);

    const navigation = useNavigation<HomeNavigationProp>();
    const [pratos, setPratos] = useState<Prato[]>([])
    const [loading, setLoading] = useState(true)

    //Simular uma requisição de API, o Objeto é importado de Services/pratoServices
    useEffect(() => {
        async function fetchPratos() {
            try {
                const data = await getPratos();
                setPratos(data);
            } catch (error) {
                console.error("Error fetching pratos:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPratos();
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnCompras} onPress={() => navigation.navigate('Carrinho')}>
                <MaterialCommunityIcons name="cart-outline" size={50} color={Colors.Branco} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>


                <View style={{ height: 300 }}>
                    <Swiper autoplay={true} showsPagination={true} >
                        <Image source={{
                            uri: 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/groups/1716384820664df4342a574.jpeg'
                        }} style={styles.image} />
                        <Image source={{
                            uri: 'https://img.freepik.com/fotos-gratis/refeicao-de-hamburguer-grelhado-com-batatas-fritas-e-ia-generativa-de-queijo_188544-8488.jpg?semt=ais_hybrid&w=740&q=80'
                        }} style={styles.image} />
                        <Image source={{
                            uri: 'https://img.freepik.com/fotos-premium/hamburguer-caseiro-com-batatas-fritas-e-dois-copos-de-cerveja-na-mesa-de-madeira-fastfood-em-fundo-escuro_96727-1451.jpg?semt=ais_hybrid&w=740&q=80'
                        }} style={styles.image} />
                    </Swiper>
                </View>

                <View style={styles.barraPesquisa}>
                    <MaterialCommunityIcons name="magnify" size={30} color={Colors.CinzaEscuro} />
                    <TextInput placeholder='Pesquisar Comida' className='bg-red-500' />
                </View>

                <View style={{ marginTop: 30 + 30, marginLeft: '5%' }}>
                    <Text style={{ marginHorizontal: 5 }}>Menu Rápido</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.btnMenu}>
                            <MaterialCommunityIcons name="food" size={50} color={Colors.Vermelho} />
                            <Text style={styles.btnMenuTitle}>Combos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <MaterialCommunityIcons name="food-hot-dog" size={50} color={Colors.Vermelho} />
                            <Text style={styles.btnMenuTitle}>Lanches</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <MaterialCommunityIcons name="beer" size={50} color={Colors.Vermelho} />
                            <Text style={styles.btnMenuTitle}>Bebidas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <MaterialCommunityIcons name="food-apple" size={50} color={Colors.Vermelho} />
                            <Text style={styles.btnMenuTitle}>Saudável</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnMenu}>
                            <MaterialCommunityIcons name="food-fork-drink" size={50} color={Colors.Vermelho} />
                            <Text style={styles.btnMenuTitle}>Restaurantes</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View>

                    <HomeSection
                        title="Cardápio da Semana"
                        label="Ver todos"
                        action={() => navigation.navigate("Cardapio")}
                        size={18}
                    />

                    {/* Skeleton ou lista real */}
                    {/* Aqui coloquei uma condição para que se o loading for verdadeiro, ele exiba o Skeleton, caso contrário, exibe a lista de pratos. */}
                    {loading ? (
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 12 }}
                        >
                            {[...Array(3)].map((_, index) => (
                                <View key={index} style={{ marginRight: 15 }}>
                                    <Skeleton width={200} height={120} />
                                    <Skeleton width={200} height={20} />
                                    <Skeleton width={150} height={20} />
                                </View>
                            ))}
                        </ScrollView>
                    ) : (
                        <SectionContent />
                    )}
                </View>

                <HomeSection
                    title="Em alta"
                    label="Ver todos"
                    action={() => navigation.navigate("Cardapio")}
                    size={18}
                />

                <SectionEmAlta />

                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: Colors.Laranja, marginTop: 20, paddingVertical: 12}}>

                    <TouchableOpacity style={{backgroundColor: Colors.Vermelho, flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 10, gap: 10, elevation: 1}} onPress={logout}>
                        <MaterialCommunityIcons name="logout" size={24} color={Colors.Branco} />
                        <Text style={{color: Colors.Branco, textAlign: 'center'}}>Sair </Text>
                    </TouchableOpacity>

                    <Text style={{color: Colors.Branco, fontSize: 12}}>Desenvolvido por R.S. </Text>

                </View>


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Cinza,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    barraPesquisa: {
        backgroundColor: Colors.Branco,
        height: 60,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 30,
        fontSize: 18,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 300 - 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnCompras: {
        height: 80,
        width: 80,
        backgroundColor: Colors.Vermelho,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderColor: Colors.Branco,
        borderWidth: 1,
        zIndex: 10,
        bottom: 20,
        right: 20,
        elevation: 8, // aumenta sombra no Android
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    btnMenu: {
        height: 120,
        width: 100,
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: 10,
        gap: 8
    },
    btnMenuTitle: {
        color: Colors.CinzaEscuro,
        textAlign: 'center',
        fontSize: 14,
    }
})