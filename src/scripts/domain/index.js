import config from "@/config";

const { axios } = config;

async function getData() {
  const appInfo = config.getAppInfo();

  console.log(axios.defaults.baseURL);

  try {
    const { data } = await axios.get("/data/domain");

    console.log("Fetched Domain Data:", data);
    return data;
  } catch (error) {
    console.error("Error Fetching Domain Data:", error);
    throw new Error("Domaain Data Null");
  }
}

export default { getData };
