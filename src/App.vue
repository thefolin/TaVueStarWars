<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/a4u.png">
    <LoginStarWars></LoginStarWars>
  </div>
</template>

<script>

import LoginStarWars from './components/login/LoginStarWars.vue';
export default {
  name: 'App',
  components: {
    LoginStarWars
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
