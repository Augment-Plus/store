import { createApp } from "vue";
import { createPinia } from "pinia";

import { auth, onAuthStateChanged } from "@/packages/firebase";
import { useStore } from "@/store";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);

// Optionally: wait until router is ready before mounting (good practice)
router.isReady().then(async () => {
  // initial boot for the SPA route (in case load event fired earlier or we want it aligned with router readiness)
  console.info("Router is ready, booting application...");

  onAuthStateChanged(auth, async (user) => {
    console.info("User Auth State Changed:", user ? user.uid : "No User");

    const store = useStore();
    if (user) await store.setUser(user.uid);
    else store.clearUser();

    await store.init();
  });

  app.mount("#app");
});
