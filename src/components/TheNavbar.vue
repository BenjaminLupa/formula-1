<template>
    <nav
        :style="{backgroundColor: bgColor}"
        class="navbar navbar-expand-lg navbar-color position"
    >
        <div class="container-fluid">
            <div class="collapse navbar-collapse">
                <div class="f1-pic">
                    <img
                        class="img-fluid"
                        src="../assets/f1-logo-1.png"
                        alt="F1 Bild"
                    />
                </div>
                <navbar-dropdown :data="fahrer" :navEl="navSort[0]" />
                <navbar-dropdown :data="teamse" :navEl="navSort[1]" />
                <navbar-dropdown :data="teamse" :navEl="navSort[2]" />
                <a href="#">impressum</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import driver from '@/daten/fahrer.js';
import sortNavbar from '@/daten/sortNavbar';
import teams from '@/daten/teams';
import NavbarDropdown from './NavbarSites/NavbarDropdown.vue';
import {defineProps, ref} from 'vue';

const props = defineProps({
    color: String,
});

const bgColor = ref(props.color);
const fahrer = driver;
const navSort = sortNavbar;
const teamse = teams;
</script>

<style scoped>
.f1-pic {
    width: 150px;
}
.navbar-color {
    background-color: rgb(106, 97, 97);
}
.position {
    position: sticky;
    top: 0;
}
</style>
