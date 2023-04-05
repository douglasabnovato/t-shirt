<template>
  <listOfProducts :products="getMoletons"/>
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
      'getMoletons',
    ]),
  },
};
</script>

<style>
</style>

