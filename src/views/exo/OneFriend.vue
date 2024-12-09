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
        type: String,
        default: "0",
        required: false,
        validator: (value) => {
            return value === "abc" || value === "xyz";
        },
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
.friend-card {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    background: linear-gradient(135deg, #ff7a00, #ff6a00, #ff0000);
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.friend-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(0, 0, 0, 0.15);
}

.friend-card:active {
    transform: translateY(-2px) rotateY(0deg) rotateX(0deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}
.friend-card .details {
    transform: translateY(50px);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.friend-card:hover .details {
    transform: translateY(0);
    opacity: 1;
}
button {
    margin-top: 10px;
    padding: 0.5em 1em;
    background-color: #a41ab6;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #5e2379;
}

button:focus {
    outline: none;
}

p {
    margin: 10px 0;
    color: rgb(73, 17, 110);
    font-size: 14px;
}
</style>
