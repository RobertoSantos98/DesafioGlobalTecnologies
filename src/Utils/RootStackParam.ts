type Prato = {
    id: number;
    image: string;
    title: string;
    valor: number;
    descricao: string;
}

export type RootStackParamList = {
  Home: undefined;
  Produto: { item: Prato };
};
