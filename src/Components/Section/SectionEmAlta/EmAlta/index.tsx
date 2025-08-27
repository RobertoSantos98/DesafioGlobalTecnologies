import { Text, Image, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../Utils/Colors';
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from "../../../../Types/RootStackParam";
import { StackNavigationProp } from "@react-navigation/stack";

import { Prato } from '../../../../Types/Prato';

type ProdutoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Produto">;


export function EmAlta({ food }: { food: Prato }) {
    const navigation = useNavigation<ProdutoScreenNavigationProp>();

    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.Branco,
                borderRadius: 10,
                marginRight: 20,
                width: 220,
                borderColor: Colors.Vermelho,
                borderWidth: 1,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Produto", { item: food })}
        >
            <View style={{
                position: "absolute",
                top: 10,
                left: 10,
                backgroundColor: Colors.Vermelho,
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 5,
                zIndex: 10,
            }}>
                <Text style={{ color: Colors.Branco, fontWeight: "bold", fontSize: 12 }}>EM ALTA</Text>
            </View>
            <Image
                source={{ uri: food.image }}
                style={{
                    width: "100%",
                    height: 120,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />
            <View style={{ padding: 10, gap: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{food.title}</Text>
                <Text style={{ color: Colors.CinzaEscuro }} numberOfLines={2}>
                    {food.descricao}
                </Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: Colors.Vermelho,
                    }}
                >
                    R$ {food.valor.toFixed(2).replace(".", ",")}
                </Text>
            </View>
        </TouchableOpacity>
    );
};