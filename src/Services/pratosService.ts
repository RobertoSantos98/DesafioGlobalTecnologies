import { PRATOS } from "../data/pratos";
import { Prato } from "../Types/Prato";

// Simula uma requisição API
export async function getPratos(): Promise<Prato[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRATOS);
    }, 3000); // 3 segundos para simular delay
  });
}

// Buscar prato por ID (para tela Produto)
export async function getPratoById(id: number): Promise<Prato | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRATOS.find((p) => p.id === id));
    }, 1000);
  });
}
