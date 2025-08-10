import axios from "axios";

const isProd = process.env.NODE_ENV === "production";

// Configure Axios instance
export const api = axios.create({
  baseURL: isProd
    ? `https://${window.location.hostname}/api`
    : `${import.meta.env.VITE_API_BASE_URL}/api`,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});
