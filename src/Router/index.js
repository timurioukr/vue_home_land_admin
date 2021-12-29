import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Home" },
  { path: "/school", component: "School" },
  { path: "/kindergarten", component: "Kindergarten" },
  { path: "/centr", component: "Centr"},
  { path: "/contacts", component: "Contacts"},
  { path: "*", component: "404" },
  { path: "/admin", component: "AdminPage" },
  { path: "/login", component: "Login" },
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`)
  };
});

Vue.use(Router);


export default new Router({
  mode: "history",
  routes
});
