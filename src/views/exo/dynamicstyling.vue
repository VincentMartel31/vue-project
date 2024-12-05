<template>
    <div class="card-container">
        <div
            class="card"
            :style="{ backgroundColor: color1 }"
            @click="toggleColor1"
        >
            Carte 1
        </div>
        <div
            class="card"
            :style="{ backgroundColor: color2 }"
            @click="toggleColor2"
        >
            Carte 2
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'; // Importer la fonction ref
const color1 = ref('blue');
const color2 = ref('pink');
const initialColor1 = ref('blue');
const initialColor2 = ref('pink');

function toggleColor1() {
  color1.value = color1.value === 'blue' ? 'red' : initialColor1.value;
}

function toggleColor2() {
  color2.value = color2.value === 'pink' ? 'green' : initialColor2.value;
}
</script>
