import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

import { useStore } from "@/store";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const store = useStore();
  const userRole = store.user.role;

  if (to.meta.requiresAuth) {
    if (to.meta.role && to.meta.role !== userRole) {
      return next({ name: "login" });
    }
  }

  next();
});

export default router;
