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
        this.$store.dispatch('fetchFilms');
    }
    ,

    data() {
        return {
            searchTerm: '',
            filteredFilms: []

        };
    },
    computed: {
        films() {
            // Utilisez un getter pour accéder aux films depuis le store
            return this.$store.getters.getFilms;
        }
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
