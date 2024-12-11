<template>
    <div class="friend-card">
        <!-- Bouton pour afficher/masquer les détails -->
        <button @click="toggleDetails">
            {{ showDetails ? "Masquer les détails" : "Afficher les détails" }}
        </button>

        <!-- Affichage des détails si showDetails est vrai -->
        <div v-if="showDetails">
            <p>Name : {{ name }}</p>
            <p>Email: {{ email }}</p>
            <p>Téléphone: {{ phone }}</p>
            <p v-if="premium === 'abc'">Ami Premium</p>
            <p v-if="premium === 'xyz'">Ami Nul</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Propriétés (props) passées au composant
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },

    premium: {
        type: Boolean,
        default: false,
        required: false,
        /*
        validator: function (value) {
            return value === "abc" || value === "xyz";
        },
        */
    },
});

const emit = defineEmits();

// Fonction pour afficher/masquer les détails
const showDetails = ref(false);
function toggleDetails() {
    showDetails.value = !showDetails.value;
}

// Fonction pour changer la valeur de "premium" et émettre l'événement vers le parent
</script>

<style scoped>
/* Carte d'ami */
.friend-card {
    border: 1px solid #ddd; /* Gris clair pour la bordure */
    padding: 16px;
    margin: 1em 0;
    border-radius: 12px;
    background-color: white;
    background: linear-gradient(
        135deg,
        #f2f2f2,
        #e0e0e0
    ); /* Dégradé doux de gris */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

/* Effet de survol sur la carte */
.friend-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Effet au clic (actif) */
.friend-card:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* Détails cachés avec effet au survol */
.friend-card .details {
    transform: translateY(50px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.friend-card:hover .details {
    transform: translateY(0);
    opacity: 1;
}

/* Boutons */
button {
    margin-top: 10px;
    padding: 0.5em 1em;
    background-color: #5c6bc0; /* Couleur bleu-gris douce */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Effet de survol sur le bouton */
button:hover {
    background-color: #3f51b5; /* Bleu plus foncé au survol */
    transform: scale(1.05);
}

/* Focus pour le bouton (pour améliorer l'accessibilité) */
button:focus {
    outline: none;
    box-shadow: 0 0 5px #5c6bc0; /* Ombre autour du bouton au focus */
}

/* Style des paragraphes dans les cartes */
p {
    margin: 10px 0;
    color: #4a4a4a; /* Gris foncé pour le texte */
    font-size: 14px;
    line-height: 1.5;
}

/* Titre de la carte */
.friend-card h3 {
    color: #333333; /* Gris très foncé pour les titres */
    font-size: 18px;
    font-weight: bold;
}

/* Affichage des détails dans la carte */
.friend-card .details p {
    color: #4a4a4a; /* Gris foncé pour le texte des détails */
}
</style>
