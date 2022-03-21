import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Teams from "../pages/TeamsPage.vue";
import Leadership from "../pages/Teams/LeadershipPage.vue";
import Aerostructures from "../pages/Teams/AerostructuresPage.vue";
import Avionics from "../pages/Teams/AvionicsPage.vue";
import Businessandpr from "../pages/Teams/BusinessandprPage.vue";
import Designvalidation from "../pages/Teams/DesignvalidationPage.vue";
import Payload from "../pages/Teams/PayloadPage.vue";
import Propulsion from "../pages/Teams/PropulsionPage.vue";
import Recovery from "../pages/Teams/RecoveryPage.vue";
import Software from "../pages/Teams/SoftwarePage.vue";
import Projects from "../pages/ProjectsPage.vue";
import Sponsors from "../pages/SponsorsPage.vue";

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
    path: "/leadership",
    name: "Leadership",
    component: Leadership,
  },
  {
    path: "/aerostructures",
    name: "Aerostructures",
    component: Aerostructures,
  },
  {
    path: "/avionics",
    name: "Avionics",
    component: Avionics,
  },
  {
    path: "/businessandpr",
    name: "Business & PR",
    component: Businessandpr,
  },
  {
    path: "/designvalidation",
    name: "Design Validation",
    component: Designvalidation,
  },
  {
    path: "/payload",
    name: "Payload",
    component: Payload,
  },
  {
    path: "/recovery",
    name: "Recovery",
    component: Recovery,
  },
  {
    path: "/propulsion",
    name: "Propulsion",
    component: Propulsion,
  },
  {
    path: "/software",
    name: "Software",
    component: Software,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});
export default router;
