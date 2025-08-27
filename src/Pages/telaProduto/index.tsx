import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '../../Utils/Colors';
import { addToCart } from '../../Services/carrinhoService';
import { useState } from 'react';

export default function Produto({ route }: any) {
  const { item } = route.params; // pega o item enviado

  const [ loading, setLoading ] = useState<boolean>(false);

  // Lógica para adicionar o item ao carrinho
  const adicionarAoCarrinho = async (item: any) => {
    setLoading(true);
    try{
        await addToCart(item); // chama a função do serviço para adicionar ao carrinho
        alert(`${item.title} adicionado ao carrinho!`);

    }catch(err){
        console.log("Erro ao adicionar ao carrinho:", err);
    } finally{
        setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{marginHorizontal: '5%'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
        <View style={{width: '100%', height: 2, backgroundColor: Colors.Cinza, marginVertical: 10, alignSelf: 'center', borderRadius: 8}}/>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>

        <TouchableOpacity style={styles.btnAdicionarCarrinho} onPress={() => adicionarAoCarrinho(item)}>
            {loading? <ActivityIndicator size={32} color={Colors.Branco} /> :
            <Text style={styles.btnAdicionarCarrinhoText}>Adicionar ao Carrinho</Text>
            }
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff' 
  },

  image: { 
    width: '100%', 
    height: 400 
  },
  title: { 
    fontSize: 24, fontWeight: 'bold', marginVertical: 10 
  },
  price: { 
    fontSize: 20, color: 'red', marginBottom: 10 
  },
  descriptionTitle:{
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: Colors.CinzaEscuro
  },
  description: { 
    fontSize: 16, 
    color: '#b5b5b5'
  },
  btnAdicionarCarrinho:{
    backgroundColor: Colors.Vermelho,
    marginHorizontal: '5%',
    padding: 10,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    width: '90%'
  },
    btnAdicionarCarrinhoText: {
        color: Colors.Branco,
        textAlign: 'center',
        fontSize: 22,
    }
});
