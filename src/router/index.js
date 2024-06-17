// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import TheHomePage from "@/pages/TheHomePage.vue";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHomePage,
    },
  ],
});

export default router;
