<template>
    <div>
        <h2>Composant Parent FriendList</h2>

        <!-- Affichage de plusieurs instances du composant OneFriend avec des props différentes -->
        <OneFriend
            email="alice@example.com"
            phone="123-456-7890"
            premium="abcd"
        />
        <OneFriend
            name="Bob"
            email="bob@example.com"
            phone="987-654-3210"
            sexe="Homme"
            premium="abc"
        />
        <OneFriend
            name="Charlie"
            email="charlie@example.com"
            phone="555-123-4567"
            sexe="Homme"
            premium=""
        />
        <OneFriend
            name="Diana"
            email="diana@example.com"
            phone="444-555-6666"
            premium="xyz"
        />
    </div>
</template>

<script setup>
import OneFriend from "./OneFriend.vue"; // Assurez-vous que le chemin est correct
</script>
<style scoped>
.friend-card {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 8px;
}

button {
    margin-top: 10px;
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #0056b3;
}
</style>
