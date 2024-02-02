<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/store">Store</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.commit('setLoggedIn', false);
      this.$router.push({ name: 'login' });
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
