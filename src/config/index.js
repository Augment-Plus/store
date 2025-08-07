import axios from "axios";

const config = {
  app: {
    id: "vite-plus",
    name: "Basic App Template",
  },
};

function getAppInfo() {
  return config.app;
}

function configureAxios() {
  const isProd = process.env.NODE_ENV === "production";
  const devBaseURL =
    import.meta.env.VITE_DEV_URL || "http://localhost:3000";

  axios.defaults.baseURL = isProd
    ? `https://${window.location.hostname}/api`
    : `${devBaseURL}/api`;

  // Optionally set headers, timeouts, etc.
  axios.defaults.timeout = 10000;
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}

configureAxios();

export default { getAppInfo, axios };
