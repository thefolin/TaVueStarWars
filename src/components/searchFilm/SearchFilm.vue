<template>
    <div id="search-film">
        <form @submit.prevent="searchFilm">
            <label for="search">Rechercher :</label>
            <input id="search" type="text" v-model.lazy="searchTerm">
            <button type="submit">Rechercher</button>
        </form>
        <div class="table-films">
            <table>
                <thead>
                    <tr>
                        <th>Affiche</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(film, index) in filteredFilms" :key="index">
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
export default {
    name: 'SearchFilm',
    /**
     * Initialization logic here
     */
    mounted() {
        this.filteredFilms - this.films
    }
    ,

    data() {
        return {
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
            ],
            searchTerm: '',
            filteredFilms: []

        };
    },
    methods: {
        /**
         * Génère les étoiles en fonction du score
         */
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
        },
        /**
         * Cherche un film dans la liste des films
         */
        searchFilm() {
            if (this.searchTerm.trim()) {
                this.filteredFilms = this.films.filter(film => {
                    return film.title.toLowerCase().includes(this.searchTerm.toLowerCase());
                });
            } else {
                this.filteredFilms = this.films;
            }
        }

    }


}
</script>

<style scoped>
/* Your component styles here */
</style>
