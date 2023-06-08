import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});


export { axiosInstance };