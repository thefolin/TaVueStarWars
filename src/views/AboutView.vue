<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginStarWars />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFilm from '../components/searchFilm/SearchFilm.vue';

export default {
  name: 'View',
  components: {
    SearchFilm
  }
}
</script>
