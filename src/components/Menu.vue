<template>
  <header class="header">
    <div class="logo-image">
      <img src="../assets/logo/logo-name.jpg" alt="chico rei">
    </div>
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
    <slot></slot>
  </header>
</template>

<script>

export default {
};
</script>

<style scoped>
  .header {
    /*position: fixed;
    z-index: 10;*/
    width: 100%;
    height: 70px;
    background-color: var(--menu-bg);
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 100%;
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
    color: var(--menu-text-link);
    text-decoration: none;
  }

  .logo-image img{
    width: 8vw;
  }
</style>
