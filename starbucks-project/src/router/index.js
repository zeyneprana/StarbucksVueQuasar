import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    name: "CampaignPage",
    path: "/campaigns",
    component: () => import("../pages/CampaignPage.vue"),
  },
  {
    name: "MenuPage",
    path: "/menu",
    component: () => import("../pages/MenuPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
