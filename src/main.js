import { createApp } from "vue";
import { createPinia } from "pinia";

import { auth, onAuthStateChanged } from "@/packages/firebase";
import { useStore } from "@/store";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());


onAuthStateChanged(auth, async (user) => {
  console.info("User Auth State Changed:", user ? user.uid : "No User");
  
  const store = useStore();
  if (user) await store.setUserUID(user.uid);
  else store.clearUser();
  
  await store.init();
  app.use(router);
  app.mount("#app");
});
