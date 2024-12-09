<template>
    <div>
        <h5>Exercice List Rendering/Conditional Rendering</h5>
        <h3>Liste des courses :</h3>

        <p v-if="articles.length === 0" class="mt-3 alert alert-warning">
            Liste vide, commencez à saisir vos articles :
        </p>
        <input
            type="text"
            v-model="nouveauArticle"
            placeholder="Saisir votre article"
        />

        <ul class="list-group" v-if="afficherListe">
            <li
                v-for="(article, index) in articles"
                :key="index"
                class="list-group-item"
                @click="supprimerArticle(index)"
            >
                {{ article }}
            </li>
        </ul>

        <button class="btn btn-primary mt-3" @click="ajouterArticle">
            Ajouter un article
        </button>

        <button class="btn btn-primary mt-3" @click="masquerListe">
            {{ afficherListe ? "Masquer la liste" : "Afficher la liste" }}
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Tableau réactif pour stocker les noms des articles
const articles = ref([]);

// Variable réactive pour stocker le nom du nouvel article à ajouter
const nouveauArticle = ref("");
//Variable pour avoir un switch
const afficherListe = ref(true);
/**
 * Ajoute un nouvel article à la liste.
 *
 * @param {string} nouveauArticle - Le nom du film à ajouter.
 */

function ajouterArticle() {
    if (nouveauArticle.value) {
        articles.value.push(nouveauArticle.value);
        nouveauArticle.value = "";
    }
}

/**
 * Supprime un article de la liste à l'index spécifié.
 *
 * @param {number} index - L'index de l'article à supprimer.
 */
function supprimerArticle(index) {
    articles.value.splice(index, 1);
}

/** 
 
*
Masque ou affiche la liste la liste  
*/

function masquerListe() {
    afficherListe.value = !afficherListe.value;
}
</script>
