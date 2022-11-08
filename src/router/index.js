import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import SubMenuView from "@/views/SubMenuView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "dashboard",
      },
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/:menu",
      name: "Menu",
      component: MenuView,
      children: [
        {
          path: ":submenu",
          component: SubMenuView,
        },
        {
          path: "create",
          component: () => import("../views/components/inc/FormView.vue"),
        },
      ],
    },
  ],
});

export default router;
