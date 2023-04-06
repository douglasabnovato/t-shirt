<template>
  <listOfProducts :products="getCamisetasBasicas"/>
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
      'getCamisetasBasicas',
    ]),
  },
};
</script>

<style>
</style>

