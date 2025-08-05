import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  getCart,
  removeFromCart,
  addToCart,
  decreaseItem,
} from "../../Services/carrinhoService";
import { ItemCarrinho } from "../../Types/Prato";
import { Colors } from "../../Utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Carrinho() {
  const areaSegura = useSafeAreaInsets();

  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [loading, setLoading] = useState(true);

  // Buscar itens do carrinho
  async function fetchCart() {
    const data = await getCart();
    setItens(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  // Remover item por completo
  async function handleRemove(id: number) {
    await removeFromCart(id);
    fetchCart();
  }

  // Aumentar quantidade
  async function handleIncrease(itemId: number) {
    const item = itens.find((i) => i.prato.id === itemId);
    if (item) {
      await addToCart(item.prato); // mesma função do Produto
      fetchCart();
    }
  }

  // Diminuir quantidade
  async function handleDecrease(itemId: number) {
    await decreaseItem(itemId);
    fetchCart();
  }

  // Calcular total
  const total = itens.reduce(
    (acc, item) => acc + item.prato.valor * item.quantidade,
    0
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={100} color={Colors.Vermelho} />
        <Text
          style={{
            fontSize: 20,
            color: Colors.CinzaEscuro,
            marginTop: 20,
          }}
        >
          Carregando carrinho...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 20,
          marginTop: areaSegura.top + 10,
        }}
      >
        Meu Carrinho
      </Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.prato.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.prato.image }} style={styles.image} />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <Text style={styles.title}>{item.prato.title}</Text>
              <Text style={styles.price}>
                R$ {item.prato.valor.toFixed(2).replace(".", ",")}
              </Text>

              {/* Controles de quantidade */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => handleDecrease(item.prato.id)}
                >
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyNumber}>{item.quantidade}</Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => handleIncrease(item.prato.id)}
                >
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => handleRemove(item.prato.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                size={28}
                color={Colors.Vermelho}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      {itens.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Finalizar Compra
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Cinza,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Branco,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    color: Colors.Vermelho,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 10,
  },
  qtyButton: {
    backgroundColor: Colors.Vermelho,
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    color: Colors.Branco,
    fontSize: 18,
    fontWeight: "bold",
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 10,
    alignItems: "center",
    marginTop: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: Colors.Vermelho,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: Colors.CinzaEscuro,
  },
});
