import { useState, useEffect } from 'react';
import { FlatList, Pressable } from 'react-native';
import { getPratos } from '../../../Services/pratosService';

import { Prato } from '../../../Types/Prato';
import { EmAlta } from './EmAlta';


function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function SectionEmAlta() {
  const [foods, setFoods] = useState<Prato[]>([]);

  //Simular uma requisição de API, o Objeto é importado de Services/pratoServices
useEffect(() => {
    async function fetchPratos() {
      try {
        const response = await getPratos();
        const shuffled = shuffleArray(response); // embaralha antes de setar
        setFoods(shuffled);
      } catch (error) {
        console.error("Error fetching pratos:", error);
      }
    }

    fetchPratos();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <EmAlta food={item} />}
      horizontal
      contentContainerStyle={{ paddingHorizontal: '5%' }}
    />
  );
}