# Food App

Food App é um aplicativo básico de pedido de comida desenvolvido em React Native, Tailwind CSS, TypeScript, Expo, Zustand, React Native Storage, React Native Aware ScrollView, Nativewind. Ele consome a API do WhatsApp para enviar pedidos para a loja.


## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir.

### Instalação 


1. Clone o repositório:

```bash
git clone https://github.com/Gismii/App-android-IOS-React-Native-e-Expo.git
cd bestFood

## Instale as dependências:

npm install


## Inicie o Expo:

npx expo start

```



Escaneie o código QR usando o aplicativo Expo Go no seu dispositivo móvel ou execute em um emulador.

# Estrutura

## React Native:

 O aplicativo é construído em React Native, garantindo uma experiência de usuário nativa em plataformas iOS e Android.

## Tailwind CSS: 

O Tailwind CSS é utilizado para estilizar o aplicativo, facilitando a personalização e manutenção.

## TypeScript: 

typeScript é integrado para oferecer uma experiência de desenvolvimento mais segura e produtiva.

## Expo: 

Facilita o desenvolvimento e o deployment do aplicativo, permitindo a visualização instantânea em dispositivos físicos ou emuladores.

## Zustand e React Native Storage: 

São usados para gerenciamento de estado e armazenamento local.

React Native Aware ScrollView: Melhora a experiência de rolagem e interação com a interface do usuário.

Nativewind: Facilita a estilização usando classes do Tailwind CSS em React Native.

<table>
  <tr>
    <th>Tela Splash</th>
    <th>Cardápio</th>
    <th>Checkout/Cart</th>
  </tr>
  <tr>
     <td width="300"><a href="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo"><img src="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo/assets/97984496/375d57dc-e52a-49d2-8669-e14dabe7d72a" alt="Captura de tela de 2024-02-27 21-29-05"></a></td>
    <td width="300"><a href="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo"><img src="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo/assets/97984496/091c8f5d-3ed2-47c2-b651-61c1a71cf4b4" alt="Captura de tela de 2024-02-27 21-27-48"></a></td>
    <td width="300"><a href="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo"><img src="https://github.com/Gismii/App-android-IOS-React-Native-e-Expo/assets/97984496/f55758ed-fb13-4294-837e-972ddf80ea6e" alt="Captura de tela de 2024-02-27 21-28-15"></a></td>
  </tr>
</table>

 # Sobre o cardápio e algumas features

Este é um aplicativo React Native que permite aos usuários montar pedidos para delivery a partir de um cardápio dinâmico. Abaixo estão algumas implementações futuras planejadas para o projeto:

## Implementações Futuras

1. **API do Cardápio:**
   - [ ] Implementar uma API que retorna um objeto com informações do cardápio.
   - [ ] Incluir endpoints para obter categorias, itens de menu e detalhes de cada item.

2. **Serviço AWS - Amazon S3:**
   - [ ] Configurar um bucket no Amazon S3 para armazenar imagens do cardápio.
   - [ ] Utilizar URLs do S3 para carregar dinamicamente as imagens na aplicação.

3. **Integração API e Serviço AWS:**
   - [ ] Conectar a aplicação React Native à API do Cardápio para obter informações dinâmicas.
   - [ ] Integrar o S3 para armazenamento eficiente de imagens dos itens.

4. **Páginas do Cardápio:**
   - [x] Criar páginas para exibir categorias, lista de itens e detalhes de cada item.

5. **Montagem de Pedidos:**
   - [x] Implementar funcionalidades para adicionar itens ao carrinho e ajustar quantidades.

6. **Finalização do Pedido:**
   - [x] Adicionar página para revisão e finalização de pedidos.
   - [ ] Integrar serviço de pagamento para processar pedidos online.

7. **Rastreamento de Pedidos:**
   - [ ] Adicionar recursos de rastreamento de pedidos em tempo real.

8. **Feedback do Usuário:**
   - [ ] Implementar funcionalidade de feedback para avaliação da experiência de pedido.


## Contribuição

Sinta-se à vontade para contribuir com novas funcionalidades, correções de bugs ou melhorias neste projeto. Para contribuir, siga as diretrizes de contribuição [aqui](CONTRIBUTING.md).

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).


