import { Prato } from "../Types/Prato";

// Simula um carrinho na memória
let carrinho: Prato[] = [];

// Adiciona item ao carrinho
export async function addToCart(item: Prato): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      carrinho.push(item);
      resolve();
    }, 3000); // simula delay
  });
}

// Obtém itens do carrinho
export async function getCart(): Promise<Prato[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carrinho);
    }, 1500); // simula delay
  });
}

// Remove item do carrinho
export async function removeFromCart(id: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      carrinho = carrinho.filter((item) => item.id !== id);
      resolve();
    }, 300);
  });
}
