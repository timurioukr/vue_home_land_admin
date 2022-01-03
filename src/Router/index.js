import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Home" },
  { path: "*", component: "404" },
  { path: "/admin", component: "AdminPage" },
  { path: "/login", component: "Login" },
  { path: "/parent", component: "Parent" },
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.component}.vue`)
  };
});

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes
});


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/login', '/404'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
    });
  }
  next();
})