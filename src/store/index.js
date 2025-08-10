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
    role: "client",
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
    let userData = await getUserData();
    setUserData(userData);
  }

  async function setupDomain() {
    try {
      let domainData = await api.get(`/data/domain?user=${user.uid}`);

      Object.assign(domain, domainData.data); // Set Domain Configuration Data
    } catch (error) {
      console.error("Error Fetching Domain Configuration  Data:", error);
    }
  }

  function setUserData(info) {
    Object.assign(user, { ...info });
    console.log(user);
  }

  function setUserUID(uid) {
    user.uid = uid;
  }

  function clearUser() {
    Object.assign(user, {
      uid: null,
    }); // Empty User Info
  }

  async function getUserData() {
    if (user.uid) {
      try {
        let { data } = await api.get(`/data/user?uid=${user.uid}`);
        return data;
      } catch (error) {
        console.error("Error Fetching User Data:", error);
      }
    }
  }

  // === EXPOSE STATE + ACTIONS ===
  return {
    user,
    ...actions,
    init,
    setUserUID,
    clearUser,
  };
});
