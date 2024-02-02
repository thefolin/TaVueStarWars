<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginStarWars></LoginStarWars>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginStarWars from '../components/login/LoginStarWars.vue';

export default {
  name: 'HomeView',
  components: {
    LoginStarWars
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedIn;
    }
  }
}
</script>
