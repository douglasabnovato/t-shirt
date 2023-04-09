<template>
  <header class="header">
    <slot></slot>
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">Todos Produtos</router-link>
        </li>
        <li class="link">
          <router-link to="/camisetas">Camisetas</router-link>
        </li>
        <li class="link">
          <router-link to="/camisetasestampas">Camisetas Estampas</router-link>
        </li>
        <li class="link">
          <router-link to="/camisetasbasicas">Camisetas Básicas</router-link>
        </li>
        <li class="link">
          <router-link to="/moletons">Moletons</router-link>
        </li>
        <li class="link">
          <router-link to="/acessorios">Acessorios</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: rgb(219, 116,23);
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 90vw;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>
