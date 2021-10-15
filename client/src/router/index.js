import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      auth: true,
      title: "White~sender"
    },
    component: Home,
  },
  {
    path: "/app",
    name: "MainApp",
    meta: {
      auth: true,
      title: "Home | White~sender"
    },
    component: () =>
      import("../views/MainApp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
