import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import CarritoView from "@/views/CarritoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/carrito",
    name: "CarritoView",
    component: CarritoView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
