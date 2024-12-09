<template>
    <div>
        <h5>Exercice list rendering</h5>
        <h3>Liste de tâches :</h3>

        <input
            type="text"
            v-model="nouveauFilm"
            placeholder="Entrez le nom du film"
        />

        <ul class="list-group">
            <li
                v-for="(film, index) in films"
                :key="index"
                class="list-group-item"
                v-on:click="supprimerFilm(index)"
            >
                {{ film }}
            </li>
        </ul>

        <p v-if="films.length === 0" class="mt-3 alert alert-warning">
            Aucune tâche disponible.
        </p>

        <button class="btn btn-primary mt-3" @click="ajouterFilm">
            Ajouter une tâche
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Tableau réactif pour stocker les noms des films
const films = ref([]);

// Variable réactive pour stocker le nom du nouveau film à ajouter
const nouveauFilm = ref("");

/**
 * Ajoute un nouveau film à la liste.
 *
 * @param {string} nouveauFilm - Le nom du film à ajouter.
 */
function ajouterFilm() {
    if (nouveauFilm.value) {
        films.value.push(nouveauFilm.value);
        nouveauFilm.value = "";
    }
}

/**
 * Supprime un film de la liste à l'index spécifié.
 *
 * @param {number} index - L'index du film à supprimer.
 */
function supprimerFilm(index) {
    films.value.splice(index, 1);
}
</script>
