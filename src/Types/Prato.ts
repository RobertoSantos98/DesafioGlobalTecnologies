export type Prato = {
  id: number;
  image: string;
  title: string;
  valor: number;
  descricao: string;
};

export type ItemCarrinho = {
  prato: Prato;
  quantidade: number;
};
