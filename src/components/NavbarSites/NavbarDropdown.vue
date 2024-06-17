<template>
  <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle bg-color"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        {{ navEl }}
      </a>
      <ul class="dropdown-menu" @click="dropdownList">
        <li v-for="i in data" :key="i">
          <a v-if="navEl === 'Fahrer'" class="dropdown-item" href="#">
            {{ i.lastName }}
          </a>
          <a v-else class="dropdown-item" href="#">
            {{ i.teamName }}
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
// import { computed, ref } from "vue";

export default {
  props: {
    navEl: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
  setup(props) {
    console.log(props.navEl);
    console.log(props.data);
  },
};
</script>

<style scoped>
.bg-color {
  color: white;
}
</style>
