import axios from "axios";

export const key = "89346635";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
