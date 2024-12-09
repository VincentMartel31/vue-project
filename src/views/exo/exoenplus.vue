<template>
    <div>
        <h2>Formulaire d'inscription</h2>

        <!-- Champ e-mail -->
        <div>
            <label for="email">Adresse e-mail :</label>
            <input
                id="email"
                type="email"
                v-model="email"
                placeholder="Entrez votre adresse e-mail"
                required
            />
        </div>

        <!-- Champ mot de passe -->
        <div>
            <label for="password">Mot de passe :</label>
            <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Entrez votre mot de passe"
                required
            />
        </div>

        <!-- Section mot de passe de confirmation, affichée si le mot de passe est non vide -->
        <div v-if="password">
            <label for="confirmPassword">Confirmer le mot de passe :</label>
            <input
                id="confirmPassword"
                type="password"
                v-model="confirmPassword"
                placeholder="Confirmez votre mot de passe"
                required
            />
        </div>

        <!-- Case à cocher pour le code promo -->
        <div>
            <label for="promoCodeCheck">Avez-vous un code promo ?</label>
            <input id="promoCodeCheck" type="checkbox" v-model="hasPromoCode" />
        </div>

        <!-- Section code promo, affichée si la case est cochée -->
        <div v-if="hasPromoCode">
            <label for="promoCode">Code promo :</label>
            <input
                id="promoCode"
                type="text"
                v-model="promoCode"
                placeholder="Entrez votre code promo"
            />
        </div>

        <!-- Bouton de soumission -->
        <div>
            <button
                :disabled="
                    !email ||
                    !password ||
                    (confirmPassword && confirmPassword !== password)
                "
            >
                Soumettre
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Variables réactives
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const hasPromoCode = ref(false);
const promoCode = ref("");
</script>

<style scoped>
/* Style basique pour rendre le formulaire plus lisible */
div {
    margin-bottom: 1em;
}
label {
    display: block;
    margin-bottom: 0.5em;
}
input {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
}
button {
    padding: 1em;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}
button:disabled {
    background-color: #ccc;
}
</style>
