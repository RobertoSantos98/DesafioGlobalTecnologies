import { View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from '../../Utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
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

        <TextInput placeholder='Pesquisar Comida' style={styles.barraPesquisa}/>

        <View style={{marginTop: 30 + 30}}>
            <ScrollView>
                <TouchableOpacity style={styles.btnMenu}>
                    <MaterialCommunityIcons name="food" size={50} color={Colors.Vermelho} />
                </TouchableOpacity>
            </ScrollView>
        </View>

        <TouchableOpacity style={styles.btnCompras}>
            <MaterialCommunityIcons name="cart-outline" size={50} color={Colors.Branco} />
            <Text style={styles.btnMenuTitle}>Pratos</Text>
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
        // height: 120,
        width: 100,
        backgroundColor: Colors.Branco,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    btnMenuTitle:{
        color: Colors.CinzaEscuro,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
})