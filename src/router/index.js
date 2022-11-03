import { createRouter, createWebHistory } from "vue-router";
import AdminView from "@/views/AdminView.vue";
import DashboardLightView from "@/views/DashboardLightView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "Admin",
      },
    },
    {
      path: "/admin",
      name: "Admin",
      component: AdminView,
      children: [
        {
          path: "light",
          component: DashboardLightView,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
