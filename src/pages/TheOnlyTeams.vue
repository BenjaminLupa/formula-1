<template>
  <TheNavbar />
  <div class="moin">
    <img :src="teamMate.images" :alt="teamMate.teamName" />
    <h2>{{ teamMate.teamName }}</h2>
    <TheDrivers :driver="teamMate" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import teams from "@/daten/teams";
import TheNavbar from "@/components/TheNavbar.vue";
import TheDrivers from "@/components/TheDrivers.vue";

const route = useRoute();

const teamMate = teams.find((team) => team.teamName === route.params.id);
</script>

<style scoped>
img {
  width: 140px;
  height: 100px;
}
</style>
