<template>
    <h5>Computed Bug Mode : Composition</h5>
    <div class="d-flex justify-content-center align-items-center my-2">
        <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
        >
            <button
                v-on:click="reduire(10)"
                type="button"
                class="btn btn-danger"
            >
                -
            </button>
            <div></div>
            <h3 class="mx-3">le nombre : {{ leNombre }}</h3>
            <button
                v-on:click="augmenter(10)"
                type="button"
                class="btn btn-success"
            >
                +
            </button>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const leNombre = ref(0);
const nameUser = ref('');

const afficherNameUser = () => {
  console.log('fonction qui gere le NAME exécutée');
    if(nameUser.value ===''){
        return 'test'
    }
    else{
        return 'autre Test';
    }
  };


function reduire(val) {
leNombre.value -= val;
}

function augmenter(val) {
leNombre.value += val;
}
</script>
