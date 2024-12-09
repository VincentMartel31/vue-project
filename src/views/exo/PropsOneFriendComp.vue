<template>
    <div>
        <exoprops
            unAmiName="Dr.Azerty"
            unAmiPhone="098765234"
            unAmiMail="a@a.aa"
        ></exoprops>
        <exoprops
            unAmiName="Cortex22"
            unAmiPhone="30303003"
            unAmiMail="cortex@cortex.cortex"
        ></exoprops>
        <exoprops
            unAmiName="Dr.Qwerty"
            unAmiPhone="098765234"
            unAmiMail="b@b.bb"
        ></exoprops>
        <exoprops
            unAmiName="Dr.aaaaa"
            unAmiPhone="5555555"
            unAmiMail="lol@lol.com"
        ></exoprops>
    </div>
</template>

<script setup lang="js">
import { defineAsyncComponent } from 'vue'
const exoprops = defineAsyncComponent(() => import('./../../views/exo/exoprops.vue'))
</script>
