import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Wilderness from "../views/WildernessView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/wilderness/:name",
      name: "wilderness",
      component: Wilderness,
    },
  ],
});

export default router;
