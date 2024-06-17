<template>
  <nav class="navbar navbar-expand-lg navbar-color">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <div class="f1-pic">
          <img class="img-fluid" src="../assets/f1-logo-1.png" alt="F1 Bild" />
        </div>
        <navbar-dropdown :data="fahrer" :navEl="navSort[0]" />
        <navbar-dropdown :data="teamse" :navEl="navSort[1]" />
        <navbar-dropdown :data="teamse" :navEl="navSort[2]" />
        <a href="#">impressum</a>
      </div>
    </div>
  </nav>
</template>

<script>
import bootstrap from "bootstrap";
import driver from "@/daten/fahrer.js";
import sortNavbar from "@/daten/sortNavbar";
import teams from "@/daten/teams";
import NavbarDropdown from "./NavbarSites/NavbarDropdown.vue";
export default {
  components: { NavbarDropdown },
  setup() {
    const dropdownList = () => {
      (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl);
    };

    const fahrer = driver;
    const navSort = sortNavbar;
    const teamse = teams;

    return {
      dropdownList,
      fahrer,
      navSort,
      teamse,
    };
  },
};
</script>

<style scoped>
.f1-pic {
  width: 150px;
}
.navbar-color {
  background-color: rgb(106, 97, 97);
}
</style>
