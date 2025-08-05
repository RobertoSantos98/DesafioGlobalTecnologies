import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Text, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getPratos } from '../../Services/pratosService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Types/RootStackParam';

type Prato = {
  id: number;
  image: string;
  title: string;
  valor: number;
  descricao: string;
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {

    const navigation = useNavigation<HomeNavigationProp>();
    const [ pratos, setPratos ] = useState<Prato[]>([])
    const [ loading, setLoading ] = useState(true)

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

        <View style={{height: 300}}>
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

        <TextInput placeholder='Pesquisar Comida' style={styles.barraPesquisa}>
            {/* <MaterialCommunityIcons name="magnify" size={24} color={Colors.CinzaEscuro} /> */}
        </TextInput>

        <View style={{marginTop: 30 + 30, marginLeft: '5%'}}>
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

        <View style={{marginTop: 20, marginHorizontal: '5%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}} >Cardápio da semana</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')}>
                    <Text style={{color: Colors.Vermelho}}>Ver todos</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={pratos}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop: 12}}
                renderItem={({item}) => (
                    <TouchableOpacity style={{backgroundColor: Colors.Branco, borderRadius: 10, marginRight: 15, width: 200}} onPress={() => navigation.navigate('Produto', { item })}>
                        <Image source={{uri: item.image}} style={{width: '100%', height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10}} />
                        <View style={{padding: 10, gap: 5}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
                            <Text style={{color: Colors.CinzaEscuro}} numberOfLines={2}>{item.descricao}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.Vermelho}}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>

        <TouchableOpacity style={styles.btnCompras} onPress={() => navigation.navigate('Carrinho')}>
            <MaterialCommunityIcons name="cart-outline" size={50} color={Colors.Branco} />
        </TouchableOpacity>


        
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.Cinza,
    },
    image:{
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    barraPesquisa:{
        backgroundColor: Colors.Branco,
        height: 60,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 30,
        fontSize: 18,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 300 - 15
    },
    btnCompras:{
        height: 80,
        width: 80,
        backgroundColor: Colors.Vermelho,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom : 20,
        right: 20,
    },
    btnMenu:{
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
    btnMenuTitle:{
        color: Colors.CinzaEscuro,
        textAlign: 'center',
        fontSize: 14,
    }
})