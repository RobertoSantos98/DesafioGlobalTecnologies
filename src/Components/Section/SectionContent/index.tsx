import { useState, useEffect } from 'react';
import { FlatList, Pressable } from 'react-native';
import { CardHorizontalFood } from './food';
import { getPratos } from '../../../Services/pratosService';

import { Prato } from '../../../Types/Prato';


export default function SectionContent() {
  const [foods, setFoods] = useState<Prato[]>([]);

  //Simular uma requisição de API, o Objeto é importado de Services/pratoServices
  useEffect(() => {
    async function fetchPratos() {
      try {
        const response = await getPratos();
        setFoods(response);
      } catch (error) {
        console.error("Error fetching pratos:", error);
      } finally {
      }
    }

    fetchPratos();
  }, [])

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal
      contentContainerStyle={{ paddingHorizontal: '5%' }}
    />
  );
}