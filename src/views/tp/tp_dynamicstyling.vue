<template>
    <div class="container mt-5">
        <input
            @keyup="handleInputChange"
            :class="{ classes }"
            type="text"
            placeholder="Tapez ici"
        />
        <p>{{ uneString }}</p>

        <input
            v-on:keyup.esc="handleEscKeyPress"
            type="text"
            placeholder="Appuyez sur Échap pour effacer"
        />
        <p>{{ uneAutre }}</p>

        <button
            v-on:click="toggleParagraph"
            type="button"
            class="btn btn-success"
        >
            {{ showParagraph ? "Masquer" : "Afficher" }}
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const classes = computed(() => ({
    maClasseHello: uneString.value === "hello",
    maClasseWorld: uneString.value === "world",
}));
const uneString = ref("");
const uneAutre = ref("");
const showParagraph = ref(true);

function handleInputChange(event) {
    uneString.value = event.target.value;
}

function handleEscKeyPress() {
    uneString.value = "";
}

function toggleParagraph() {
    showParagraph.value = !showParagraph.value;
}
</script>

<style>
.maClasseHello {
    background-color: aqua;
}
.maClasseWorld {
    background-color: coral;
}
</style>
