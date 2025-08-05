export async function getPratos() {
    
  // Simula delay de rede
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: 'https://img.freepik.com/fotos-gratis/refeicao-de-hamburguer-grelhado-com-batatas-fritas-e-ia-generativa-de-queijo_188544-8488.jpg?semt=ais_hybrid&w=740&q=80',
          title: 'Combo X-Tudo',
          valor: 32.90,
          descricao: 'Hambúrguer com carne bovina, queijo, presunto, ovo, alface, tomate e maionese especial'
        },
        {
          id: 2,
          image: 'https://img.freepik.com/fotos-premium/hamburguer-caseiro-com-batatas-fritas-e-dois-copos-de-cerveja-na-mesa-de-madeira-fastfood-em-fundo-escuro_96727-1451.jpg?semt=ais_hybrid&w=740&q=80',
          title: 'Combo X-Tudo com Cerveja',
          valor: 42.50,
          descricao: 'Hambúrguer com carne bovina, queijo, presunto, ovo, alface, tomate e maionese especial'
        }
      ]);
    }, 1500); // 1,5s simulando tempo de resposta
  });
}
