import { api } from "@/packages/axios";

import { reactive } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  // ======STATES=====
  const domain = reactive({});
  const app = reactive({
    isInitialized: false,
  });
  const user = reactive({
    uid: null,
  });

  // === ACTIONS ===
  const actions = {
    // ...appActions(app, customer, vendor),
    // ...customerActions(app, customer),
    // ...vendorActions(app, vendor),
  };

  async function init() {
    app.isInitialized = true;
    console.info("Store initialized");

    // Fetch domain info based on the current hostname & user ID
    await setupDomain();
  }

  async function setupDomain() {
    try {
      let domainData = await api.get(
        `/domain/info?domain=${window.location.hostname}&user=${user.uid}`
      );
      Object.assign(domain, domainData.data);
    } catch (error) {
      console.error("Error Fetching Domain Data:", error);
    }
  }

  function setUser(uid) {
    user.uid = uid;
  }

  function clearUser() {}

  // === EXPOSE STATE + ACTIONS ===
  return {
    ...actions,
    init,
    setUser,
    clearUser,
  };
});
