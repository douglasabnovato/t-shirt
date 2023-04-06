import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllMoletons from '../components/AllMoletons';
import AllCamisetas from '../components/AllCamisetas';
import AllAcessorios from '../components/AllAcessorios';
import AllCamisetasEstampas from '../components/AllCamisetasEstampas';
import AllCamisetasBasicas from '../components/AllCamisetasBasicas';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/moletons',
      name: 'Moletons',
      component: AllMoletons,
    },
    {
      path: '/camisetas',
      name: 'Camisetas',
      component: AllCamisetas,
    },
    {
      path: '/acessorios',
      name: 'Acessorios',
      component: AllAcessorios,
    },
    {
      path: '/camisetasestampas',
      name: 'Camisetas Estampas',
      component: AllCamisetasEstampas,
    },
    {
      path: '/camisetasbasicas',
      name: 'Camisetas Básicas',
      component: AllCamisetasBasicas,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
  ],
});
