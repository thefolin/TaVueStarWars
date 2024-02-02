import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //INIT DATA TO THE STATE
  state: {
    //états de l'application
    films: [],
    loggedIn: false,
  },
  //GET DATA TO THE STATE
  getters: {
    getFilms(state) {
      return state.films;
    },
    getLoggedIn(state) {
      return state.loggedIn;
    }
  },
  //ADD DATA TO THE STATE
  mutations: {
    // modifier l'état de l'application
    setFilms(state, films) {
      state.films = films;
    },
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    }
  },


  // SEND DATA
  actions: {
    // opérations asynchrones 
    fetchFilms({ commit }) {
      // Vous pouvez charger les données depuis une API ou les importer d'un fichier
      const films = [{
        title: 'Titanic',
        released: '19 Dec 1997',
        director: 'James Cameron',
        actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        plot: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
        metascore: '75'
      },
      {
        title: 'Blade Runner',
        released: '25 Jun 1982',
        director: 'Ridley Scott',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        poster: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png',
        plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
        metascore: '89'
      },
      {
        title: 'The Shining',
        released: '13 Jun 1980',
        director: 'Stanley Kubrick',
        actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
        poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        plot: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        metascore: '63'
      }];
      commit('setFilms', films);
    }
  },
  modules: {
  }
})
