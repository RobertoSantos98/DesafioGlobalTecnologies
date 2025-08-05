import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { getCart, removeFromCart } from "../../Services/carrinhoService";
import { Prato } from "../../Types/Prato";
import { Colors } from "../../Utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Carrinho() {
    const areaSegura = useSafeAreaInsets();
        
    const [itens, setItens] = useState<Prato[]>([]);
    const [loading, setLoading] = useState(true);

    // Buscar itens do carrinho
    useEffect(() => {
        async function fetchCart() {
            const data = await getCart();
            setItens(data);
            setLoading(false);
        }
        fetchCart();
    }, []);

    // Remover item
    async function handleRemove(id: number) {
        await removeFromCart(id);
        const updated = await getCart();
        setItens(updated);
    }

    const total = itens.reduce((acc, item) => acc + item.valor, 0);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size={100} color={Colors.Vermelho} />
                <Text style={{ fontSize: 20, color: Colors.CinzaEscuro, marginTop: 20 }}>Carregando carrinho...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View >
                <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 20, marginTop: areaSegura.top + 10 }}>Meu Carrinho</Text>
            </View>
            <FlatList
                data={itens}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={{ flex: 1, marginHorizontal: 10 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>R$ {item.valor.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleRemove(item.id)}>
                            <MaterialCommunityIcons name="delete-outline" size={28} color={Colors.Vermelho} />
                        </TouchableOpacity>
                    </View>
                )}
            />

            {itens.length > 0 && (
                <View style={styles.footer}>
                    <Text style={styles.total}>Total: R$ {total.toFixed(2).replace('.', ',')}</Text>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={{ color: "#fff", fontWeight: "bold" }}>Finalizar Compra</Text>
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
        padding: 20 
    },
    center: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
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
        borderRadius: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    price: {
        color: Colors.Vermelho
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
        marginBottom: 10
    },
    checkoutButton: {
        backgroundColor: Colors.Vermelho,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
    },
    emptyText: { textAlign: "center", marginTop: 20, fontSize: 16, color: Colors.CinzaEscuro },
});
