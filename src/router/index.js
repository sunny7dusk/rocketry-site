import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Teams from "../pages/TeamsPage.vue";
import Projects from "../pages/ProjectsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
