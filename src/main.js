import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import { boot } from "@/scripts/boot";

const app = createApp(App);
app.use(createPinia());
app.use(router);

// Optionally: wait until router is ready before mounting (good practice)
router.isReady().then(async () => {
  // initial boot for the SPA route (in case load event fired earlier or we want it aligned with router readiness)
  await boot();
  app.mount("#app");
});