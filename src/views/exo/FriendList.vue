<template>
    <NewFriend @add-ami="ajouterAmi" />
    <ul class="list-group mt-4"></ul>

    <EmitOneFriendIdComp
        v-for="unAmi in lesAmis"
        :key="unAmi.id"
        :id="unAmi.id"
        :unAmiName="unAmi.name"
        :unAmiPhone="unAmi.phone"
        :unAmiMail="unAmi.email"
        :premium="unAmi.premium"
        @mon-event-premium="reactionStatus"
    ></EmitOneFriendIdComp>
</template>

<script setup lang="js">
    import { ref } from 'vue';
    import NewFriend  from './../exo/NewFriend.vue';
    import EmitOneFriendIdComp from './../exo/EmitOneFirendIdComp.vue';


    const lesAmis = ref([
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium: true
        },
        {
            id: 'lasticot2',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium: true
        },
        {
            id: 'kimonoSurUnFrigo',
            name: "Steven Seagal",
            phone: '+338765477',
            email: 'steven@seagal.com',
            premium: true
        },
        {
            id: 'yoyoyo',
            name: "JAROD",
            phone: '+338765477',
            email: 'jAROD@seagal.com',
            premium: true
        }
    ]);
    function reactionStatus(leIdDansUnAmi) {

    const found = lesAmis.value.find((element) => {

        return element.id === leIdDansUnAmi;
    });
    console.log(found);


}
function ajouterAmi(ami) {
  const newAmiContact = {
    id: new Date().toISOString(), // Générer un faux id
    name: ami.name,
    phone: ami.phone,
    email: ami.email,
    premium: false,
  };
  console.log(newAmiContact)
  lesAmis.value.push(newAmiContact);}
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
