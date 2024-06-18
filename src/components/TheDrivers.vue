<template>
  <div v-for="fahrer in theDriver" :key="fahrer">
    <div
      class="img"
      :style="{ 'background-image': 'url(' + imageLink + fahrer.surName + ')' }"
    >
      <h2>
        {{ fahrer.firstName }} {{ fahrer.surName }}
        {{ fahrer.number }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  driver: Object,
});
const theDriver = ref(props.driver.driver);

const imageLink =
  "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/";
</script>

<style scoped>
.img {
  width: 400px;
  height: 400px;
  border-radius: 5%;
  background-size: contain;
}
</style>
