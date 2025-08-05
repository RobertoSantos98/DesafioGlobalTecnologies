import { ItemCarrinho, Prato } from "../Types/Prato";

let carrinho: ItemCarrinho[] = [];

// Adicionar ao carrinho (incrementando se já existe)
export async function addToCart(item: Prato): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = carrinho.findIndex(c => c.prato.id === item.id);

      if (index !== -1) {
        // Se já existe, aumenta quantidade
        carrinho[index].quantidade += 1;
      } else {
        // Se não existe, adiciona
        carrinho.push({ prato: item, quantidade: 1 });
      }

      resolve();
    }, 300);
  });
}

// Diminuir quantidade ou remover item
export async function decreaseItem(id: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = carrinho.findIndex(c => c.prato.id === id);

      if (index !== -1) {
        if (carrinho[index].quantidade > 1) {
          carrinho[index].quantidade -= 1;
        } else {
          carrinho.splice(index, 1); // remove se chegar a 0
        }
      }

      resolve();
    }, 300);
  });
}

// Remover item do carrinho independente da quantidade
export async function removeFromCart(id: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      carrinho = carrinho.filter((item) => item.prato.id !== id);
      resolve();
    }, 300);
  });
}

// Obter carrinho
export async function getCart(): Promise<ItemCarrinho[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carrinho);
    }, 500);
  });
}

// Limpar carrinho
export async function clearCart(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      carrinho = [];
      resolve();
    }, 300);
  });
}
