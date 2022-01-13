import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@themesberg/flowbite';
import "./static/css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faEllipsisH,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@themesberg/flowbite";
import Parallax from "vue-parallaxy";

library.add(faUserSecret, faEllipsisH, faAngleLeft);

createApp(App)
  .use(router)
  .use(store)
  .use(Parallax)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
