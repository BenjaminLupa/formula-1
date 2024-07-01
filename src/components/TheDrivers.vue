<template>
    <router-link
        :to="`/driver/${fahrer.surName}`"
        v-for="fahrer in theDriver"
        :key="fahrer"
    >
        <div
            class="img"
            :style="{
                'background-image': 'url(' + imageLink + fahrer.surName + ')',
            }"
        >
            <span class="ibm-plex-mono-semibold-italic number-style">{{
                fahrer.number
            }}</span>
            <h2 class="driver-name">
                {{ fahrer.firstName }} {{ fahrer.surName }}
            </h2>
        </div>
    </router-link>
</template>

<script setup>
import {defineProps, ref} from 'vue';
const props = defineProps({
    driver: Object,
});
const theDriver = ref(props.driver.driver);

const imageLink =
    'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/';
</script>

<style scoped>
.img {
    width: 400px;
    height: 400px;
    border-radius: 5%;
    background-size: contain;
    position: relative;
}
.ibm-plex-mono-semibold-italic {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    font-style: italic;
}
.number-style {
    color: crimson;
    font-size: 40px;
    margin-left: 10px;
    text-shadow: 3px 0 0 gold;
}
.driver-name {
    position: absolute;
    bottom: 15px;
    color: gold;
    left: 20%;
    text-shadow: 3px 0 0 crimson;
}
</style>
