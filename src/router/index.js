import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./../views/login/index.vue"),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./../views/home/index.vue'),
    }
  ],
});

export default router;
