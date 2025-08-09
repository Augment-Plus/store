import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.info("New Page");
});
export default router;
