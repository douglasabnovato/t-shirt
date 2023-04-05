<template>
  <listOfProducts :products="getCamisetas"/>
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
      'getCamisetas',
    ]),
  },
};
</script>

<style>
</style>

