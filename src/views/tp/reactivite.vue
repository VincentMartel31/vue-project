<template>
    <button
        v-on:click="increment(1)"
        type="button"
        id="icrement"
        class="btn btn-success text-center"
    >
        + 1
    </button>
    <p>le nombre : {{ leNombre }}</p>

    <button
        v-on:click="increment(5)"
        type="button"
        id="icrement"
        class="btn btn-success text-center"
    >
        + 5
    </button>

    <p>{{ msg }}</p>
    <p style="color: blue">I am blue</p>
</template>

<script setup lang="js">
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
let leNombre = ref(0);
let msg =ref("");
let timer ;
let isReset = ref(false);

function increment(val){
  leNombre.value+=val;
  timer = setTimeout(() => {
        if (leNombre.value > 30) {
            leNombre.value = 0;
            isReset.value = true; // Indique que le nombre a été réinitialisé
        }
    }, 3000);
}
// Utilisez `watch` pour surveiller les changements de `leNombre`
watch(leNombre, (newValue) => {
    if (isReset.value) {
        if (newValue === 0) {
            isReset.value = false;
            msg ="start"
        }
    } else {

        if (newValue < 7) {
            msg = "Essaie encore !! ";
        } else if (newValue === 7) {
            msg = "C'est le nombre mystère !! ";
        } else if (newValue <= 30) {
            msg = "Tu as dépassé le nombre mystère!!";
        }
    }
});
</script>
