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
                @click="supprimerFilm(index)"
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
const films = ref([]);
const nouveauFilm = ref("");

function ajouterFilm() {
    if (nouveauFilm.value) {
        films.value.push(nouveauFilm.value);
        nouveauFilm.value = "";
    }
}

function supprimerFilm(index) {
    films.value.splice(index, 1);
}
</script>
