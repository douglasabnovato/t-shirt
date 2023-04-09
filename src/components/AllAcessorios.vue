<template>
  <listOfProducts :products="getAcessorios"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getAcessorios',
    ]),
  },
};
</script>

<style>
</style>

