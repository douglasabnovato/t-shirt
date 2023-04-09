<template>
  <listOfProducts :products="getCamisetasEstampas"/>
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
      'getCamisetasEstampas',
    ]),
  },
};
</script>

<style>
</style>
