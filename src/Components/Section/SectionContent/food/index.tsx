import { Text, Image, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../Utils/Colors';
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from "../../../../Types/RootStackParam";
import { StackNavigationProp } from "@react-navigation/stack";

import { Prato } from '../../../../Types/Prato';

type ProdutoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Produto">;


export function CardHorizontalFood({ food }: { food: Prato }) {
    const navigation = useNavigation<ProdutoScreenNavigationProp>();

    return (
        <TouchableOpacity
            style={{
                backgroundColor: Colors.Branco,
                borderRadius: 10,
                marginRight: 15,
                width: 200,
            }}
            onPress={() => navigation.navigate("Produto", { item: food })}
        >
            <Image
                source={{ uri: food.image }}
                style={{
                    width: "100%",
                    height: 120,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />
            <View style={{ marginVertical: 5, gap: 3, marginHorizontal: 10 }}>
                <Text style={{fontSize: 14 }}>{food.title}</Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: Colors.Vermelho,
                        textAlign: "right"
                    }}
                >
                    R$ {food.valor.toFixed(2).replace(".", ",")}
                </Text>
            </View>
        </TouchableOpacity>
    );
};