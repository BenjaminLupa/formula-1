<template>
    <div class="all ms-1 mt-1 rounded-2">
        <div class="container text-center">
            <div class="row text-center row-cols-2">
                <div class="col p-2" v-for="team in teams" :key="team">
                    <router-link :to="`/teams/${team.teamName}`">
                        <img
                            class="rounded-1"
                            :src="team.images"
                            :alt="team.teamName"
                        />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import teams from '@/daten/teams';
</script>

<style scoped>
img {
    width: 140px;
    height: 100px;
}

.all {
    background-color: black;
    width: 320px;
}
</style>
