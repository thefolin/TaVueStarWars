
<template>
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
            <p v-if="loggedIn" class="success-message">Vous êtes connecté avec succès.</p>
        </form>
    </div>
</template>



<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            loginError: false,
            loggedIn: false
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
        }
    }
}
</script>


<style scoped> @import '../../assets/base.css';
</style>