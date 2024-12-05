<template>
    <div class="container">
        <div class="mb-3">
            <button
                v-on:click="leNombre++"
                type="button"
                class="btn btn-success"
            >
                +
            </button>
            <p>{{ leNombre }}</p>
        </div>

        <div class="mb-3">
            <button
                v-on:click="leNombre2++"
                type="button"
                class="btn btn-success"
            >
                -
            </button>
            <p>{{ leNombre2 }}</p>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);
const leNombre2 = ref(0);
// Utilisez `watch` pour surveiller les changements de `leNombre`
watch(leNombre, (newValue) => {
  if (newValue === 7) {
    leNombre.value = 0;
  }
});

watch(leNombre2, (newValue) => {
  if (newValue === 8) {
    leNombre.value = 0;
  }
});
</script>
