import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SightingDetails from "../views/SightingDetails.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/:id",
      name: "sighting-details",
      component: SightingDetails,
    },
  ],
});

export default router;
