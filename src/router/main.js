import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomePage/HomePage.vue") },
  {
    path: "/about",
    component: () => import("../views/AboutPage/AboutPage.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
