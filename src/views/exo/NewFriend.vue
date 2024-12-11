<template>
    <div class="container mt-4">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="enteredName"
                    placeholder="Entrez le nom"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Téléphone</label>
                <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="enteredPhone"
                    placeholder="Entrez le numéro de téléphone"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="enteredMail"
                    placeholder="Entrez l'adresse email"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary">
                Ajouter un ami
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const enteredName = ref("");
const enteredPhone = ref("");
const enteredMail = ref("");

const emit = defineEmits(["add-ami"]);

function submitForm() {
    emit("add-ami", {
        name: enteredName.value,
        phone: enteredPhone.value,
        email: enteredMail.value,
        premium: true,
    });

    // Réinitialiser les champs après envoi
    enteredName.value = "";
    enteredPhone.value = "";
    enteredMail.value = "";
}
</script>

<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
}
</style>
