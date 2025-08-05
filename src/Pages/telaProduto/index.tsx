import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../Utils/Colors';

export default function Produto({ route }: any) {
  const { item } = route.params; // pega o item enviado

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{marginHorizontal: '5%'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>

        <TouchableOpacity style={styles.btnAdicionarCarrinho}>
            <Text style={styles.btnAdicionarCarrinhoText}>Adicionar ao Carrinho</Text>
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
  description: { 
    fontSize: 16, color: '#555' 
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
