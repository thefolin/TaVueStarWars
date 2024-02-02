import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import SearchFilm from '../components/searchFilm/SearchFilm.vue';
import HomeView from '../views/HomeView.vue';
const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/search', name: 'search', component: SearchFilm }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;