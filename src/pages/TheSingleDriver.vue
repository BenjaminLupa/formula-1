<template>
    <div class="container-1">
        <TheNavbar :color="teamMate.color.bgColor" />
        <div
            class="img-fluid img"
            :style="{
                'background-image':
                    'url(' + imageLink + newDriver.surName + ')',
            }"
        >
            <p>{{ newDriver.firstName + ' ' + newDriver.surName }}</p>
            <p>Nummer: {{ newDriver.number }}</p>
        </div>
    </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import teams from '@/daten/teams';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

const route = useRoute();

const teamMate = teams.find(
    (team) =>
        team.driver.driver1.surName === route.params.id ||
        team.driver.driver2.surName === route.params.id,
);

const newDriver = computed(() => {
    if (teamMate.driver.driver1.surName === route.params.id) {
        return teamMate.driver.driver1;
    }
    return teamMate.driver.driver2;
});

const imageLink =
    'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/';
</script>

<style scoped>
.container-1 {
    width: 100%;
    height: 100vh;
}
.img {
    width: 100%;
    height: 90vh;
    background-size: cover;
}
</style>
