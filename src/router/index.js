import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import LoginStarWars from '../components/login/LoginStarWars.vue';
import SearchFilm from '../components/searchFilm/SearchFilm.vue';

const routes = [
  { path: '/', name: 'login', component: LoginStarWars },
  { path: '/search', name: 'search', component: SearchFilm }
];

const router = new VueRouter({
  routes
});

export default router;