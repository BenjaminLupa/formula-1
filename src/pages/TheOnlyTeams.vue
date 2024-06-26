<template>
    <TheNavbar :color="bgColor" />
    <div class="moin" :style="{backgroundColor: bgColor}">
        <img :src="teamMate.images" :alt="teamMate.teamName" />
        <h2>{{ teamMate.teamName }}</h2>
        <div class="container px-5">
            <div class="row row-cols-1 row-cols-lg-2">
                <TheDrivers class="col" :driver="teamMate" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router';
import teams from '@/daten/teams';
import TheNavbar from '@/components/TheNavbar.vue';
import TheDrivers from '@/components/TheDrivers.vue';
import {computed} from 'vue';

const route = useRoute();

const teamMate = teams.find((team) => team.teamName === route.params.id);

const bgColor = computed(() => {
    if (teamMate.color.bgColor) {
        return teamMate.color.bgColor;
    } else {
        return 'yellow';
    }
});
</script>

<style scoped>
img {
    width: 140px;
    height: 100px;
}
.moin {
    width: 100%;
    height: 100vh;
}
</style>
