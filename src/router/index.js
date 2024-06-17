// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import TheHomePage from "@/pages/TheHomePage.vue";
import TheTeam from "@/pages/TheOnlyTeams.vue";

const router = createRouter({
  //Optionen
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHomePage,
    },
    {
      path: "/teams/:id",
      component: TheTeam,
    },
  ],
});

export default router;
