

<template>
    <div class="container" v-if="!isLoggedIn">
        <div id="login-form">
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
                <p v-if="isLoggedIn" class="success-message">Vous êtes connecté avec succès.</p>
            </form>
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
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.getLoggedIn;
        }
    },
    methods: {
        login() {
            if (this.email === 'admin' && this.password === 'admin') {
                this.$store.commit('setLoggedIn', true);
                this.loginError = false;
            } else {
                this.$store.commit('setLoggedIn', false);
                this.loginError = true;
            }
        }
        ,
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