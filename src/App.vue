<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click.native="showPopupCart()">
         Carrinho
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';
import maskBg from './components/Mask';

export default {
  components: {
    mainMenu,
    btn,
    popupcart,
    maskBg,
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  :root {
    --menu-bg: rgb(242, 239, 232);
    --menu-name-bg: rgb(30, 30, 30);
    --menu-bg: rgb(219, 116,23);
    --menu-text-link: #fff;

    --logo-bg-or: rgb(226, 111, 44);
    --logo-bg-bl: rgb(2, 129, 206);

    --main-bg: rgb(245, 245, 245);
    --body-bg: #FAFAFA;

    --font-title: rgb(30, 30, 30);
    --font-text: rgb(111, 111, 111);
    --font-price: rgb(143, 166, 200);

    --botton-cuppons: rgb(234, 77, 58);
    --botton-add: rgb(32, 31, 29);
    --botton-cart: rgb(2, 129, 206);

    --link-details:#000;

    --cart-circle: #fff;
    --cart-text: #000;

    --product-item: #fff;
    --product-box: #fff;

    --btn-info:#000;;
    --btn-details:#27AE60;
    --btn-sucess: rgb(2, 129, 206);
    --btn-danger:#e74c3c;
    --btn-text:#fff;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--body-bg);
  }

  a {
    color: var(--link-details);
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: var(--cart-circle);
    color: var(--cart-text);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

</style>
