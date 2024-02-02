<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/a4u.png">
    <!-- Afficher le composant LoginStarWars si l'utilisateur n'est pas authentifié -->
    <LoginStarWars v-if="!isLoggedIn"></LoginStarWars>
    <!-- Afficher le composant SearchFilm si l'utilisateur est authentifié -->
    <SearchFilm v-if="isLoggedIn"></SearchFilm>
  </div>
</template>

<script>

import LoginStarWars from './components/login/LoginStarWars.vue';
import SearchFilm from './components/searchFilm/SearchFilm.vue';

export default {
  name: 'App',
  components: {
    LoginStarWars,
    SearchFilm
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedIn;
    }
  },
  methods: {
    // Méthode appelée lorsque l'état de connexion change dans le composant LoginStarWars
    showNotification(authenticated) {
      console.log('authenticated', authenticated);
      // Mettre à jour la propriété isAuthenticated en fonction de l'état de connexion
      this.isAuthenticated = authenticated;
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
