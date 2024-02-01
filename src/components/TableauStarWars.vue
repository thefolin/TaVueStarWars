<template>
    <div>
        <h2>Liste des Jedi et Sith de Star Wars</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(personnage, index) in personnages" :key="index" @click="showDetails(personnage)">
                    <td>{{ personnage.nom }}</td>
                </tr>
            </tbody>
        </table>
        <ModalStarWars :showModal="showModal" :selectedPerson="selectedPerson" @close="closeModal"></ModalStarWars>
    </div>
</template>
  
<script>
import ModalStarWars from './ModalStarWars.vue';

export default {
    components: {
        ModalStarWars
    },
    data() {
        return {
            personnages: [
                { nom: "Luke Skywalker", cote: "Jedi", force: 8 },
                { nom: "Darth Vader", cote: "Sith", force: 9 },
                { nom: "Obi-Wan Kenobi", cote: "Jedi", force: 7 },
                { nom: "Darth Sidious", cote: "Sith", force: 10 },
                { nom: "Yoda", cote: "Jedi", force: 9 }
            ],
            showModal: false,
            selectedPerson: null
        };
    },
    methods: {
        showDetails(personnage) {
            this.selectedPerson = personnage;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
};
</script>
  