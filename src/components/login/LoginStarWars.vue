

<template>
    <div class="container">


        <div id="login-form" v-if="!loggedIn">
            <form @submit.prevent="login">
                <h1>Authentification</h1>
                <p>Remplissez ce formulaire pour vous connecter.</p>
                <hr />
                <label for="email"><b>Email</b></label>
                <input type="text" v-model="email" placeholder="Entrez votre courriel" id="email" name="email" required />
                <label for="psw"><b>Mot de passe</b></label>
                <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw"
                    required />
                <p><button type="submit">Se connecter</button></p>
                <p v-if="loginError" class="error-message">Identifiants incorrects. Veuillez réessayer.</p>
                <p v-if="loggedIn" class="success-message">Vous êtes connecté avec succès.</p>
            </form>



        </div>

        <div v-if="loggedIn" class="table-films">
            <table>
                <thead>
                    <tr>
                        <th>Affiche</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(film, index) in films" :key="index">
                        <td>
                            <img :src="film.poster" alt="affiche du film">
                        </td>
                        <td>
                            <li>Titre : {{ film.title }}</li>
                            <li>Sortie : {{ film.released }}</li>
                            <li>Réalisateur : {{ film.director }}</li>
                            <li>Acteurs : {{ film.actors }}</li>
                            <li>Plot : {{ film.plot }}</li>
                            <li>Metascore : {{ film.metascore | formatMetascore }}/5</li>
                            <li>
                                <p>Etoiles: <span v-html="generateStars(film.metascore)"></span></p>
                            </li>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>



<script>
import Vue from 'vue';
Vue.filter('formatMetascore', function (value) {
    value = parseFloat(value);
    value = Math.min(Math.max(0, value), 100);
    return Math.round(value / 20);
});
export default {
    data() {
        return {
            email: '',
            password: '',
            loginError: false,
            loggedIn: false,
            films: [
                {
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
                }
            ]
        };
    },
    methods: {
        login() {
            // Login OK :)
            if (this.email === 'admin' && this.password === 'admin') {
                this.loggedIn = true;
                this.loginError = false;
            } else {
                // Login KO :(
                this.loggedIn = false;
                this.loginError = true;
            }
        },

        // display Stars 
        generateStars(score) {
            const numberOfStars = this.$options.filters.formatMetascore(score);
            let stars = '';
            for (let i = 0; i < 5; i++) {
                if (i < numberOfStars) {
                    stars += '&#x2605;'; // étoile pleine
                } else {
                    stars += '&#9734;'; // étoile vide
                }
            }
            return stars;
        }

    }

}


</script>


<style scoped> @import '../../assets/base.css';

 .container {
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items: center;
     align-content: center;
     margin: 0 auto;
     width: 100%;
     max-width: 1200px;
     padding: 0 15px;
 }
</style>