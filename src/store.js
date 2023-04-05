import Vue from 'vue';
import Vuex from 'vuex';

import camiseta122 from './assets/camisetas/camisa-1-2-2.jpg';
import camiseta452 from './assets/camisetas/camisa-4-5-2.jpg';
import moletom222 from './assets/moletons/moletons-2-2-2.jpg';
import moletom332 from './assets/moletons/moletons-3-3-2.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    camisetas: [
      {
        name: 'CAMISETA DE BOA NA LAGOA',
        price: 84.99,
        image: camiseta122,
        stars: 5,
        totalReviews: 230,
        details: 'A ESTAMPA: Segundo o último censo deboísta, realizado por nós, a capivara foi eleita como o mamífero roedor mais de boa da lagoa! Com uma plenitude que só ela tem, a capivara é um animal que definitivamente não quer guerra, pelo contrário! Além de ser amigável com todos, ela já atingiu níveis de paz de espírito que nós nem conseguimos imaginar. Por isso, passa seus dias contemplando a natureza, fazendo amizade com todos à sua volta, caminhando na beira dos rios e lagos e exercendo o seu direito de existir em paz! A camiseta minimalista De Boa Na Lagoa deu um toque zeem à nossa seleção de camisetas de animais. Uma boniteza que dá gosto!',
      },
      {
        name: 'CAMISETA BÁSICA VERDE SÁLVIA',
        price: 64.99,
        image: camiseta452,
        stars: 3.4,
        totalReviews: 20,
        details: 'A camiseta verde sálvia é um alívio para qualquer conjunto bagunçado, é um respiro entre o caos daquelas listras tão urbanas, é um cantinho de paz entre todas as informações do guarda-roupa. Sálvia é uma plantinha folhosa sem vergonha que entrosa fácil com qualquer jardim. A sálvia é como uma camiseta básica da roupagem dos canteiros e é como as demais plantas: bonitinha e acessível.',
      },
    ],

    moletons: [
      {
        name: 'MOLETOM CANGURU PRETO NADA BÁSICO',
        price: 219.99,
        image: moletom222,
        stars: 1,
        totalReviews: 1,
        details: 'Básico? Eu? Nunca fui nem serei! Ao contrário do que esse pessoal fala, eu sou uma cor muito imponente. Me dou bem com quase todas as outras, combino com qualquer estação, sou a cor preferida das estampas e por aí vai! Sei que esse não é um papo muito modesto, mas hoje eu me permito ser exibido, até porque eu mereço. E hoje, excepcionalmente, quero reivindicar meu posto de preto nada básico. Eu chamo atenção, marco presença por onde passo e fico ainda mais bonito no inverno. O moletom canguru Preto Nada Básico faz parte da nossa coleção e é ideal para arrasar por aí.',
      },
      {
        name: 'MOLETOM CANGURU UAI',
        price: 219.99,
        image: moletom332,
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      }
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getCamisetas: state => state.camisetas,
    getMoletons: state => state.moletons,
    getAllProducts: state => state.camisetas.concat(state.moletons),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
