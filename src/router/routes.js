const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../pages/Home/Index.vue"),
  },
  {
    name: "admin",
    path: "/admin",
    meta: { requiresAuth: true, role: "admin" },
    component: () => import("../pages/Admin/Index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/Index.vue"),
  },
];

export default routes;
