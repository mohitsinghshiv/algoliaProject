import axios from "axios";
import config from "../config";

const { getTokenApi, updateDataApi } = config;
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const getToken = async () => {
  const data = await axios.get(getTokenApi);
  return data;
};
const updateData = async () => {
  const data = await axios.get(updateDataApi, {
    headers: headers,
  });
  if (data.status === 200) {
    window.location.reload(false);
  }
  return data;
};
const googleApi = {
  getToken,
  updateData,
};
export default googleApi;
