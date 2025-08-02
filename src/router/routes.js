const routes = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("../pages/Home.vue"),
      },
      {
        name: "admin",
        path: "admin",
        component: () => import("../pages/Admin.vue"),
      },
    ],
  },
];

export default routes;
