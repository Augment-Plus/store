import { reactive } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  // ======STATES=====
  const app = reactive({
    isInitialized: false,
    isLoggedin: false,
  });

  const customer = reactive({});
  const vendor = reactive({});

  // === ACTIONS ===
  const actions = {
    // ...appActions(app, customer, vendor),
    // ...customerActions(app, customer),
    // ...vendorActions(app, vendor),
  };

  function init() {
    app.isInitialized = true;
    console.info("Store initialized");
  }

  function setUser(uid) {}
  function clearUser() {}

  // === EXPOSE STATE + ACTIONS ===
  return {
    app,
    customer,
    vendor,
    ...actions,
    init,
    setUser,
    clearUser,
  };
});
