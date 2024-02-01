<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/a4u.png">
    <LoginStarWars v-if="!isAuthenticated" @authenticated="showNotification"></LoginStarWars>
    <SearchFilm v-if="isAuthenticated"></SearchFilm>
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
  data() {
    return {
      isAuthenticated: false,
    };
  },

  methods: {
    showNotification(authenticated) {
      console.log('authenticated', authenticated);
      this.isAuthenticated = authenticated;
      if (authenticated) {
        this.notification = true;
        this.notificationMessage = 'Authentification réussie!';
      } else {
        this.notification = true;
        this.notificationMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
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
