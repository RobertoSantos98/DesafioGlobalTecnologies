# Desafio Global Technologies

Este projeto foi desenvolvido como parte de um **desafio técnico** para
a vaga de **Assistente de Desenvolvimento** na empresa **Global
Technologies**.\
O objetivo do desafio era demonstrar habilidades em **React Native**
para construção de interfaces e consumo de dados, utilizando um **mock
de API** para simular requisições.

O BackEnd se encontra em: https://github.com/RobertoSantos98/RestauranteApp/

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)
-   [React Navigation Stack](https://reactnavigation.org/)
-   [React Native Swiper](https://github.com/leecade/react-native-swiper)
-   [TypeScript](https://www.typescriptlang.org/)

------------------------------------------------------------------------

## 🧩 Funcionalidades

-   Simulação de requisições a uma API utilizando **array como mock**.
-   Estrutura de **serviços** para abstrair as requisições mockadas.
-   Interface desenvolvida com **componentes do React Native**.
-   Navegação entre telas com **React Navigation Stack**.
-   Design responsivo utilizando **Safe Area Context**.

------------------------------------------------------------------------

## 📂 Estrutura Principal do Projeto

    DesafioGlobalTecnologies/
    ├── assets/            # Imagens e ícones
    ├── src/
    │   ├── components/    # Componentes reutilizáveis
    │   ├── services/      # Simulação de requisições (mock API)
    │   ├── Pages/         # Telas do aplicativo
    │   └── utils/         # Funções auxiliares
    ├── App.tsx            # Ponto de entrada do app
    ├── package.json
    └── tsconfig.json

------------------------------------------------------------------------

## ⚙️ Como Clonar e Rodar Localmente

### 1. Pré-requisitos

Antes de começar, instale: - [Node.js](https://nodejs.org/) (versão 18+
recomendada) - [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)\
- Um emulador ou aplicativo **Expo Go** no celular (Android/iOS)

 ### O que modificar no seu ambiente

Se seu backend está rodando na porta 8000, mude de localhost:8000 para o seu endereço ipv4.

Se você exportou para uma URL diferente (ex: 192.168.0.5:8000 ou restauranteapp.test/api), atualize a string SERVER conforme necessário src->config->server.

Garanta que o front-end e o backend estejam acessíveis um ao outro (mesma rede ou CORS configurado).
O React Navite pode não conseguir acessar a API caso esteja usando localhost, por isso é necessário atualizar a string de conexão.

### 2. Clonar o repositório

``` bash
git clone https://github.com/RobertoSantos98/DesafioGlobalTecnologies.git
cd DesafioGlobalTecnologies
```

### 3. Instalar dependências

``` bash
npm install
# ou
yarn install
```

### 4. Rodar o projeto

``` bash
npm start
# ou
npx expo start
```

Após rodar, será gerado um QR Code no terminal ou no navegador.\
Escaneie com o app **Expo Go** ou rode no emulador Android/iOS.

------------------------------------------------------------------------

## 📝 Observações

-   Este projeto é **focado no frontend** e não possui backend real.\
-   As requisições são simuladas com dados mockados em arrays.\
-   Pode ser facilmente integrado a uma API real substituindo os
    serviços mockados.

------------------------------------------------------------------------

## 📄 Licença

Este projeto foi criado para fins de desafio técnico. Sinta-se à vontade
para explorar o código.

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por **Roberto Santos**\
[LinkedIn](https://www.linkedin.com/in/robertosantos98) •
[GitHub](https://github.com/RobertoSantos98)
